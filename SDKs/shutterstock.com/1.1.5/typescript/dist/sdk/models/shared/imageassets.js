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
exports.ImageAssets = void 0;
var utils_1 = require("../../../internal/utils");
var imagesizedetails_1 = require("./imagesizedetails");
var thumbnail_1 = require("./thumbnail");
// ImageAssets
/**
 * Information about the assets that are part of an image
**/
var ImageAssets = /** @class */ (function (_super) {
    __extends(ImageAssets, _super);
    function ImageAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=huge_jpg" }),
        __metadata("design:type", imagesizedetails_1.ImageSizeDetails)
    ], ImageAssets.prototype, "hugeJpg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=huge_thumb" }),
        __metadata("design:type", thumbnail_1.Thumbnail)
    ], ImageAssets.prototype, "hugeThumb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=large_thumb" }),
        __metadata("design:type", thumbnail_1.Thumbnail)
    ], ImageAssets.prototype, "largeThumb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=medium_jpg" }),
        __metadata("design:type", imagesizedetails_1.ImageSizeDetails)
    ], ImageAssets.prototype, "mediumJpg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preview" }),
        __metadata("design:type", thumbnail_1.Thumbnail)
    ], ImageAssets.prototype, "preview", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preview_1000" }),
        __metadata("design:type", thumbnail_1.Thumbnail)
    ], ImageAssets.prototype, "preview1000", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preview_1500" }),
        __metadata("design:type", thumbnail_1.Thumbnail)
    ], ImageAssets.prototype, "preview1500", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=small_jpg" }),
        __metadata("design:type", imagesizedetails_1.ImageSizeDetails)
    ], ImageAssets.prototype, "smallJpg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=small_thumb" }),
        __metadata("design:type", thumbnail_1.Thumbnail)
    ], ImageAssets.prototype, "smallThumb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=supersize_jpg" }),
        __metadata("design:type", imagesizedetails_1.ImageSizeDetails)
    ], ImageAssets.prototype, "supersizeJpg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vector_eps" }),
        __metadata("design:type", imagesizedetails_1.ImageSizeDetails)
    ], ImageAssets.prototype, "vectorEps", void 0);
    return ImageAssets;
}(utils_1.SpeakeasyBase));
exports.ImageAssets = ImageAssets;
