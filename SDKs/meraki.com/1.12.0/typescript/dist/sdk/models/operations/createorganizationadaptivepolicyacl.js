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
exports.CreateOrganizationAdaptivePolicyAclResponse = exports.CreateOrganizationAdaptivePolicyAclRequest = exports.CreateOrganizationAdaptivePolicyAclRequestBody = exports.CreateOrganizationAdaptivePolicyAclRequestBodyRules = exports.CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum = exports.CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum = exports.CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum = exports.CreateOrganizationAdaptivePolicyAclPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateOrganizationAdaptivePolicyAclPathParams = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdaptivePolicyAclPathParams, _super);
    function CreateOrganizationAdaptivePolicyAclPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclPathParams.prototype, "organizationId", void 0);
    return CreateOrganizationAdaptivePolicyAclPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationAdaptivePolicyAclPathParams = CreateOrganizationAdaptivePolicyAclPathParams;
var CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
(function (CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum) {
    CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum["Any"] = "any";
    CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum["Ipv4"] = "ipv4";
    CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum["Ipv6"] = "ipv6";
})(CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum = exports.CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum || (exports.CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum = {}));
var CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
(function (CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum) {
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum["Allow"] = "allow";
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum["Deny"] = "deny";
})(CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum = exports.CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum || (exports.CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum = {}));
var CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;
(function (CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum) {
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Tcp"] = "tcp";
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Udp"] = "udp";
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Icmp"] = "icmp";
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Any"] = "any";
})(CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum = exports.CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum || (exports.CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum = {}));
var CreateOrganizationAdaptivePolicyAclRequestBodyRules = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdaptivePolicyAclRequestBodyRules, _super);
    function CreateOrganizationAdaptivePolicyAclRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dstPort" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "dstPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=srcPort" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "srcPort", void 0);
    return CreateOrganizationAdaptivePolicyAclRequestBodyRules;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationAdaptivePolicyAclRequestBodyRules = CreateOrganizationAdaptivePolicyAclRequestBodyRules;
var CreateOrganizationAdaptivePolicyAclRequestBody = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdaptivePolicyAclRequestBody, _super);
    function CreateOrganizationAdaptivePolicyAclRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipVersion" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBody.prototype, "ipVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: CreateOrganizationAdaptivePolicyAclRequestBodyRules }),
        __metadata("design:type", Array)
    ], CreateOrganizationAdaptivePolicyAclRequestBody.prototype, "rules", void 0);
    return CreateOrganizationAdaptivePolicyAclRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationAdaptivePolicyAclRequestBody = CreateOrganizationAdaptivePolicyAclRequestBody;
var CreateOrganizationAdaptivePolicyAclRequest = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdaptivePolicyAclRequest, _super);
    function CreateOrganizationAdaptivePolicyAclRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateOrganizationAdaptivePolicyAclPathParams)
    ], CreateOrganizationAdaptivePolicyAclRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOrganizationAdaptivePolicyAclRequestBody)
    ], CreateOrganizationAdaptivePolicyAclRequest.prototype, "request", void 0);
    return CreateOrganizationAdaptivePolicyAclRequest;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationAdaptivePolicyAclRequest = CreateOrganizationAdaptivePolicyAclRequest;
var CreateOrganizationAdaptivePolicyAclResponse = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdaptivePolicyAclResponse, _super);
    function CreateOrganizationAdaptivePolicyAclResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateOrganizationAdaptivePolicyAclResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateOrganizationAdaptivePolicyAclResponse.prototype, "createOrganizationAdaptivePolicyAcl200ApplicationJSONObject", void 0);
    return CreateOrganizationAdaptivePolicyAclResponse;
}(utils_1.SpeakeasyBase));
exports.CreateOrganizationAdaptivePolicyAclResponse = CreateOrganizationAdaptivePolicyAclResponse;
