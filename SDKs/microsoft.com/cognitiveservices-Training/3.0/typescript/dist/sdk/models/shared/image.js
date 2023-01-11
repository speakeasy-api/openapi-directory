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
exports.Image = void 0;
var utils_1 = require("../../../internal/utils");
var imageregion_1 = require("./imageregion");
var imagetag_1 = require("./imagetag");
// Image
/**
 * Image model to be sent as JSON.
**/
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Image.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], Image.prototype, "height", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Image.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originalImageUri" }),
        __metadata("design:type", String)
    ], Image.prototype, "originalImageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regions", elemType: imageregion_1.ImageRegion }),
        __metadata("design:type", Array)
    ], Image.prototype, "regions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resizedImageUri" }),
        __metadata("design:type", String)
    ], Image.prototype, "resizedImageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: imagetag_1.ImageTag }),
        __metadata("design:type", Array)
    ], Image.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumbnailUri" }),
        __metadata("design:type", String)
    ], Image.prototype, "thumbnailUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], Image.prototype, "width", void 0);
    return Image;
}(utils_1.SpeakeasyBase));
exports.Image = Image;
