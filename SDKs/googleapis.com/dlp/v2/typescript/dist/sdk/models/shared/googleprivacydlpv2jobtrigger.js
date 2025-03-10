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
exports.GooglePrivacyDlpV2JobTriggerInput = exports.GooglePrivacyDlpV2JobTrigger = exports.GooglePrivacyDlpV2JobTriggerStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2error_1 = require("./googleprivacydlpv2error");
var googleprivacydlpv2inspectjobconfig_1 = require("./googleprivacydlpv2inspectjobconfig");
var googleprivacydlpv2trigger_1 = require("./googleprivacydlpv2trigger");
var class_transformer_1 = require("class-transformer");
/**
 * Required. A status for this trigger.
 */
var GooglePrivacyDlpV2JobTriggerStatusEnum;
(function (GooglePrivacyDlpV2JobTriggerStatusEnum) {
    GooglePrivacyDlpV2JobTriggerStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    GooglePrivacyDlpV2JobTriggerStatusEnum["Healthy"] = "HEALTHY";
    GooglePrivacyDlpV2JobTriggerStatusEnum["Paused"] = "PAUSED";
    GooglePrivacyDlpV2JobTriggerStatusEnum["Cancelled"] = "CANCELLED";
})(GooglePrivacyDlpV2JobTriggerStatusEnum = exports.GooglePrivacyDlpV2JobTriggerStatusEnum || (exports.GooglePrivacyDlpV2JobTriggerStatusEnum = {}));
/**
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
 */
var GooglePrivacyDlpV2JobTrigger = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2JobTrigger, _super);
    function GooglePrivacyDlpV2JobTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "createTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "displayName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: googleprivacydlpv2error_1.GooglePrivacyDlpV2Error }),
        (0, class_transformer_1.Expose)({ name: "errors" }),
        (0, class_transformer_1.Type)(function () { return googleprivacydlpv2error_1.GooglePrivacyDlpV2Error; }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "inspectJob" }),
        (0, class_transformer_1.Type)(function () { return googleprivacydlpv2inspectjobconfig_1.GooglePrivacyDlpV2InspectJobConfig; }),
        __metadata("design:type", googleprivacydlpv2inspectjobconfig_1.GooglePrivacyDlpV2InspectJobConfig)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "inspectJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "lastRunTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "lastRunTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: googleprivacydlpv2trigger_1.GooglePrivacyDlpV2Trigger }),
        (0, class_transformer_1.Expose)({ name: "triggers" }),
        (0, class_transformer_1.Type)(function () { return googleprivacydlpv2trigger_1.GooglePrivacyDlpV2Trigger; }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "triggers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updateTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "updateTime", void 0);
    return GooglePrivacyDlpV2JobTrigger;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2JobTrigger = GooglePrivacyDlpV2JobTrigger;
/**
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
 */
var GooglePrivacyDlpV2JobTriggerInput = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2JobTriggerInput, _super);
    function GooglePrivacyDlpV2JobTriggerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "displayName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "inspectJob" }),
        (0, class_transformer_1.Type)(function () { return googleprivacydlpv2inspectjobconfig_1.GooglePrivacyDlpV2InspectJobConfig; }),
        __metadata("design:type", googleprivacydlpv2inspectjobconfig_1.GooglePrivacyDlpV2InspectJobConfig)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "inspectJob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: googleprivacydlpv2trigger_1.GooglePrivacyDlpV2Trigger }),
        (0, class_transformer_1.Expose)({ name: "triggers" }),
        (0, class_transformer_1.Type)(function () { return googleprivacydlpv2trigger_1.GooglePrivacyDlpV2Trigger; }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "triggers", void 0);
    return GooglePrivacyDlpV2JobTriggerInput;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2JobTriggerInput = GooglePrivacyDlpV2JobTriggerInput;
