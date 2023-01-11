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
exports.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse = exports.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest = exports.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity = exports.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams = exports.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams, _super);
    function DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=migrationJob" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams.prototype, "migrationJob", void 0);
    return DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams;
}(utils_1.SpeakeasyBase));
exports.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams = DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams;
var DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams, _super);
    function DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams.prototype, "uploadProtocol", void 0);
    return DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams;
}(utils_1.SpeakeasyBase));
exports.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams = DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams;
var DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity, _super);
    function DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity.prototype, "oauth2c", void 0);
    return DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity;
}(utils_1.SpeakeasyBase));
exports.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity = DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity;
var DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest, _super);
    function DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GenerateSshScriptRequest)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest.prototype, "security", void 0);
    return DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest;
}(utils_1.SpeakeasyBase));
exports.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest = DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest;
var DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse, _super);
    function DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SshScript)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse.prototype, "sshScript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse.prototype, "statusCode", void 0);
    return DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse;
}(utils_1.SpeakeasyBase));
exports.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse = DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse;
