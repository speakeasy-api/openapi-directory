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
exports.ComputeRegionSecurityPoliciesListResponse = exports.ComputeRegionSecurityPoliciesListRequest = exports.ComputeRegionSecurityPoliciesListSecurity = exports.ComputeRegionSecurityPoliciesListSecurityOption3 = exports.ComputeRegionSecurityPoliciesListSecurityOption2 = exports.ComputeRegionSecurityPoliciesListSecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ComputeRegionSecurityPoliciesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ComputeRegionSecurityPoliciesListSecurityOption1, _super);
    function ComputeRegionSecurityPoliciesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListSecurityOption1.prototype, "oauth2c", void 0);
    return ComputeRegionSecurityPoliciesListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ComputeRegionSecurityPoliciesListSecurityOption1 = ComputeRegionSecurityPoliciesListSecurityOption1;
var ComputeRegionSecurityPoliciesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ComputeRegionSecurityPoliciesListSecurityOption2, _super);
    function ComputeRegionSecurityPoliciesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListSecurityOption2.prototype, "oauth2c", void 0);
    return ComputeRegionSecurityPoliciesListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ComputeRegionSecurityPoliciesListSecurityOption2 = ComputeRegionSecurityPoliciesListSecurityOption2;
var ComputeRegionSecurityPoliciesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ComputeRegionSecurityPoliciesListSecurityOption3, _super);
    function ComputeRegionSecurityPoliciesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListSecurityOption3.prototype, "oauth2c", void 0);
    return ComputeRegionSecurityPoliciesListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ComputeRegionSecurityPoliciesListSecurityOption3 = ComputeRegionSecurityPoliciesListSecurityOption3;
var ComputeRegionSecurityPoliciesListSecurity = /** @class */ (function (_super) {
    __extends(ComputeRegionSecurityPoliciesListSecurity, _super);
    function ComputeRegionSecurityPoliciesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeRegionSecurityPoliciesListSecurityOption1)
    ], ComputeRegionSecurityPoliciesListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeRegionSecurityPoliciesListSecurityOption2)
    ], ComputeRegionSecurityPoliciesListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeRegionSecurityPoliciesListSecurityOption3)
    ], ComputeRegionSecurityPoliciesListSecurity.prototype, "option3", void 0);
    return ComputeRegionSecurityPoliciesListSecurity;
}(utils_1.SpeakeasyBase));
exports.ComputeRegionSecurityPoliciesListSecurity = ComputeRegionSecurityPoliciesListSecurity;
var ComputeRegionSecurityPoliciesListRequest = /** @class */ (function (_super) {
    __extends(ComputeRegionSecurityPoliciesListRequest, _super);
    function ComputeRegionSecurityPoliciesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=filter",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=maxResults",
        }),
        __metadata("design:type", Number)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=orderBy",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "orderBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=pageToken",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=project",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=region",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=returnPartialSuccess",
        }),
        __metadata("design:type", Boolean)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "returnPartialSuccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=userIp",
        }),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListRequest.prototype, "userIp", void 0);
    return ComputeRegionSecurityPoliciesListRequest;
}(utils_1.SpeakeasyBase));
exports.ComputeRegionSecurityPoliciesListRequest = ComputeRegionSecurityPoliciesListRequest;
var ComputeRegionSecurityPoliciesListResponse = /** @class */ (function (_super) {
    __extends(ComputeRegionSecurityPoliciesListResponse, _super);
    function ComputeRegionSecurityPoliciesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ComputeRegionSecurityPoliciesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SecurityPolicyList)
    ], ComputeRegionSecurityPoliciesListResponse.prototype, "securityPolicyList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ComputeRegionSecurityPoliciesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeRegionSecurityPoliciesListResponse.prototype, "rawResponse", void 0);
    return ComputeRegionSecurityPoliciesListResponse;
}(utils_1.SpeakeasyBase));
exports.ComputeRegionSecurityPoliciesListResponse = ComputeRegionSecurityPoliciesListResponse;
