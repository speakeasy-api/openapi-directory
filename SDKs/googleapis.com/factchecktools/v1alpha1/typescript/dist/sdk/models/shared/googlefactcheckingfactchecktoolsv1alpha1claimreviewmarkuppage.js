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
exports.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage = void 0;
var utils_1 = require("../../../internal/utils");
var googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor_1 = require("./googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor");
var googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup_1 = require("./googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup");
// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
/**
 * Holds one or more instances of `ClaimReview` markup for a webpage.
**/
var GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage = /** @class */ (function (_super) {
    __extends(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage, _super);
    function GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=claimReviewAuthor" }),
        __metadata("design:type", googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor_1.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage.prototype, "claimReviewAuthor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=claimReviewMarkups", elemType: googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup_1.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup }),
        __metadata("design:type", Array)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage.prototype, "claimReviewMarkups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageUrl" }),
        __metadata("design:type", String)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage.prototype, "pageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publishDate" }),
        __metadata("design:type", String)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage.prototype, "publishDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=versionId" }),
        __metadata("design:type", String)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage.prototype, "versionId", void 0);
    return GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
}(utils_1.SpeakeasyBase));
exports.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage = GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
