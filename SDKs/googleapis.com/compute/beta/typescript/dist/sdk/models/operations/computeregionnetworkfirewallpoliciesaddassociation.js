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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputeRegionNetworkFirewallPoliciesAddAssociationResponse = exports.ComputeRegionNetworkFirewallPoliciesAddAssociationRequest = exports.ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity = exports.ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2 = exports.ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1 = /** @class */ (function (_super) {
    __extends(ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1, _super);
    function ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1.prototype, "oauth2c", void 0);
    return ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1 = ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1;
var ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2 = /** @class */ (function (_super) {
    __extends(ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2, _super);
    function ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2.prototype, "oauth2c", void 0);
    return ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2 = ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2;
var ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity = /** @class */ (function (_super) {
    __extends(ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity, _super);
    function ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity.prototype, "option2", void 0);
    return ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity;
}(utils_1.SpeakeasyBase));
exports.ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity = ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity;
var ComputeRegionNetworkFirewallPoliciesAddAssociationRequest = /** @class */ (function (_super) {
    __extends(ComputeRegionNetworkFirewallPoliciesAddAssociationRequest, _super);
    function ComputeRegionNetworkFirewallPoliciesAddAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FirewallPolicyAssociation)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "firewallPolicyAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=firewallPolicy",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "firewallPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=project",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=region",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=replaceExistingAssociation",
        }),
        __metadata("design:type", Boolean)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "replaceExistingAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=requestId",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=userIp",
        }),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationRequest.prototype, "userIp", void 0);
    return ComputeRegionNetworkFirewallPoliciesAddAssociationRequest;
}(utils_1.SpeakeasyBase));
exports.ComputeRegionNetworkFirewallPoliciesAddAssociationRequest = ComputeRegionNetworkFirewallPoliciesAddAssociationRequest;
var ComputeRegionNetworkFirewallPoliciesAddAssociationResponse = /** @class */ (function (_super) {
    __extends(ComputeRegionNetworkFirewallPoliciesAddAssociationResponse, _super);
    function ComputeRegionNetworkFirewallPoliciesAddAssociationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeRegionNetworkFirewallPoliciesAddAssociationResponse.prototype, "rawResponse", void 0);
    return ComputeRegionNetworkFirewallPoliciesAddAssociationResponse;
}(utils_1.SpeakeasyBase));
exports.ComputeRegionNetworkFirewallPoliciesAddAssociationResponse = ComputeRegionNetworkFirewallPoliciesAddAssociationResponse;
