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
exports.ContributorProfile = void 0;
var utils_1 = require("../../../internal/utils");
var contributorprofilesocialmedia_1 = require("./contributorprofilesocialmedia");
// ContributorProfile
/**
 * Contributor profile data
**/
var ContributorProfile = /** @class */ (function (_super) {
    __extends(ContributorProfile, _super);
    function ContributorProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=about" }),
        __metadata("design:type", String)
    ], ContributorProfile.prototype, "about", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contributor_type" }),
        __metadata("design:type", Array)
    ], ContributorProfile.prototype, "contributorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], ContributorProfile.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=equipment" }),
        __metadata("design:type", Array)
    ], ContributorProfile.prototype, "equipment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ContributorProfile.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ContributorProfile.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolio_url" }),
        __metadata("design:type", String)
    ], ContributorProfile.prototype, "portfolioUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=social_media" }),
        __metadata("design:type", contributorprofilesocialmedia_1.ContributorProfileSocialMedia)
    ], ContributorProfile.prototype, "socialMedia", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=styles" }),
        __metadata("design:type", Array)
    ], ContributorProfile.prototype, "styles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subjects" }),
        __metadata("design:type", Array)
    ], ContributorProfile.prototype, "subjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], ContributorProfile.prototype, "website", void 0);
    return ContributorProfile;
}(utils_1.SpeakeasyBase));
exports.ContributorProfile = ContributorProfile;
