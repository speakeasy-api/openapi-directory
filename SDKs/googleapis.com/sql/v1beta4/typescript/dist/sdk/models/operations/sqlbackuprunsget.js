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
exports.SqlBackupRunsGetResponse = exports.SqlBackupRunsGetRequest = exports.SqlBackupRunsGetSecurity = exports.SqlBackupRunsGetSecurityOption2 = exports.SqlBackupRunsGetSecurityOption1 = exports.SqlBackupRunsGetQueryParams = exports.SqlBackupRunsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SqlBackupRunsGetPathParams = /** @class */ (function (_super) {
    __extends(SqlBackupRunsGetPathParams, _super);
    function SqlBackupRunsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetPathParams.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetPathParams.prototype, "project", void 0);
    return SqlBackupRunsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.SqlBackupRunsGetPathParams = SqlBackupRunsGetPathParams;
var SqlBackupRunsGetQueryParams = /** @class */ (function (_super) {
    __extends(SqlBackupRunsGetQueryParams, _super);
    function SqlBackupRunsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlBackupRunsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlBackupRunsGetQueryParams.prototype, "uploadProtocol", void 0);
    return SqlBackupRunsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.SqlBackupRunsGetQueryParams = SqlBackupRunsGetQueryParams;
var SqlBackupRunsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlBackupRunsGetSecurityOption1, _super);
    function SqlBackupRunsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlBackupRunsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlBackupRunsGetSecurityOption1.prototype, "oauth2c", void 0);
    return SqlBackupRunsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.SqlBackupRunsGetSecurityOption1 = SqlBackupRunsGetSecurityOption1;
var SqlBackupRunsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlBackupRunsGetSecurityOption2, _super);
    function SqlBackupRunsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlBackupRunsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlBackupRunsGetSecurityOption2.prototype, "oauth2c", void 0);
    return SqlBackupRunsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.SqlBackupRunsGetSecurityOption2 = SqlBackupRunsGetSecurityOption2;
var SqlBackupRunsGetSecurity = /** @class */ (function (_super) {
    __extends(SqlBackupRunsGetSecurity, _super);
    function SqlBackupRunsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SqlBackupRunsGetSecurityOption1)
    ], SqlBackupRunsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SqlBackupRunsGetSecurityOption2)
    ], SqlBackupRunsGetSecurity.prototype, "option2", void 0);
    return SqlBackupRunsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.SqlBackupRunsGetSecurity = SqlBackupRunsGetSecurity;
var SqlBackupRunsGetRequest = /** @class */ (function (_super) {
    __extends(SqlBackupRunsGetRequest, _super);
    function SqlBackupRunsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlBackupRunsGetPathParams)
    ], SqlBackupRunsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlBackupRunsGetQueryParams)
    ], SqlBackupRunsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlBackupRunsGetSecurity)
    ], SqlBackupRunsGetRequest.prototype, "security", void 0);
    return SqlBackupRunsGetRequest;
}(utils_1.SpeakeasyBase));
exports.SqlBackupRunsGetRequest = SqlBackupRunsGetRequest;
var SqlBackupRunsGetResponse = /** @class */ (function (_super) {
    __extends(SqlBackupRunsGetResponse, _super);
    function SqlBackupRunsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BackupRun)
    ], SqlBackupRunsGetResponse.prototype, "backupRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SqlBackupRunsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SqlBackupRunsGetResponse.prototype, "statusCode", void 0);
    return SqlBackupRunsGetResponse;
}(utils_1.SpeakeasyBase));
exports.SqlBackupRunsGetResponse = SqlBackupRunsGetResponse;
