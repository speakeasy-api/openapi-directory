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
exports.ComputeNetworkFirewallPoliciesTestIamPermissionsResponse = exports.ComputeNetworkFirewallPoliciesTestIamPermissionsRequest = exports.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity = exports.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3 = exports.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2 = exports.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1, _super);
    function ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1 = ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1;
var ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2, _super);
    function ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2 = ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2;
var ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3 = /** @class */ (function (_super) {
    __extends(ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3, _super);
    function ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3.prototype, "oauth2c", void 0);
    return ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3 = ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3;
var ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity, _super);
    function ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity.prototype, "option3", void 0);
    return ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity;
}(utils_1.SpeakeasyBase));
exports.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity = ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity;
var ComputeNetworkFirewallPoliciesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(ComputeNetworkFirewallPoliciesTestIamPermissionsRequest, _super);
    function ComputeNetworkFirewallPoliciesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestPermissionsRequest)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "testPermissionsRequest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=project",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=resource",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=userIp",
        }),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsRequest.prototype, "userIp", void 0);
    return ComputeNetworkFirewallPoliciesTestIamPermissionsRequest;
}(utils_1.SpeakeasyBase));
exports.ComputeNetworkFirewallPoliciesTestIamPermissionsRequest = ComputeNetworkFirewallPoliciesTestIamPermissionsRequest;
var ComputeNetworkFirewallPoliciesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(ComputeNetworkFirewallPoliciesTestIamPermissionsResponse, _super);
    function ComputeNetworkFirewallPoliciesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TestPermissionsResponse)
    ], ComputeNetworkFirewallPoliciesTestIamPermissionsResponse.prototype, "testPermissionsResponse", void 0);
    return ComputeNetworkFirewallPoliciesTestIamPermissionsResponse;
}(utils_1.SpeakeasyBase));
exports.ComputeNetworkFirewallPoliciesTestIamPermissionsResponse = ComputeNetworkFirewallPoliciesTestIamPermissionsResponse;
