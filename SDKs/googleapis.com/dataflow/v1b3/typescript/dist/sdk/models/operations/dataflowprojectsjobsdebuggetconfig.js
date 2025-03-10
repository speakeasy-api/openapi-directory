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
exports.DataflowProjectsJobsDebugGetConfigResponse = exports.DataflowProjectsJobsDebugGetConfigRequest = exports.DataflowProjectsJobsDebugGetConfigSecurity = exports.DataflowProjectsJobsDebugGetConfigSecurityOption4 = exports.DataflowProjectsJobsDebugGetConfigSecurityOption3 = exports.DataflowProjectsJobsDebugGetConfigSecurityOption2 = exports.DataflowProjectsJobsDebugGetConfigSecurityOption1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DataflowProjectsJobsDebugGetConfigSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigSecurityOption1, _super);
    function DataflowProjectsJobsDebugGetConfigSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugGetConfigSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DataflowProjectsJobsDebugGetConfigSecurityOption1 = DataflowProjectsJobsDebugGetConfigSecurityOption1;
var DataflowProjectsJobsDebugGetConfigSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigSecurityOption2, _super);
    function DataflowProjectsJobsDebugGetConfigSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugGetConfigSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DataflowProjectsJobsDebugGetConfigSecurityOption2 = DataflowProjectsJobsDebugGetConfigSecurityOption2;
var DataflowProjectsJobsDebugGetConfigSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigSecurityOption3, _super);
    function DataflowProjectsJobsDebugGetConfigSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugGetConfigSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.DataflowProjectsJobsDebugGetConfigSecurityOption3 = DataflowProjectsJobsDebugGetConfigSecurityOption3;
var DataflowProjectsJobsDebugGetConfigSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigSecurityOption4, _super);
    function DataflowProjectsJobsDebugGetConfigSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugGetConfigSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.DataflowProjectsJobsDebugGetConfigSecurityOption4 = DataflowProjectsJobsDebugGetConfigSecurityOption4;
var DataflowProjectsJobsDebugGetConfigSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigSecurity, _super);
    function DataflowProjectsJobsDebugGetConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugGetConfigSecurityOption1)
    ], DataflowProjectsJobsDebugGetConfigSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugGetConfigSecurityOption2)
    ], DataflowProjectsJobsDebugGetConfigSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugGetConfigSecurityOption3)
    ], DataflowProjectsJobsDebugGetConfigSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugGetConfigSecurityOption4)
    ], DataflowProjectsJobsDebugGetConfigSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsDebugGetConfigSecurity;
}(utils_1.SpeakeasyBase));
exports.DataflowProjectsJobsDebugGetConfigSecurity = DataflowProjectsJobsDebugGetConfigSecurity;
var DataflowProjectsJobsDebugGetConfigRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigRequest, _super);
    function DataflowProjectsJobsDebugGetConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=$.xgafv",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetDebugConfigRequest)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "getDebugConfigRequest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=access_token",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fields",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=jobId",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "jobId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=oauth_token",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=prettyPrint",
        }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=projectId",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=quotaUser",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=uploadType",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=upload_protocol",
        }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "uploadProtocol", void 0);
    return DataflowProjectsJobsDebugGetConfigRequest;
}(utils_1.SpeakeasyBase));
exports.DataflowProjectsJobsDebugGetConfigRequest = DataflowProjectsJobsDebugGetConfigRequest;
var DataflowProjectsJobsDebugGetConfigResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigResponse, _super);
    function DataflowProjectsJobsDebugGetConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetDebugConfigResponse)
    ], DataflowProjectsJobsDebugGetConfigResponse.prototype, "getDebugConfigResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsDebugGetConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DataflowProjectsJobsDebugGetConfigResponse.prototype, "rawResponse", void 0);
    return DataflowProjectsJobsDebugGetConfigResponse;
}(utils_1.SpeakeasyBase));
exports.DataflowProjectsJobsDebugGetConfigResponse = DataflowProjectsJobsDebugGetConfigResponse;
