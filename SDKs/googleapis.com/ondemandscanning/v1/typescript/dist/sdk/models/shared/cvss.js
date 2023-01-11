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
exports.Cvss = exports.CvssUserInteractionEnum = exports.CvssScopeEnum = exports.CvssPrivilegesRequiredEnum = exports.CvssIntegrityImpactEnum = exports.CvssConfidentialityImpactEnum = exports.CvssAvailabilityImpactEnum = exports.CvssAuthenticationEnum = exports.CvssAttackVectorEnum = exports.CvssAttackComplexityEnum = void 0;
var utils_1 = require("../../../internal/utils");
var CvssAttackComplexityEnum;
(function (CvssAttackComplexityEnum) {
    CvssAttackComplexityEnum["AttackComplexityUnspecified"] = "ATTACK_COMPLEXITY_UNSPECIFIED";
    CvssAttackComplexityEnum["AttackComplexityLow"] = "ATTACK_COMPLEXITY_LOW";
    CvssAttackComplexityEnum["AttackComplexityHigh"] = "ATTACK_COMPLEXITY_HIGH";
})(CvssAttackComplexityEnum = exports.CvssAttackComplexityEnum || (exports.CvssAttackComplexityEnum = {}));
var CvssAttackVectorEnum;
(function (CvssAttackVectorEnum) {
    CvssAttackVectorEnum["AttackVectorUnspecified"] = "ATTACK_VECTOR_UNSPECIFIED";
    CvssAttackVectorEnum["AttackVectorNetwork"] = "ATTACK_VECTOR_NETWORK";
    CvssAttackVectorEnum["AttackVectorAdjacent"] = "ATTACK_VECTOR_ADJACENT";
    CvssAttackVectorEnum["AttackVectorLocal"] = "ATTACK_VECTOR_LOCAL";
    CvssAttackVectorEnum["AttackVectorPhysical"] = "ATTACK_VECTOR_PHYSICAL";
})(CvssAttackVectorEnum = exports.CvssAttackVectorEnum || (exports.CvssAttackVectorEnum = {}));
var CvssAuthenticationEnum;
(function (CvssAuthenticationEnum) {
    CvssAuthenticationEnum["AuthenticationUnspecified"] = "AUTHENTICATION_UNSPECIFIED";
    CvssAuthenticationEnum["AuthenticationMultiple"] = "AUTHENTICATION_MULTIPLE";
    CvssAuthenticationEnum["AuthenticationSingle"] = "AUTHENTICATION_SINGLE";
    CvssAuthenticationEnum["AuthenticationNone"] = "AUTHENTICATION_NONE";
})(CvssAuthenticationEnum = exports.CvssAuthenticationEnum || (exports.CvssAuthenticationEnum = {}));
var CvssAvailabilityImpactEnum;
(function (CvssAvailabilityImpactEnum) {
    CvssAvailabilityImpactEnum["ImpactUnspecified"] = "IMPACT_UNSPECIFIED";
    CvssAvailabilityImpactEnum["ImpactHigh"] = "IMPACT_HIGH";
    CvssAvailabilityImpactEnum["ImpactLow"] = "IMPACT_LOW";
    CvssAvailabilityImpactEnum["ImpactNone"] = "IMPACT_NONE";
})(CvssAvailabilityImpactEnum = exports.CvssAvailabilityImpactEnum || (exports.CvssAvailabilityImpactEnum = {}));
var CvssConfidentialityImpactEnum;
(function (CvssConfidentialityImpactEnum) {
    CvssConfidentialityImpactEnum["ImpactUnspecified"] = "IMPACT_UNSPECIFIED";
    CvssConfidentialityImpactEnum["ImpactHigh"] = "IMPACT_HIGH";
    CvssConfidentialityImpactEnum["ImpactLow"] = "IMPACT_LOW";
    CvssConfidentialityImpactEnum["ImpactNone"] = "IMPACT_NONE";
})(CvssConfidentialityImpactEnum = exports.CvssConfidentialityImpactEnum || (exports.CvssConfidentialityImpactEnum = {}));
var CvssIntegrityImpactEnum;
(function (CvssIntegrityImpactEnum) {
    CvssIntegrityImpactEnum["ImpactUnspecified"] = "IMPACT_UNSPECIFIED";
    CvssIntegrityImpactEnum["ImpactHigh"] = "IMPACT_HIGH";
    CvssIntegrityImpactEnum["ImpactLow"] = "IMPACT_LOW";
    CvssIntegrityImpactEnum["ImpactNone"] = "IMPACT_NONE";
})(CvssIntegrityImpactEnum = exports.CvssIntegrityImpactEnum || (exports.CvssIntegrityImpactEnum = {}));
var CvssPrivilegesRequiredEnum;
(function (CvssPrivilegesRequiredEnum) {
    CvssPrivilegesRequiredEnum["PrivilegesRequiredUnspecified"] = "PRIVILEGES_REQUIRED_UNSPECIFIED";
    CvssPrivilegesRequiredEnum["PrivilegesRequiredNone"] = "PRIVILEGES_REQUIRED_NONE";
    CvssPrivilegesRequiredEnum["PrivilegesRequiredLow"] = "PRIVILEGES_REQUIRED_LOW";
    CvssPrivilegesRequiredEnum["PrivilegesRequiredHigh"] = "PRIVILEGES_REQUIRED_HIGH";
})(CvssPrivilegesRequiredEnum = exports.CvssPrivilegesRequiredEnum || (exports.CvssPrivilegesRequiredEnum = {}));
var CvssScopeEnum;
(function (CvssScopeEnum) {
    CvssScopeEnum["ScopeUnspecified"] = "SCOPE_UNSPECIFIED";
    CvssScopeEnum["ScopeUnchanged"] = "SCOPE_UNCHANGED";
    CvssScopeEnum["ScopeChanged"] = "SCOPE_CHANGED";
})(CvssScopeEnum = exports.CvssScopeEnum || (exports.CvssScopeEnum = {}));
var CvssUserInteractionEnum;
(function (CvssUserInteractionEnum) {
    CvssUserInteractionEnum["UserInteractionUnspecified"] = "USER_INTERACTION_UNSPECIFIED";
    CvssUserInteractionEnum["UserInteractionNone"] = "USER_INTERACTION_NONE";
    CvssUserInteractionEnum["UserInteractionRequired"] = "USER_INTERACTION_REQUIRED";
})(CvssUserInteractionEnum = exports.CvssUserInteractionEnum || (exports.CvssUserInteractionEnum = {}));
// Cvss
/**
 * Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version.
**/
var Cvss = /** @class */ (function (_super) {
    __extends(Cvss, _super);
    function Cvss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attackComplexity" }),
        __metadata("design:type", String)
    ], Cvss.prototype, "attackComplexity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attackVector" }),
        __metadata("design:type", String)
    ], Cvss.prototype, "attackVector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication" }),
        __metadata("design:type", String)
    ], Cvss.prototype, "authentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availabilityImpact" }),
        __metadata("design:type", String)
    ], Cvss.prototype, "availabilityImpact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baseScore" }),
        __metadata("design:type", Number)
    ], Cvss.prototype, "baseScore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confidentialityImpact" }),
        __metadata("design:type", String)
    ], Cvss.prototype, "confidentialityImpact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exploitabilityScore" }),
        __metadata("design:type", Number)
    ], Cvss.prototype, "exploitabilityScore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=impactScore" }),
        __metadata("design:type", Number)
    ], Cvss.prototype, "impactScore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrityImpact" }),
        __metadata("design:type", String)
    ], Cvss.prototype, "integrityImpact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privilegesRequired" }),
        __metadata("design:type", String)
    ], Cvss.prototype, "privilegesRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], Cvss.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userInteraction" }),
        __metadata("design:type", String)
    ], Cvss.prototype, "userInteraction", void 0);
    return Cvss;
}(utils_1.SpeakeasyBase));
exports.Cvss = Cvss;
