"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfWriteStringOptionsInput = void 0;
var utils_1 = require("../../../internal/utils");
var fontdto_1 = require("./fontdto");
// PdfWriteStringOptionsInput
/**
 * Options for writing string in pdf page;
**/
var PdfWriteStringOptionsInput = /** @class */ (function (_super) {
    __extends(PdfWriteStringOptionsInput, _super);
    function PdfWriteStringOptionsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Font" }),
        __metadata("design:type", fontdto_1.FontDtoInput)
    ], PdfWriteStringOptionsInput.prototype, "font", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PageNumber" }),
        __metadata("design:type", Number)
    ], PdfWriteStringOptionsInput.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Text" }),
        __metadata("design:type", String)
    ], PdfWriteStringOptionsInput.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=XOrigin" }),
        __metadata("design:type", Number)
    ], PdfWriteStringOptionsInput.prototype, "xOrigin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=XPosition" }),
        __metadata("design:type", Number)
    ], PdfWriteStringOptionsInput.prototype, "xPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=YOrigin" }),
        __metadata("design:type", Number)
    ], PdfWriteStringOptionsInput.prototype, "yOrigin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=YPosition" }),
        __metadata("design:type", Number)
    ], PdfWriteStringOptionsInput.prototype, "yPosition", void 0);
    return PdfWriteStringOptionsInput;
}(utils_1.SpeakeasyBase));
exports.PdfWriteStringOptionsInput = PdfWriteStringOptionsInput;
