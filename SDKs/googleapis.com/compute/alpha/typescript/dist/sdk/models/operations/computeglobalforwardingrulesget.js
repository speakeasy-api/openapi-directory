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
exports.ComputeGlobalForwardingRulesGetResponse = exports.ComputeGlobalForwardingRulesGetRequest = exports.ComputeGlobalForwardingRulesGetSecurity = exports.ComputeGlobalForwardingRulesGetSecurityOption3 = exports.ComputeGlobalForwardingRulesGetSecurityOption2 = exports.ComputeGlobalForwardingRulesGetSecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ComputeGlobalForwardingRulesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ComputeGlobalForwardingRulesGetSecurityOption1, _super);
    function ComputeGlobalForwardingRulesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetSecurityOption1.prototype, "oauth2c", void 0);
    return ComputeGlobalForwardingRulesGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ComputeGlobalForwardingRulesGetSecurityOption1 = ComputeGlobalForwardingRulesGetSecurityOption1;
var ComputeGlobalForwardingRulesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ComputeGlobalForwardingRulesGetSecurityOption2, _super);
    function ComputeGlobalForwardingRulesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetSecurityOption2.prototype, "oauth2c", void 0);
    return ComputeGlobalForwardingRulesGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ComputeGlobalForwardingRulesGetSecurityOption2 = ComputeGlobalForwardingRulesGetSecurityOption2;
var ComputeGlobalForwardingRulesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ComputeGlobalForwardingRulesGetSecurityOption3, _super);
    function ComputeGlobalForwardingRulesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetSecurityOption3.prototype, "oauth2c", void 0);
    return ComputeGlobalForwardingRulesGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ComputeGlobalForwardingRulesGetSecurityOption3 = ComputeGlobalForwardingRulesGetSecurityOption3;
var ComputeGlobalForwardingRulesGetSecurity = /** @class */ (function (_super) {
    __extends(ComputeGlobalForwardingRulesGetSecurity, _super);
    function ComputeGlobalForwardingRulesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeGlobalForwardingRulesGetSecurityOption1)
    ], ComputeGlobalForwardingRulesGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeGlobalForwardingRulesGetSecurityOption2)
    ], ComputeGlobalForwardingRulesGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeGlobalForwardingRulesGetSecurityOption3)
    ], ComputeGlobalForwardingRulesGetSecurity.prototype, "option3", void 0);
    return ComputeGlobalForwardingRulesGetSecurity;
}(utils_1.SpeakeasyBase));
exports.ComputeGlobalForwardingRulesGetSecurity = ComputeGlobalForwardingRulesGetSecurity;
var ComputeGlobalForwardingRulesGetRequest = /** @class */ (function (_super) {
    __extends(ComputeGlobalForwardingRulesGetRequest, _super);
    function ComputeGlobalForwardingRulesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=forwardingRule",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "forwardingRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=project",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=userIp",
        }),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetRequest.prototype, "userIp", void 0);
    return ComputeGlobalForwardingRulesGetRequest;
}(utils_1.SpeakeasyBase));
exports.ComputeGlobalForwardingRulesGetRequest = ComputeGlobalForwardingRulesGetRequest;
var ComputeGlobalForwardingRulesGetResponse = /** @class */ (function (_super) {
    __extends(ComputeGlobalForwardingRulesGetResponse, _super);
    function ComputeGlobalForwardingRulesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ComputeGlobalForwardingRulesGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ForwardingRule)
    ], ComputeGlobalForwardingRulesGetResponse.prototype, "forwardingRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ComputeGlobalForwardingRulesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeGlobalForwardingRulesGetResponse.prototype, "rawResponse", void 0);
    return ComputeGlobalForwardingRulesGetResponse;
}(utils_1.SpeakeasyBase));
exports.ComputeGlobalForwardingRulesGetResponse = ComputeGlobalForwardingRulesGetResponse;
