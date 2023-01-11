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
exports.SqlDatabasesDeleteResponse = exports.SqlDatabasesDeleteRequest = exports.SqlDatabasesDeleteSecurity = exports.SqlDatabasesDeleteSecurityOption2 = exports.SqlDatabasesDeleteSecurityOption1 = exports.SqlDatabasesDeleteQueryParams = exports.SqlDatabasesDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SqlDatabasesDeletePathParams = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeletePathParams, _super);
    function SqlDatabasesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=database" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeletePathParams.prototype, "database", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeletePathParams.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeletePathParams.prototype, "project", void 0);
    return SqlDatabasesDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.SqlDatabasesDeletePathParams = SqlDatabasesDeletePathParams;
var SqlDatabasesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteQueryParams, _super);
    function SqlDatabasesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlDatabasesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return SqlDatabasesDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.SqlDatabasesDeleteQueryParams = SqlDatabasesDeleteQueryParams;
var SqlDatabasesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteSecurityOption1, _super);
    function SqlDatabasesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlDatabasesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlDatabasesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return SqlDatabasesDeleteSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.SqlDatabasesDeleteSecurityOption1 = SqlDatabasesDeleteSecurityOption1;
var SqlDatabasesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteSecurityOption2, _super);
    function SqlDatabasesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlDatabasesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlDatabasesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return SqlDatabasesDeleteSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.SqlDatabasesDeleteSecurityOption2 = SqlDatabasesDeleteSecurityOption2;
var SqlDatabasesDeleteSecurity = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteSecurity, _super);
    function SqlDatabasesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SqlDatabasesDeleteSecurityOption1)
    ], SqlDatabasesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SqlDatabasesDeleteSecurityOption2)
    ], SqlDatabasesDeleteSecurity.prototype, "option2", void 0);
    return SqlDatabasesDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.SqlDatabasesDeleteSecurity = SqlDatabasesDeleteSecurity;
var SqlDatabasesDeleteRequest = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteRequest, _super);
    function SqlDatabasesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlDatabasesDeletePathParams)
    ], SqlDatabasesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlDatabasesDeleteQueryParams)
    ], SqlDatabasesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlDatabasesDeleteSecurity)
    ], SqlDatabasesDeleteRequest.prototype, "security", void 0);
    return SqlDatabasesDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.SqlDatabasesDeleteRequest = SqlDatabasesDeleteRequest;
var SqlDatabasesDeleteResponse = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteResponse, _super);
    function SqlDatabasesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], SqlDatabasesDeleteResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SqlDatabasesDeleteResponse.prototype, "statusCode", void 0);
    return SqlDatabasesDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.SqlDatabasesDeleteResponse = SqlDatabasesDeleteResponse;
