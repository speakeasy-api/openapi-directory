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
exports.Video = void 0;
var utils_1 = require("../../../internal/utils");
var videoassets_1 = require("./videoassets");
var category_1 = require("./category");
var contributor_1 = require("./contributor");
var model_1 = require("./model");
// Video
/**
 * Information about a video
**/
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_date" }),
        __metadata("design:type", Date)
    ], Video.prototype, "addedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=affiliate_url" }),
        __metadata("design:type", String)
    ], Video.prototype, "affiliateUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aspect" }),
        __metadata("design:type", Number)
    ], Video.prototype, "aspect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aspect_ratio" }),
        __metadata("design:type", String)
    ], Video.prototype, "aspectRatio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", videoassets_1.VideoAssets)
    ], Video.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories", elemType: category_1.Category }),
        __metadata("design:type", Array)
    ], Video.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contributor" }),
        __metadata("design:type", contributor_1.Contributor)
    ], Video.prototype, "contributor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Video.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Video.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_model_release" }),
        __metadata("design:type", Boolean)
    ], Video.prototype, "hasModelRelease", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_property_release" }),
        __metadata("design:type", Boolean)
    ], Video.prototype, "hasPropertyRelease", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Video.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_adult" }),
        __metadata("design:type", Boolean)
    ], Video.prototype, "isAdult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_editorial" }),
        __metadata("design:type", Boolean)
    ], Video.prototype, "isEditorial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keywords" }),
        __metadata("design:type", Array)
    ], Video.prototype, "keywords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media_type" }),
        __metadata("design:type", String)
    ], Video.prototype, "mediaType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=models", elemType: model_1.Model }),
        __metadata("design:type", Array)
    ], Video.prototype, "models", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Video.prototype, "url", void 0);
    return Video;
}(utils_1.SpeakeasyBase));
exports.Video = Video;
