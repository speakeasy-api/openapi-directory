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
exports.ComputeInstanceTemplatesGetIamPolicyResponse = exports.ComputeInstanceTemplatesGetIamPolicyRequest = exports.ComputeInstanceTemplatesGetIamPolicySecurity = exports.ComputeInstanceTemplatesGetIamPolicySecurityOption3 = exports.ComputeInstanceTemplatesGetIamPolicySecurityOption2 = exports.ComputeInstanceTemplatesGetIamPolicySecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ComputeInstanceTemplatesGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(ComputeInstanceTemplatesGetIamPolicySecurityOption1, _super);
    function ComputeInstanceTemplatesGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return ComputeInstanceTemplatesGetIamPolicySecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ComputeInstanceTemplatesGetIamPolicySecurityOption1 = ComputeInstanceTemplatesGetIamPolicySecurityOption1;
var ComputeInstanceTemplatesGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(ComputeInstanceTemplatesGetIamPolicySecurityOption2, _super);
    function ComputeInstanceTemplatesGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return ComputeInstanceTemplatesGetIamPolicySecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ComputeInstanceTemplatesGetIamPolicySecurityOption2 = ComputeInstanceTemplatesGetIamPolicySecurityOption2;
var ComputeInstanceTemplatesGetIamPolicySecurityOption3 = /** @class */ (function (_super) {
    __extends(ComputeInstanceTemplatesGetIamPolicySecurityOption3, _super);
    function ComputeInstanceTemplatesGetIamPolicySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicySecurityOption3.prototype, "oauth2c", void 0);
    return ComputeInstanceTemplatesGetIamPolicySecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ComputeInstanceTemplatesGetIamPolicySecurityOption3 = ComputeInstanceTemplatesGetIamPolicySecurityOption3;
var ComputeInstanceTemplatesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(ComputeInstanceTemplatesGetIamPolicySecurity, _super);
    function ComputeInstanceTemplatesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeInstanceTemplatesGetIamPolicySecurityOption1)
    ], ComputeInstanceTemplatesGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeInstanceTemplatesGetIamPolicySecurityOption2)
    ], ComputeInstanceTemplatesGetIamPolicySecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeInstanceTemplatesGetIamPolicySecurityOption3)
    ], ComputeInstanceTemplatesGetIamPolicySecurity.prototype, "option3", void 0);
    return ComputeInstanceTemplatesGetIamPolicySecurity;
}(utils_1.SpeakeasyBase));
exports.ComputeInstanceTemplatesGetIamPolicySecurity = ComputeInstanceTemplatesGetIamPolicySecurity;
var ComputeInstanceTemplatesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(ComputeInstanceTemplatesGetIamPolicyRequest, _super);
    function ComputeInstanceTemplatesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=optionsRequestedPolicyVersion",
        }),
        __metadata("design:type", Number)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=project",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=resource",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=userIp",
        }),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyRequest.prototype, "userIp", void 0);
    return ComputeInstanceTemplatesGetIamPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.ComputeInstanceTemplatesGetIamPolicyRequest = ComputeInstanceTemplatesGetIamPolicyRequest;
var ComputeInstanceTemplatesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(ComputeInstanceTemplatesGetIamPolicyResponse, _super);
    function ComputeInstanceTemplatesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ComputeInstanceTemplatesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Policy)
    ], ComputeInstanceTemplatesGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ComputeInstanceTemplatesGetIamPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeInstanceTemplatesGetIamPolicyResponse.prototype, "rawResponse", void 0);
    return ComputeInstanceTemplatesGetIamPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.ComputeInstanceTemplatesGetIamPolicyResponse = ComputeInstanceTemplatesGetIamPolicyResponse;
