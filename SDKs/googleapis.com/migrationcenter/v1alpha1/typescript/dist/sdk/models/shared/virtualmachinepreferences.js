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
exports.VirtualMachinePreferences = exports.VirtualMachinePreferencesSizingOptimizationStrategyEnum = exports.VirtualMachinePreferencesCommitmentPlanEnum = void 0;
var utils_1 = require("../../../internal/utils");
var computeenginepreferences_1 = require("./computeenginepreferences");
var regionpreferences_1 = require("./regionpreferences");
var class_transformer_1 = require("class-transformer");
/**
 * Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
 */
var VirtualMachinePreferencesCommitmentPlanEnum;
(function (VirtualMachinePreferencesCommitmentPlanEnum) {
    VirtualMachinePreferencesCommitmentPlanEnum["CommitmentPlanUnspecified"] = "COMMITMENT_PLAN_UNSPECIFIED";
    VirtualMachinePreferencesCommitmentPlanEnum["CommitmentPlanNone"] = "COMMITMENT_PLAN_NONE";
    VirtualMachinePreferencesCommitmentPlanEnum["CommitmentPlanOneYear"] = "COMMITMENT_PLAN_ONE_YEAR";
    VirtualMachinePreferencesCommitmentPlanEnum["CommitmentPlanThreeYears"] = "COMMITMENT_PLAN_THREE_YEARS";
})(VirtualMachinePreferencesCommitmentPlanEnum = exports.VirtualMachinePreferencesCommitmentPlanEnum || (exports.VirtualMachinePreferencesCommitmentPlanEnum = {}));
/**
 * Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with.
 */
var VirtualMachinePreferencesSizingOptimizationStrategyEnum;
(function (VirtualMachinePreferencesSizingOptimizationStrategyEnum) {
    VirtualMachinePreferencesSizingOptimizationStrategyEnum["SizingOptimizationStrategyUnspecified"] = "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED";
    VirtualMachinePreferencesSizingOptimizationStrategyEnum["SizingOptimizationStrategySameAsSource"] = "SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE";
    VirtualMachinePreferencesSizingOptimizationStrategyEnum["SizingOptimizationStrategyModerate"] = "SIZING_OPTIMIZATION_STRATEGY_MODERATE";
    VirtualMachinePreferencesSizingOptimizationStrategyEnum["SizingOptimizationStrategyAggressive"] = "SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE";
})(VirtualMachinePreferencesSizingOptimizationStrategyEnum = exports.VirtualMachinePreferencesSizingOptimizationStrategyEnum || (exports.VirtualMachinePreferencesSizingOptimizationStrategyEnum = {}));
/**
 * VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.
 */
var VirtualMachinePreferences = /** @class */ (function (_super) {
    __extends(VirtualMachinePreferences, _super);
    function VirtualMachinePreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "commitmentPlan" }),
        __metadata("design:type", String)
    ], VirtualMachinePreferences.prototype, "commitmentPlan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "computeEnginePreferences" }),
        (0, class_transformer_1.Type)(function () { return computeenginepreferences_1.ComputeEnginePreferences; }),
        __metadata("design:type", computeenginepreferences_1.ComputeEnginePreferences)
    ], VirtualMachinePreferences.prototype, "computeEnginePreferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "regionPreferences" }),
        (0, class_transformer_1.Type)(function () { return regionpreferences_1.RegionPreferences; }),
        __metadata("design:type", regionpreferences_1.RegionPreferences)
    ], VirtualMachinePreferences.prototype, "regionPreferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sizingOptimizationStrategy" }),
        __metadata("design:type", String)
    ], VirtualMachinePreferences.prototype, "sizingOptimizationStrategy", void 0);
    return VirtualMachinePreferences;
}(utils_1.SpeakeasyBase));
exports.VirtualMachinePreferences = VirtualMachinePreferences;
