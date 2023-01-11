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
exports.UpdateOrganizationAdaptivePolicyAclResponse = exports.UpdateOrganizationAdaptivePolicyAclRequest = exports.UpdateOrganizationAdaptivePolicyAclRequestBody = exports.UpdateOrganizationAdaptivePolicyAclRequestBodyRules = exports.UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum = exports.UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum = exports.UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum = exports.UpdateOrganizationAdaptivePolicyAclPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateOrganizationAdaptivePolicyAclPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdaptivePolicyAclPathParams, _super);
    function UpdateOrganizationAdaptivePolicyAclPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicyAclPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicyAclPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationAdaptivePolicyAclPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateOrganizationAdaptivePolicyAclPathParams = UpdateOrganizationAdaptivePolicyAclPathParams;
var UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
(function (UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum) {
    UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum["Any"] = "any";
    UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum["Ipv4"] = "ipv4";
    UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum["Ipv6"] = "ipv6";
})(UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum = exports.UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum || (exports.UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum = {}));
var UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
(function (UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum) {
    UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum["Allow"] = "allow";
    UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum["Deny"] = "deny";
})(UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum = exports.UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum || (exports.UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum = {}));
var UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;
(function (UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum) {
    UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Tcp"] = "tcp";
    UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Udp"] = "udp";
    UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Icmp"] = "icmp";
    UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Any"] = "any";
})(UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum = exports.UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum || (exports.UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum = {}));
var UpdateOrganizationAdaptivePolicyAclRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdaptivePolicyAclRequestBodyRules, _super);
    function UpdateOrganizationAdaptivePolicyAclRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dstPort" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "dstPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=srcPort" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "srcPort", void 0);
    return UpdateOrganizationAdaptivePolicyAclRequestBodyRules;
}(utils_1.SpeakeasyBase));
exports.UpdateOrganizationAdaptivePolicyAclRequestBodyRules = UpdateOrganizationAdaptivePolicyAclRequestBodyRules;
var UpdateOrganizationAdaptivePolicyAclRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdaptivePolicyAclRequestBody, _super);
    function UpdateOrganizationAdaptivePolicyAclRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicyAclRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipVersion" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicyAclRequestBody.prototype, "ipVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicyAclRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: UpdateOrganizationAdaptivePolicyAclRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateOrganizationAdaptivePolicyAclRequestBody.prototype, "rules", void 0);
    return UpdateOrganizationAdaptivePolicyAclRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateOrganizationAdaptivePolicyAclRequestBody = UpdateOrganizationAdaptivePolicyAclRequestBody;
var UpdateOrganizationAdaptivePolicyAclRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdaptivePolicyAclRequest, _super);
    function UpdateOrganizationAdaptivePolicyAclRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateOrganizationAdaptivePolicyAclPathParams)
    ], UpdateOrganizationAdaptivePolicyAclRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationAdaptivePolicyAclRequestBody)
    ], UpdateOrganizationAdaptivePolicyAclRequest.prototype, "request", void 0);
    return UpdateOrganizationAdaptivePolicyAclRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateOrganizationAdaptivePolicyAclRequest = UpdateOrganizationAdaptivePolicyAclRequest;
var UpdateOrganizationAdaptivePolicyAclResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdaptivePolicyAclResponse, _super);
    function UpdateOrganizationAdaptivePolicyAclResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicyAclResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateOrganizationAdaptivePolicyAclResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateOrganizationAdaptivePolicyAclResponse.prototype, "updateOrganizationAdaptivePolicyAcl200ApplicationJSONObject", void 0);
    return UpdateOrganizationAdaptivePolicyAclResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateOrganizationAdaptivePolicyAclResponse = UpdateOrganizationAdaptivePolicyAclResponse;
