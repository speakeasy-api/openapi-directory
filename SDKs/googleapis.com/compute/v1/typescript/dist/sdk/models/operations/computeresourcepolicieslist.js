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
exports.ComputeResourcePoliciesListResponse = exports.ComputeResourcePoliciesListRequest = exports.ComputeResourcePoliciesListSecurity = exports.ComputeResourcePoliciesListSecurityOption3 = exports.ComputeResourcePoliciesListSecurityOption2 = exports.ComputeResourcePoliciesListSecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ComputeResourcePoliciesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ComputeResourcePoliciesListSecurityOption1, _super);
    function ComputeResourcePoliciesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListSecurityOption1.prototype, "oauth2c", void 0);
    return ComputeResourcePoliciesListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ComputeResourcePoliciesListSecurityOption1 = ComputeResourcePoliciesListSecurityOption1;
var ComputeResourcePoliciesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ComputeResourcePoliciesListSecurityOption2, _super);
    function ComputeResourcePoliciesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListSecurityOption2.prototype, "oauth2c", void 0);
    return ComputeResourcePoliciesListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ComputeResourcePoliciesListSecurityOption2 = ComputeResourcePoliciesListSecurityOption2;
var ComputeResourcePoliciesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ComputeResourcePoliciesListSecurityOption3, _super);
    function ComputeResourcePoliciesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListSecurityOption3.prototype, "oauth2c", void 0);
    return ComputeResourcePoliciesListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ComputeResourcePoliciesListSecurityOption3 = ComputeResourcePoliciesListSecurityOption3;
var ComputeResourcePoliciesListSecurity = /** @class */ (function (_super) {
    __extends(ComputeResourcePoliciesListSecurity, _super);
    function ComputeResourcePoliciesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeResourcePoliciesListSecurityOption1)
    ], ComputeResourcePoliciesListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeResourcePoliciesListSecurityOption2)
    ], ComputeResourcePoliciesListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeResourcePoliciesListSecurityOption3)
    ], ComputeResourcePoliciesListSecurity.prototype, "option3", void 0);
    return ComputeResourcePoliciesListSecurity;
}(utils_1.SpeakeasyBase));
exports.ComputeResourcePoliciesListSecurity = ComputeResourcePoliciesListSecurity;
var ComputeResourcePoliciesListRequest = /** @class */ (function (_super) {
    __extends(ComputeResourcePoliciesListRequest, _super);
    function ComputeResourcePoliciesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=filter",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=maxResults",
        }),
        __metadata("design:type", Number)
    ], ComputeResourcePoliciesListRequest.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=orderBy",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "orderBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=pageToken",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], ComputeResourcePoliciesListRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=project",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=region",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=returnPartialSuccess",
        }),
        __metadata("design:type", Boolean)
    ], ComputeResourcePoliciesListRequest.prototype, "returnPartialSuccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=userIp",
        }),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListRequest.prototype, "userIp", void 0);
    return ComputeResourcePoliciesListRequest;
}(utils_1.SpeakeasyBase));
exports.ComputeResourcePoliciesListRequest = ComputeResourcePoliciesListRequest;
var ComputeResourcePoliciesListResponse = /** @class */ (function (_super) {
    __extends(ComputeResourcePoliciesListResponse, _super);
    function ComputeResourcePoliciesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ComputeResourcePoliciesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ResourcePolicyList)
    ], ComputeResourcePoliciesListResponse.prototype, "resourcePolicyList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ComputeResourcePoliciesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeResourcePoliciesListResponse.prototype, "rawResponse", void 0);
    return ComputeResourcePoliciesListResponse;
}(utils_1.SpeakeasyBase));
exports.ComputeResourcePoliciesListResponse = ComputeResourcePoliciesListResponse;
