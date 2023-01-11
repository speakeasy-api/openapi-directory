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
exports.SqlInstancesAddServerCaResponse = exports.SqlInstancesAddServerCaRequest = exports.SqlInstancesAddServerCaSecurity = exports.SqlInstancesAddServerCaSecurityOption2 = exports.SqlInstancesAddServerCaSecurityOption1 = exports.SqlInstancesAddServerCaQueryParams = exports.SqlInstancesAddServerCaPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SqlInstancesAddServerCaPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaPathParams, _super);
    function SqlInstancesAddServerCaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaPathParams.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaPathParams.prototype, "project", void 0);
    return SqlInstancesAddServerCaPathParams;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesAddServerCaPathParams = SqlInstancesAddServerCaPathParams;
var SqlInstancesAddServerCaQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaQueryParams, _super);
    function SqlInstancesAddServerCaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesAddServerCaQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesAddServerCaQueryParams;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesAddServerCaQueryParams = SqlInstancesAddServerCaQueryParams;
var SqlInstancesAddServerCaSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaSecurityOption1, _super);
    function SqlInstancesAddServerCaSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesAddServerCaSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesAddServerCaSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesAddServerCaSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesAddServerCaSecurityOption1 = SqlInstancesAddServerCaSecurityOption1;
var SqlInstancesAddServerCaSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaSecurityOption2, _super);
    function SqlInstancesAddServerCaSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesAddServerCaSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesAddServerCaSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesAddServerCaSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesAddServerCaSecurityOption2 = SqlInstancesAddServerCaSecurityOption2;
var SqlInstancesAddServerCaSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaSecurity, _super);
    function SqlInstancesAddServerCaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesAddServerCaSecurityOption1)
    ], SqlInstancesAddServerCaSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesAddServerCaSecurityOption2)
    ], SqlInstancesAddServerCaSecurity.prototype, "option2", void 0);
    return SqlInstancesAddServerCaSecurity;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesAddServerCaSecurity = SqlInstancesAddServerCaSecurity;
var SqlInstancesAddServerCaRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaRequest, _super);
    function SqlInstancesAddServerCaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlInstancesAddServerCaPathParams)
    ], SqlInstancesAddServerCaRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlInstancesAddServerCaQueryParams)
    ], SqlInstancesAddServerCaRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlInstancesAddServerCaSecurity)
    ], SqlInstancesAddServerCaRequest.prototype, "security", void 0);
    return SqlInstancesAddServerCaRequest;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesAddServerCaRequest = SqlInstancesAddServerCaRequest;
var SqlInstancesAddServerCaResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaResponse, _super);
    function SqlInstancesAddServerCaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesAddServerCaResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SqlInstancesAddServerCaResponse.prototype, "statusCode", void 0);
    return SqlInstancesAddServerCaResponse;
}(utils_1.SpeakeasyBase));
exports.SqlInstancesAddServerCaResponse = SqlInstancesAddServerCaResponse;
