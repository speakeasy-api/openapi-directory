"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.Site = void 0;
var utils_1 = require("../../../internal/utils");
var dimensionvalue_1 = require("./dimensionvalue");
var sitecontact_1 = require("./sitecontact");
var sitesettings_1 = require("./sitesettings");
var sitevideosettings_1 = require("./sitevideosettings");
var class_transformer_1 = require("class-transformer");
/**
 * Contains properties of a site.
 */
var Site = /** @class */ (function (_super) {
    __extends(Site, _super);
    function Site() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "accountId" }),
        __metadata("design:type", String)
    ], Site.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "approved" }),
        __metadata("design:type", Boolean)
    ], Site.prototype, "approved", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "directorySiteId" }),
        __metadata("design:type", String)
    ], Site.prototype, "directorySiteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "directorySiteIdDimensionValue" }),
        (0, class_transformer_1.Type)(function () { return dimensionvalue_1.DimensionValue; }),
        __metadata("design:type", dimensionvalue_1.DimensionValue)
    ], Site.prototype, "directorySiteIdDimensionValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], Site.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "idDimensionValue" }),
        (0, class_transformer_1.Type)(function () { return dimensionvalue_1.DimensionValue; }),
        __metadata("design:type", dimensionvalue_1.DimensionValue)
    ], Site.prototype, "idDimensionValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "keyName" }),
        __metadata("design:type", String)
    ], Site.prototype, "keyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "kind" }),
        __metadata("design:type", String)
    ], Site.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], Site.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: sitecontact_1.SiteContact }),
        (0, class_transformer_1.Expose)({ name: "siteContacts" }),
        (0, class_transformer_1.Type)(function () { return sitecontact_1.SiteContact; }),
        __metadata("design:type", Array)
    ], Site.prototype, "siteContacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "siteSettings" }),
        (0, class_transformer_1.Type)(function () { return sitesettings_1.SiteSettings; }),
        __metadata("design:type", sitesettings_1.SiteSettings)
    ], Site.prototype, "siteSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "subaccountId" }),
        __metadata("design:type", String)
    ], Site.prototype, "subaccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "videoSettings" }),
        (0, class_transformer_1.Type)(function () { return sitevideosettings_1.SiteVideoSettings; }),
        __metadata("design:type", sitevideosettings_1.SiteVideoSettings)
    ], Site.prototype, "videoSettings", void 0);
    return Site;
}(utils_1.SpeakeasyBase));
exports.Site = Site;
