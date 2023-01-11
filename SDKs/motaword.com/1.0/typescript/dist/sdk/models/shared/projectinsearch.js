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
exports.ProjectInSearch = exports.ProjectInSearchPriceWithoutDiscount = exports.ProjectInSearchPrice = void 0;
var utils_1 = require("../../../internal/utils");
var user_1 = require("./user");
var error_1 = require("./error");
var projectlinks_1 = require("./projectlinks");
var vendorprojectpair_1 = require("./vendorprojectpair");
var vendorprojectroleenum_1 = require("./vendorprojectroleenum");
var projectsourceenum_1 = require("./projectsourceenum");
var projectstatusenum_1 = require("./projectstatusenum");
var ProjectInSearchPrice = /** @class */ (function (_super) {
    __extends(ProjectInSearchPrice, _super);
    function ProjectInSearchPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], ProjectInSearchPrice.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ProjectInSearchPrice.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usd_amount" }),
        __metadata("design:type", Number)
    ], ProjectInSearchPrice.prototype, "usdAmount", void 0);
    return ProjectInSearchPrice;
}(utils_1.SpeakeasyBase));
exports.ProjectInSearchPrice = ProjectInSearchPrice;
var ProjectInSearchPriceWithoutDiscount = /** @class */ (function (_super) {
    __extends(ProjectInSearchPriceWithoutDiscount, _super);
    function ProjectInSearchPriceWithoutDiscount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], ProjectInSearchPriceWithoutDiscount.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ProjectInSearchPriceWithoutDiscount.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usd_amount" }),
        __metadata("design:type", Number)
    ], ProjectInSearchPriceWithoutDiscount.prototype, "usdAmount", void 0);
    return ProjectInSearchPriceWithoutDiscount;
}(utils_1.SpeakeasyBase));
exports.ProjectInSearchPriceWithoutDiscount = ProjectInSearchPriceWithoutDiscount;
var ProjectInSearch = /** @class */ (function (_super) {
    __extends(ProjectInSearch, _super);
    function ProjectInSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=average_scores" }),
        __metadata("design:type", Object)
    ], ProjectInSearch.prototype, "averageScores", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=budget_code" }),
        __metadata("design:type", String)
    ], ProjectInSearch.prototype, "budgetCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callback_url" }),
        __metadata("design:type", String)
    ], ProjectInSearch.prototype, "callbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client" }),
        __metadata("design:type", user_1.User)
    ], ProjectInSearch.prototype, "client", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed_on" }),
        __metadata("design:type", Date)
    ], ProjectInSearch.prototype, "completedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=continuous_project_type" }),
        __metadata("design:type", String)
    ], ProjectInSearch.prototype, "continuousProjectType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], ProjectInSearch.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom" }),
        __metadata("design:type", Object)
    ], ProjectInSearch.prototype, "custom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delivery_at" }),
        __metadata("design:type", Number)
    ], ProjectInSearch.prototype, "deliveryAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], ProjectInSearch.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ProjectInSearch.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_api_project" }),
        __metadata("design:type", Boolean)
    ], ProjectInSearch.prototype, "isApiProject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_certified" }),
        __metadata("design:type", Boolean)
    ], ProjectInSearch.prototype, "isCertified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_continuous" }),
        __metadata("design:type", Boolean)
    ], ProjectInSearch.prototype, "isContinuous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_manual" }),
        __metadata("design:type", Boolean)
    ], ProjectInSearch.prototype, "isManual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", projectlinks_1.ProjectLinks)
    ], ProjectInSearch.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pairs", elemType: vendorprojectpair_1.VendorProjectPair }),
        __metadata("design:type", Array)
    ], ProjectInSearch.prototype, "pairs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", ProjectInSearchPrice)
    ], ProjectInSearch.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price_without_discount" }),
        __metadata("design:type", ProjectInSearchPriceWithoutDiscount)
    ], ProjectInSearch.prototype, "priceWithoutDiscount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], ProjectInSearch.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_result_reason" }),
        __metadata("design:type", String)
    ], ProjectInSearch.prototype, "searchResultReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=should_send_client_survey" }),
        __metadata("design:type", Boolean)
    ], ProjectInSearch.prototype, "shouldSendClientSurvey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], ProjectInSearch.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_language" }),
        __metadata("design:type", String)
    ], ProjectInSearch.prototype, "sourceLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ProjectInSearch.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subjects" }),
        __metadata("design:type", Array)
    ], ProjectInSearch.prototype, "subjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_languages" }),
        __metadata("design:type", Array)
    ], ProjectInSearch.prototype, "targetLanguages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tms_name" }),
        __metadata("design:type", String)
    ], ProjectInSearch.prototype, "tmsName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valid_until" }),
        __metadata("design:type", Number)
    ], ProjectInSearch.prototype, "validUntil", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vendor_word_count" }),
        __metadata("design:type", Number)
    ], ProjectInSearch.prototype, "vendorWordCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=word_count" }),
        __metadata("design:type", Number)
    ], ProjectInSearch.prototype, "wordCount", void 0);
    return ProjectInSearch;
}(utils_1.SpeakeasyBase));
exports.ProjectInSearch = ProjectInSearch;
