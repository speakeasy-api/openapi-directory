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
exports.AdmissionRule = exports.AdmissionRuleEvaluationModeEnum = exports.AdmissionRuleEnforcementModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var AdmissionRuleEnforcementModeEnum;
(function (AdmissionRuleEnforcementModeEnum) {
    AdmissionRuleEnforcementModeEnum["EnforcementModeUnspecified"] = "ENFORCEMENT_MODE_UNSPECIFIED";
    AdmissionRuleEnforcementModeEnum["EnforcedBlockAndAuditLog"] = "ENFORCED_BLOCK_AND_AUDIT_LOG";
    AdmissionRuleEnforcementModeEnum["DryrunAuditLogOnly"] = "DRYRUN_AUDIT_LOG_ONLY";
})(AdmissionRuleEnforcementModeEnum = exports.AdmissionRuleEnforcementModeEnum || (exports.AdmissionRuleEnforcementModeEnum = {}));
var AdmissionRuleEvaluationModeEnum;
(function (AdmissionRuleEvaluationModeEnum) {
    AdmissionRuleEvaluationModeEnum["EvaluationModeUnspecified"] = "EVALUATION_MODE_UNSPECIFIED";
    AdmissionRuleEvaluationModeEnum["AlwaysAllow"] = "ALWAYS_ALLOW";
    AdmissionRuleEvaluationModeEnum["RequireAttestation"] = "REQUIRE_ATTESTATION";
    AdmissionRuleEvaluationModeEnum["AlwaysDeny"] = "ALWAYS_DENY";
})(AdmissionRuleEvaluationModeEnum = exports.AdmissionRuleEvaluationModeEnum || (exports.AdmissionRuleEvaluationModeEnum = {}));
var AdmissionRule = /** @class */ (function (_super) {
    __extends(AdmissionRule, _super);
    function AdmissionRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforcementMode" }),
        __metadata("design:type", String)
    ], AdmissionRule.prototype, "enforcementMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=evaluationMode" }),
        __metadata("design:type", String)
    ], AdmissionRule.prototype, "evaluationMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requireAttestationsBy" }),
        __metadata("design:type", Array)
    ], AdmissionRule.prototype, "requireAttestationsBy", void 0);
    return AdmissionRule;
}(utils_1.SpeakeasyBase));
exports.AdmissionRule = AdmissionRule;
