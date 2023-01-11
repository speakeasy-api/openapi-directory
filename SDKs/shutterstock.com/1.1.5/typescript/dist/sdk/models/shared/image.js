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
var imageassets_1 = require("./imageassets");
var category_1 = require("./category");
var contributor_1 = require("./contributor");
var modelrelease_1 = require("./modelrelease");
var model_1 = require("./model");
// Image
/**
 * Information about an image
**/
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_date" }),
        __metadata("design:type", Date)
    ], Image.prototype, "addedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=affiliate_url" }),
        __metadata("design:type", String)
    ], Image.prototype, "affiliateUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aspect" }),
        __metadata("design:type", Number)
    ], Image.prototype, "aspect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", imageassets_1.ImageAssets)
    ], Image.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories", elemType: category_1.Category }),
        __metadata("design:type", Array)
    ], Image.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contributor" }),
        __metadata("design:type", contributor_1.Contributor)
    ], Image.prototype, "contributor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Image.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_model_release" }),
        __metadata("design:type", Boolean)
    ], Image.prototype, "hasModelRelease", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_property_release" }),
        __metadata("design:type", Boolean)
    ], Image.prototype, "hasPropertyRelease", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Image.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image_type" }),
        __metadata("design:type", String)
    ], Image.prototype, "imageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_adult" }),
        __metadata("design:type", Boolean)
    ], Image.prototype, "isAdult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_editorial" }),
        __metadata("design:type", Boolean)
    ], Image.prototype, "isEditorial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_illustration" }),
        __metadata("design:type", Boolean)
    ], Image.prototype, "isIllustration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keywords" }),
        __metadata("design:type", Array)
    ], Image.prototype, "keywords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media_type" }),
        __metadata("design:type", String)
    ], Image.prototype, "mediaType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=model_releases", elemType: modelrelease_1.ModelRelease }),
        __metadata("design:type", Array)
    ], Image.prototype, "modelReleases", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=models", elemType: model_1.Model }),
        __metadata("design:type", Array)
    ], Image.prototype, "models", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releases" }),
        __metadata("design:type", Array)
    ], Image.prototype, "releases", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Image.prototype, "url", void 0);
    return Image;
}(utils_1.SpeakeasyBase));
exports.Image = Image;
