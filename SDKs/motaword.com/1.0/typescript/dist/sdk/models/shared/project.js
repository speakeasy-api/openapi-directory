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
exports.Project = exports.ProjectPriceWithoutDiscount = exports.ProjectPrice = void 0;
var utils_1 = require("../../../internal/utils");
var user_1 = require("./user");
var error_1 = require("./error");
var projectlinks_1 = require("./projectlinks");
var vendorprojectpair_1 = require("./vendorprojectpair");
var vendorprojectroleenum_1 = require("./vendorprojectroleenum");
var projectsourceenum_1 = require("./projectsourceenum");
var projectstatusenum_1 = require("./projectstatusenum");
var ProjectPrice = /** @class */ (function (_super) {
    __extends(ProjectPrice, _super);
    function ProjectPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], ProjectPrice.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ProjectPrice.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usd_amount" }),
        __metadata("design:type", Number)
    ], ProjectPrice.prototype, "usdAmount", void 0);
    return ProjectPrice;
}(utils_1.SpeakeasyBase));
exports.ProjectPrice = ProjectPrice;
var ProjectPriceWithoutDiscount = /** @class */ (function (_super) {
    __extends(ProjectPriceWithoutDiscount, _super);
    function ProjectPriceWithoutDiscount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], ProjectPriceWithoutDiscount.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ProjectPriceWithoutDiscount.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usd_amount" }),
        __metadata("design:type", Number)
    ], ProjectPriceWithoutDiscount.prototype, "usdAmount", void 0);
    return ProjectPriceWithoutDiscount;
}(utils_1.SpeakeasyBase));
exports.ProjectPriceWithoutDiscount = ProjectPriceWithoutDiscount;
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=average_scores" }),
        __metadata("design:type", Object)
    ], Project.prototype, "averageScores", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=budget_code" }),
        __metadata("design:type", String)
    ], Project.prototype, "budgetCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callback_url" }),
        __metadata("design:type", String)
    ], Project.prototype, "callbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client" }),
        __metadata("design:type", user_1.User)
    ], Project.prototype, "client", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed_on" }),
        __metadata("design:type", Date)
    ], Project.prototype, "completedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=continuous_project_type" }),
        __metadata("design:type", String)
    ], Project.prototype, "continuousProjectType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], Project.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom" }),
        __metadata("design:type", Object)
    ], Project.prototype, "custom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delivery_at" }),
        __metadata("design:type", Number)
    ], Project.prototype, "deliveryAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], Project.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Project.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_api_project" }),
        __metadata("design:type", Boolean)
    ], Project.prototype, "isApiProject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_certified" }),
        __metadata("design:type", Boolean)
    ], Project.prototype, "isCertified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_continuous" }),
        __metadata("design:type", Boolean)
    ], Project.prototype, "isContinuous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_manual" }),
        __metadata("design:type", Boolean)
    ], Project.prototype, "isManual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", projectlinks_1.ProjectLinks)
    ], Project.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pairs", elemType: vendorprojectpair_1.VendorProjectPair }),
        __metadata("design:type", Array)
    ], Project.prototype, "pairs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", ProjectPrice)
    ], Project.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price_without_discount" }),
        __metadata("design:type", ProjectPriceWithoutDiscount)
    ], Project.prototype, "priceWithoutDiscount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], Project.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=should_send_client_survey" }),
        __metadata("design:type", Boolean)
    ], Project.prototype, "shouldSendClientSurvey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Project.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_language" }),
        __metadata("design:type", String)
    ], Project.prototype, "sourceLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Project.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subjects" }),
        __metadata("design:type", Array)
    ], Project.prototype, "subjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_languages" }),
        __metadata("design:type", Array)
    ], Project.prototype, "targetLanguages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tms_name" }),
        __metadata("design:type", String)
    ], Project.prototype, "tmsName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valid_until" }),
        __metadata("design:type", Number)
    ], Project.prototype, "validUntil", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vendor_word_count" }),
        __metadata("design:type", Number)
    ], Project.prototype, "vendorWordCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=word_count" }),
        __metadata("design:type", Number)
    ], Project.prototype, "wordCount", void 0);
    return Project;
}(utils_1.SpeakeasyBase));
exports.Project = Project;
