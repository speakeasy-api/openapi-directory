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
exports.DomainVerificationDetail = exports.DomainVerificationDetailUsageEnum = exports.DomainVerificationDetailTypeEnum = exports.DomainVerificationDetailStatusEnum = exports.DomainVerificationDetailCertificateAuthorityAuthorization = exports.DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum = exports.DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum;
(function (DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum) {
    DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum["AddCaToCaa"] = "ADD_CA_TO_CAA";
    DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum["CreateTargetDomainCaa"] = "CREATE_TARGET_DOMAIN_CAA";
    DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum["DisableDnssec"] = "DISABLE_DNSSEC";
    DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum["FixCriticalTag"] = "FIX_CRITICAL_TAG";
    DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum["ValidateSoa"] = "VALIDATE_SOA";
})(DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum = exports.DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum || (exports.DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum = {}));
var DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum;
(function (DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum) {
    DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum["Pending"] = "PENDING";
    DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum["RemovedDnsError"] = "REMOVED_DNS_ERROR";
    DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum["RemovedDnssecEnabled"] = "REMOVED_DNSSEC_ENABLED";
    DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum["RemovedNotFoundCa"] = "REMOVED_NOT_FOUND_CA";
    DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum["RemovedUnknownCriticalTag"] = "REMOVED_UNKNOWN_CRITICAL_TAG";
    DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum["SuccessCaa"] = "SUCCESS_CAA";
    DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum["SuccessDnssec"] = "SUCCESS_DNSSEC";
})(DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum = exports.DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum || (exports.DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum = {}));
// DomainVerificationDetailCertificateAuthorityAuthorization
/**
 * Contains information about the last Certificate Authority Authorization (CAA) Lookup details for the specified domain.
 *
 * In order for a domain to be eligible to be included in the certificate, the entire domain hierarchy must be scanned for DNS CAA records, as outlined by RFC 6844.
 *
 * The absence of any CAA records found in the domain hierarchy indicates that the domain may be included in the certificate. Alternatively, if CAA records are found when scanning the domain hierarchy, the domain may be included in the certificate as long as `godaddy.com` or `starfieldtech.com` is found in the DNS record value. However, if CAA records are found, yet `godaddy.com` or `starfieldtech.com` is not found in any CAA record's value, then we must drop the domain from the certificate request.
 *
 * In the case where there are repeated DNS errors when scanning the domain hierarchy for CAA records, thus ending in an unsuccessful scan, then the domain can still be included in the certificate provided the primary domain is not setup with DNSSEC. Conversely, if DNSSEC is found to be setup on the primary domain when scanning following repeated CAA failures, the domain must be dropped from the certificate request. Finally, if DNS errors persist to the point where a successful DNSSEC query could not be obtained, then the domain must be dropped from the certificate request.
 *
**/
var DomainVerificationDetailCertificateAuthorityAuthorization = /** @class */ (function (_super) {
    __extends(DomainVerificationDetailCertificateAuthorityAuthorization, _super);
    function DomainVerificationDetailCertificateAuthorityAuthorization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completedAt" }),
        __metadata("design:type", String)
    ], DomainVerificationDetailCertificateAuthorityAuthorization.prototype, "completedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queryPaths" }),
        __metadata("design:type", Array)
    ], DomainVerificationDetailCertificateAuthorityAuthorization.prototype, "queryPaths", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommendations" }),
        __metadata("design:type", Array)
    ], DomainVerificationDetailCertificateAuthorityAuthorization.prototype, "recommendations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DomainVerificationDetailCertificateAuthorityAuthorization.prototype, "status", void 0);
    return DomainVerificationDetailCertificateAuthorityAuthorization;
}(utils_1.SpeakeasyBase));
exports.DomainVerificationDetailCertificateAuthorityAuthorization = DomainVerificationDetailCertificateAuthorityAuthorization;
var DomainVerificationDetailStatusEnum;
(function (DomainVerificationDetailStatusEnum) {
    DomainVerificationDetailStatusEnum["Completed"] = "COMPLETED";
    DomainVerificationDetailStatusEnum["FailedVerification"] = "FAILED_VERIFICATION";
    DomainVerificationDetailStatusEnum["VerifiedPossibleFraud"] = "VERIFIED_POSSIBLE_FRAUD";
    DomainVerificationDetailStatusEnum["Dropped"] = "DROPPED";
    DomainVerificationDetailStatusEnum["DroppedCertificateAuthorityAuthorization"] = "DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION";
    DomainVerificationDetailStatusEnum["DroppedGoogleSafeBrowsing"] = "DROPPED_GOOGLE_SAFE_BROWSING";
    DomainVerificationDetailStatusEnum["Invalid"] = "INVALID";
    DomainVerificationDetailStatusEnum["Awaiting"] = "AWAITING";
    DomainVerificationDetailStatusEnum["PendingPossibleFraud"] = "PENDING_POSSIBLE_FRAUD";
    DomainVerificationDetailStatusEnum["RevokedCertificate"] = "REVOKED_CERTIFICATE";
})(DomainVerificationDetailStatusEnum = exports.DomainVerificationDetailStatusEnum || (exports.DomainVerificationDetailStatusEnum = {}));
var DomainVerificationDetailTypeEnum;
(function (DomainVerificationDetailTypeEnum) {
    DomainVerificationDetailTypeEnum["DomainControlEmail"] = "DOMAIN_CONTROL_EMAIL";
    DomainVerificationDetailTypeEnum["AutoGeneratedDomainAccessEmailAdmin"] = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN";
    DomainVerificationDetailTypeEnum["AutoGeneratedDomainAccessEmailAdminstrator"] = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR";
    DomainVerificationDetailTypeEnum["AutoGeneratedDomainAccessEmailHostMaster"] = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER";
    DomainVerificationDetailTypeEnum["AutoGeneratedDomainAccessEmailPostMaster"] = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER";
    DomainVerificationDetailTypeEnum["AutoGeneratedDomainAccessEmailWebMaster"] = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER";
    DomainVerificationDetailTypeEnum["DomainAccessEmail"] = "DOMAIN_ACCESS_EMAIL";
    DomainVerificationDetailTypeEnum["DomainAccessLetter"] = "DOMAIN_ACCESS_LETTER";
    DomainVerificationDetailTypeEnum["DomainZoneControl"] = "DOMAIN_ZONE_CONTROL";
    DomainVerificationDetailTypeEnum["ManualDomainAccessEmail"] = "MANUAL_DOMAIN_ACCESS_EMAIL";
    DomainVerificationDetailTypeEnum["PreviousDomainAccessEmail"] = "PREVIOUS_DOMAIN_ACCESS_EMAIL";
    DomainVerificationDetailTypeEnum["RegistrationAuthorityDomainAccessLetter"] = "REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER";
    DomainVerificationDetailTypeEnum["RegistrationAuthorityDomainZoneControl"] = "REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL";
    DomainVerificationDetailTypeEnum["RegistrationAuthorityOverride"] = "REGISTRATION_AUTHORITY_OVERRIDE";
    DomainVerificationDetailTypeEnum["RegistrationAuthorityWebsiteControl"] = "REGISTRATION_AUTHORITY_WEBSITE_CONTROL";
    DomainVerificationDetailTypeEnum["CustomerOwned"] = "CUSTOMER_OWNED";
    DomainVerificationDetailTypeEnum["WebsiteControl"] = "WEBSITE_CONTROL";
})(DomainVerificationDetailTypeEnum = exports.DomainVerificationDetailTypeEnum || (exports.DomainVerificationDetailTypeEnum = {}));
var DomainVerificationDetailUsageEnum;
(function (DomainVerificationDetailUsageEnum) {
    DomainVerificationDetailUsageEnum["CommonName"] = "COMMON_NAME";
    DomainVerificationDetailUsageEnum["SubjectAlternativeName"] = "SUBJECT_ALTERNATIVE_NAME";
})(DomainVerificationDetailUsageEnum = exports.DomainVerificationDetailUsageEnum || (exports.DomainVerificationDetailUsageEnum = {}));
var DomainVerificationDetail = /** @class */ (function (_super) {
    __extends(DomainVerificationDetail, _super);
    function DomainVerificationDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateAuthorityAuthorization" }),
        __metadata("design:type", DomainVerificationDetailCertificateAuthorityAuthorization)
    ], DomainVerificationDetail.prototype, "certificateAuthorityAuthorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], DomainVerificationDetail.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dceToken" }),
        __metadata("design:type", String)
    ], DomainVerificationDetail.prototype, "dceToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], DomainVerificationDetail.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domainEntityId" }),
        __metadata("design:type", Number)
    ], DomainVerificationDetail.prototype, "domainEntityId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modifiedAt" }),
        __metadata("design:type", String)
    ], DomainVerificationDetail.prototype, "modifiedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DomainVerificationDetail.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DomainVerificationDetail.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage" }),
        __metadata("design:type", String)
    ], DomainVerificationDetail.prototype, "usage", void 0);
    return DomainVerificationDetail;
}(utils_1.SpeakeasyBase));
exports.DomainVerificationDetail = DomainVerificationDetail;
