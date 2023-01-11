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
exports.SqlInstancesRestoreBackupResponse = exports.SqlInstancesRestoreBackupRequest = exports.SqlInstancesRestoreBackupSecurity = exports.SqlInstancesRestoreBackupSecurityOption2 = exports.SqlInstancesRestoreBackupSecurityOption1 = exports.SqlInstancesRestoreBackupQueryParams = exports.SqlInstancesRestoreBackupPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SqlInstancesRestoreBackupPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesRestoreBackupPathParams, _super);
    function SqlInstancesRestoreBackupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupPathParams.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupPathParams.prototype, "project", void 0);
    return SqlInstancesRestoreBackupPathParams;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesRestoreBackupPathParams = SqlInstancesRestoreBackupPathParams;
var SqlInstancesRestoreBackupQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesRestoreBackupQueryParams, _super);
    function SqlInstancesRestoreBackupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesRestoreBackupQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesRestoreBackupQueryParams;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesRestoreBackupQueryParams = SqlInstancesRestoreBackupQueryParams;
var SqlInstancesRestoreBackupSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesRestoreBackupSecurityOption1, _super);
    function SqlInstancesRestoreBackupSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesRestoreBackupSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesRestoreBackupSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesRestoreBackupSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesRestoreBackupSecurityOption1 = SqlInstancesRestoreBackupSecurityOption1;
var SqlInstancesRestoreBackupSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesRestoreBackupSecurityOption2, _super);
    function SqlInstancesRestoreBackupSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesRestoreBackupSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesRestoreBackupSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesRestoreBackupSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesRestoreBackupSecurityOption2 = SqlInstancesRestoreBackupSecurityOption2;
var SqlInstancesRestoreBackupSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesRestoreBackupSecurity, _super);
    function SqlInstancesRestoreBackupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesRestoreBackupSecurityOption1)
    ], SqlInstancesRestoreBackupSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesRestoreBackupSecurityOption2)
    ], SqlInstancesRestoreBackupSecurity.prototype, "option2", void 0);
    return SqlInstancesRestoreBackupSecurity;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesRestoreBackupSecurity = SqlInstancesRestoreBackupSecurity;
var SqlInstancesRestoreBackupRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesRestoreBackupRequest, _super);
    function SqlInstancesRestoreBackupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlInstancesRestoreBackupPathParams)
    ], SqlInstancesRestoreBackupRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlInstancesRestoreBackupQueryParams)
    ], SqlInstancesRestoreBackupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InstancesRestoreBackupRequest)
    ], SqlInstancesRestoreBackupRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlInstancesRestoreBackupSecurity)
    ], SqlInstancesRestoreBackupRequest.prototype, "security", void 0);
    return SqlInstancesRestoreBackupRequest;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesRestoreBackupRequest = SqlInstancesRestoreBackupRequest;
var SqlInstancesRestoreBackupResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesRestoreBackupResponse, _super);
    function SqlInstancesRestoreBackupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SqlInstancesRestoreBackupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesRestoreBackupResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SqlInstancesRestoreBackupResponse.prototype, "statusCode", void 0);
    return SqlInstancesRestoreBackupResponse;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesRestoreBackupResponse = SqlInstancesRestoreBackupResponse;
