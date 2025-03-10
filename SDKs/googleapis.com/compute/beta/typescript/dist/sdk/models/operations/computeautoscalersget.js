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
exports.ComputeAutoscalersGetResponse = exports.ComputeAutoscalersGetRequest = exports.ComputeAutoscalersGetSecurity = exports.ComputeAutoscalersGetSecurityOption3 = exports.ComputeAutoscalersGetSecurityOption2 = exports.ComputeAutoscalersGetSecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ComputeAutoscalersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ComputeAutoscalersGetSecurityOption1, _super);
    function ComputeAutoscalersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetSecurityOption1.prototype, "oauth2c", void 0);
    return ComputeAutoscalersGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ComputeAutoscalersGetSecurityOption1 = ComputeAutoscalersGetSecurityOption1;
var ComputeAutoscalersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ComputeAutoscalersGetSecurityOption2, _super);
    function ComputeAutoscalersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetSecurityOption2.prototype, "oauth2c", void 0);
    return ComputeAutoscalersGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ComputeAutoscalersGetSecurityOption2 = ComputeAutoscalersGetSecurityOption2;
var ComputeAutoscalersGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ComputeAutoscalersGetSecurityOption3, _super);
    function ComputeAutoscalersGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetSecurityOption3.prototype, "oauth2c", void 0);
    return ComputeAutoscalersGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ComputeAutoscalersGetSecurityOption3 = ComputeAutoscalersGetSecurityOption3;
var ComputeAutoscalersGetSecurity = /** @class */ (function (_super) {
    __extends(ComputeAutoscalersGetSecurity, _super);
    function ComputeAutoscalersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeAutoscalersGetSecurityOption1)
    ], ComputeAutoscalersGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeAutoscalersGetSecurityOption2)
    ], ComputeAutoscalersGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ComputeAutoscalersGetSecurityOption3)
    ], ComputeAutoscalersGetSecurity.prototype, "option3", void 0);
    return ComputeAutoscalersGetSecurity;
}(utils_1.SpeakeasyBase));
exports.ComputeAutoscalersGetSecurity = ComputeAutoscalersGetSecurity;
var ComputeAutoscalersGetRequest = /** @class */ (function (_super) {
    __extends(ComputeAutoscalersGetRequest, _super);
    function ComputeAutoscalersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=autoscaler",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "autoscaler", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], ComputeAutoscalersGetRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=project",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "uploadProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=userIp",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=zone",
        }),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetRequest.prototype, "zone", void 0);
    return ComputeAutoscalersGetRequest;
}(utils_1.SpeakeasyBase));
exports.ComputeAutoscalersGetRequest = ComputeAutoscalersGetRequest;
var ComputeAutoscalersGetResponse = /** @class */ (function (_super) {
    __extends(ComputeAutoscalersGetResponse, _super);
    function ComputeAutoscalersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Autoscaler)
    ], ComputeAutoscalersGetResponse.prototype, "autoscaler", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ComputeAutoscalersGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ComputeAutoscalersGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeAutoscalersGetResponse.prototype, "rawResponse", void 0);
    return ComputeAutoscalersGetResponse;
}(utils_1.SpeakeasyBase));
exports.ComputeAutoscalersGetResponse = ComputeAutoscalersGetResponse;
