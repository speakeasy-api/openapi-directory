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
exports.MembershipFeatureSpecInput = exports.MembershipFeatureSpec = void 0;
var utils_1 = require("../../../internal/utils");
var anthosobservabilitymembershipspec_1 = require("./anthosobservabilitymembershipspec");
var cloudbuildmembershipspec_1 = require("./cloudbuildmembershipspec");
var configmanagementmembershipspec_1 = require("./configmanagementmembershipspec");
var identityservicemembershipspec_1 = require("./identityservicemembershipspec");
var servicemeshmembershipspec_1 = require("./servicemeshmembershipspec");
var policycontrollermembershipspec_1 = require("./policycontrollermembershipspec");
var membershipspec_1 = require("./membershipspec");
var identityservicemembershipspec_2 = require("./identityservicemembershipspec");
var MembershipFeatureSpec = /** @class */ (function (_super) {
    __extends(MembershipFeatureSpec, _super);
    function MembershipFeatureSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=anthosobservability" }),
        __metadata("design:type", anthosobservabilitymembershipspec_1.AnthosObservabilityMembershipSpec)
    ], MembershipFeatureSpec.prototype, "anthosobservability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudbuild" }),
        __metadata("design:type", cloudbuildmembershipspec_1.CloudBuildMembershipSpec)
    ], MembershipFeatureSpec.prototype, "cloudbuild", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configmanagement" }),
        __metadata("design:type", configmanagementmembershipspec_1.ConfigManagementMembershipSpec)
    ], MembershipFeatureSpec.prototype, "configmanagement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fleetInherited" }),
        __metadata("design:type", Boolean)
    ], MembershipFeatureSpec.prototype, "fleetInherited", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fleetobservability" }),
        __metadata("design:type", Object)
    ], MembershipFeatureSpec.prototype, "fleetobservability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identityservice" }),
        __metadata("design:type", identityservicemembershipspec_1.IdentityServiceMembershipSpec)
    ], MembershipFeatureSpec.prototype, "identityservice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mesh" }),
        __metadata("design:type", servicemeshmembershipspec_1.ServiceMeshMembershipSpec)
    ], MembershipFeatureSpec.prototype, "mesh", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policycontroller" }),
        __metadata("design:type", policycontrollermembershipspec_1.PolicyControllerMembershipSpec)
    ], MembershipFeatureSpec.prototype, "policycontroller", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workloadcertificate" }),
        __metadata("design:type", membershipspec_1.MembershipSpec)
    ], MembershipFeatureSpec.prototype, "workloadcertificate", void 0);
    return MembershipFeatureSpec;
}(utils_1.SpeakeasyBase));
exports.MembershipFeatureSpec = MembershipFeatureSpec;
var MembershipFeatureSpecInput = /** @class */ (function (_super) {
    __extends(MembershipFeatureSpecInput, _super);
    function MembershipFeatureSpecInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=anthosobservability" }),
        __metadata("design:type", anthosobservabilitymembershipspec_1.AnthosObservabilityMembershipSpec)
    ], MembershipFeatureSpecInput.prototype, "anthosobservability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudbuild" }),
        __metadata("design:type", cloudbuildmembershipspec_1.CloudBuildMembershipSpec)
    ], MembershipFeatureSpecInput.prototype, "cloudbuild", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configmanagement" }),
        __metadata("design:type", configmanagementmembershipspec_1.ConfigManagementMembershipSpec)
    ], MembershipFeatureSpecInput.prototype, "configmanagement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fleetInherited" }),
        __metadata("design:type", Boolean)
    ], MembershipFeatureSpecInput.prototype, "fleetInherited", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fleetobservability" }),
        __metadata("design:type", Object)
    ], MembershipFeatureSpecInput.prototype, "fleetobservability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identityservice" }),
        __metadata("design:type", identityservicemembershipspec_2.IdentityServiceMembershipSpecInput)
    ], MembershipFeatureSpecInput.prototype, "identityservice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mesh" }),
        __metadata("design:type", servicemeshmembershipspec_1.ServiceMeshMembershipSpec)
    ], MembershipFeatureSpecInput.prototype, "mesh", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policycontroller" }),
        __metadata("design:type", policycontrollermembershipspec_1.PolicyControllerMembershipSpec)
    ], MembershipFeatureSpecInput.prototype, "policycontroller", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workloadcertificate" }),
        __metadata("design:type", membershipspec_1.MembershipSpec)
    ], MembershipFeatureSpecInput.prototype, "workloadcertificate", void 0);
    return MembershipFeatureSpecInput;
}(utils_1.SpeakeasyBase));
exports.MembershipFeatureSpecInput = MembershipFeatureSpecInput;
