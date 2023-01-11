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
exports.CertificateAuthorityInput = exports.CertificateAuthority = exports.CertificateAuthorityTypeEnum = exports.CertificateAuthorityTierEnum = exports.CertificateAuthorityStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var accessurls_1 = require("./accessurls");
var certificatedescription_1 = require("./certificatedescription");
var certificateconfig_1 = require("./certificateconfig");
var keyversionspec_1 = require("./keyversionspec");
var subordinateconfig_1 = require("./subordinateconfig");
var CertificateAuthorityStateEnum;
(function (CertificateAuthorityStateEnum) {
    CertificateAuthorityStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    CertificateAuthorityStateEnum["Enabled"] = "ENABLED";
    CertificateAuthorityStateEnum["Disabled"] = "DISABLED";
    CertificateAuthorityStateEnum["Staged"] = "STAGED";
    CertificateAuthorityStateEnum["AwaitingUserActivation"] = "AWAITING_USER_ACTIVATION";
    CertificateAuthorityStateEnum["Deleted"] = "DELETED";
})(CertificateAuthorityStateEnum = exports.CertificateAuthorityStateEnum || (exports.CertificateAuthorityStateEnum = {}));
var CertificateAuthorityTierEnum;
(function (CertificateAuthorityTierEnum) {
    CertificateAuthorityTierEnum["TierUnspecified"] = "TIER_UNSPECIFIED";
    CertificateAuthorityTierEnum["Enterprise"] = "ENTERPRISE";
    CertificateAuthorityTierEnum["Devops"] = "DEVOPS";
})(CertificateAuthorityTierEnum = exports.CertificateAuthorityTierEnum || (exports.CertificateAuthorityTierEnum = {}));
var CertificateAuthorityTypeEnum;
(function (CertificateAuthorityTypeEnum) {
    CertificateAuthorityTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    CertificateAuthorityTypeEnum["SelfSigned"] = "SELF_SIGNED";
    CertificateAuthorityTypeEnum["Subordinate"] = "SUBORDINATE";
})(CertificateAuthorityTypeEnum = exports.CertificateAuthorityTypeEnum || (exports.CertificateAuthorityTypeEnum = {}));
// CertificateAuthority
/**
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
**/
var CertificateAuthority = /** @class */ (function (_super) {
    __extends(CertificateAuthority, _super);
    function CertificateAuthority() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessUrls" }),
        __metadata("design:type", accessurls_1.AccessUrls)
    ], CertificateAuthority.prototype, "accessUrls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caCertificateDescriptions", elemType: certificatedescription_1.CertificateDescription }),
        __metadata("design:type", Array)
    ], CertificateAuthority.prototype, "caCertificateDescriptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=config" }),
        __metadata("design:type", certificateconfig_1.CertificateConfig)
    ], CertificateAuthority.prototype, "config", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "deleteTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "expireTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gcsBucket" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "gcsBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keySpec" }),
        __metadata("design:type", keyversionspec_1.KeyVersionSpec)
    ], CertificateAuthority.prototype, "keySpec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], CertificateAuthority.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifetime" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "lifetime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pemCaCertificates" }),
        __metadata("design:type", Array)
    ], CertificateAuthority.prototype, "pemCaCertificates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subordinateConfig" }),
        __metadata("design:type", subordinateconfig_1.SubordinateConfig)
    ], CertificateAuthority.prototype, "subordinateConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "tier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "updateTime", void 0);
    return CertificateAuthority;
}(utils_1.SpeakeasyBase));
exports.CertificateAuthority = CertificateAuthority;
// CertificateAuthorityInput
/**
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
**/
var CertificateAuthorityInput = /** @class */ (function (_super) {
    __extends(CertificateAuthorityInput, _super);
    function CertificateAuthorityInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessUrls" }),
        __metadata("design:type", accessurls_1.AccessUrls)
    ], CertificateAuthorityInput.prototype, "accessUrls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=config" }),
        __metadata("design:type", certificateconfig_1.CertificateConfig)
    ], CertificateAuthorityInput.prototype, "config", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gcsBucket" }),
        __metadata("design:type", String)
    ], CertificateAuthorityInput.prototype, "gcsBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keySpec" }),
        __metadata("design:type", keyversionspec_1.KeyVersionSpec)
    ], CertificateAuthorityInput.prototype, "keySpec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], CertificateAuthorityInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifetime" }),
        __metadata("design:type", String)
    ], CertificateAuthorityInput.prototype, "lifetime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subordinateConfig" }),
        __metadata("design:type", subordinateconfig_1.SubordinateConfig)
    ], CertificateAuthorityInput.prototype, "subordinateConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CertificateAuthorityInput.prototype, "type", void 0);
    return CertificateAuthorityInput;
}(utils_1.SpeakeasyBase));
exports.CertificateAuthorityInput = CertificateAuthorityInput;
