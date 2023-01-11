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
exports.CoveragePlanResult = exports.CoveragePlanResultCobraRules = void 0;
var utils_1 = require("../../../internal/utils");
var contributiondetails_1 = require("./contributiondetails");
var coveragedetails_1 = require("./coveragedetails");
var ratemodel_1 = require("./ratemodel");
// CoveragePlanResultCobraRules
/**
 * COBRA rules for the group medical plan
**/
var CoveragePlanResultCobraRules = /** @class */ (function (_super) {
    __extends(CoveragePlanResultCobraRules, _super);
    function CoveragePlanResultCobraRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eligible" }),
        __metadata("design:type", Boolean)
    ], CoveragePlanResultCobraRules.prototype, "eligible", void 0);
    return CoveragePlanResultCobraRules;
}(utils_1.SpeakeasyBase));
exports.CoveragePlanResultCobraRules = CoveragePlanResultCobraRules;
var CoveragePlanResult = /** @class */ (function (_super) {
    __extends(CoveragePlanResult, _super);
    function CoveragePlanResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=benefit_details" }),
        __metadata("design:type", Array)
    ], CoveragePlanResult.prototype, "benefitDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cobra_rules" }),
        __metadata("design:type", CoveragePlanResultCobraRules)
    ], CoveragePlanResult.prototype, "cobraRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CoveragePlanResult.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contribution_details", elemType: contributiondetails_1.ContributionDetails }),
        __metadata("design:type", Array)
    ], CoveragePlanResult.prototype, "contributionDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverage_details" }),
        __metadata("design:type", coveragedetails_1.CoverageDetails)
    ], CoveragePlanResult.prototype, "coverageDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], CoveragePlanResult.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=existing_plan" }),
        __metadata("design:type", Boolean)
    ], CoveragePlanResult.prototype, "existingPlan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_coverage_id" }),
        __metadata("design:type", String)
    ], CoveragePlanResult.prototype, "groupCoverageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CoveragePlanResult.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], CoveragePlanResult.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], CoveragePlanResult.prototype, "network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], CoveragePlanResult.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_name" }),
        __metadata("design:type", String)
    ], CoveragePlanResult.prototype, "planName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_type" }),
        __metadata("design:type", String)
    ], CoveragePlanResult.prototype, "planType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product_type" }),
        __metadata("design:type", String)
    ], CoveragePlanResult.prototype, "productType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rate_details", elemType: ratemodel_1.RateModel }),
        __metadata("design:type", Array)
    ], CoveragePlanResult.prototype, "rateDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termination_policy" }),
        __metadata("design:type", String)
    ], CoveragePlanResult.prototype, "terminationPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CoveragePlanResult.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volume_rules" }),
        __metadata("design:type", String)
    ], CoveragePlanResult.prototype, "volumeRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_period_rules" }),
        __metadata("design:type", Array)
    ], CoveragePlanResult.prototype, "waitingPeriodRules", void 0);
    return CoveragePlanResult;
}(utils_1.SpeakeasyBase));
exports.CoveragePlanResult = CoveragePlanResult;
