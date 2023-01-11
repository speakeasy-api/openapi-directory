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
exports.EditorialVideoContent = void 0;
var utils_1 = require("../../../internal/utils");
var editorialvideoassets_1 = require("./editorialvideoassets");
var editorialcategory_1 = require("./editorialcategory");
// EditorialVideoContent
/**
 * Metadata about editorial content
**/
var EditorialVideoContent = /** @class */ (function (_super) {
    __extends(EditorialVideoContent, _super);
    function EditorialVideoContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aspect" }),
        __metadata("design:type", Number)
    ], EditorialVideoContent.prototype, "aspect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", editorialvideoassets_1.EditorialVideoAssets)
    ], EditorialVideoContent.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=byline" }),
        __metadata("design:type", String)
    ], EditorialVideoContent.prototype, "byline", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], EditorialVideoContent.prototype, "caption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories", elemType: editorialcategory_1.EditorialCategory }),
        __metadata("design:type", Array)
    ], EditorialVideoContent.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_taken" }),
        __metadata("design:type", Date)
    ], EditorialVideoContent.prototype, "dateTaken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EditorialVideoContent.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EditorialVideoContent.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keywords" }),
        __metadata("design:type", Array)
    ], EditorialVideoContent.prototype, "keywords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], EditorialVideoContent.prototype, "title", void 0);
    return EditorialVideoContent;
}(utils_1.SpeakeasyBase));
exports.EditorialVideoContent = EditorialVideoContent;
