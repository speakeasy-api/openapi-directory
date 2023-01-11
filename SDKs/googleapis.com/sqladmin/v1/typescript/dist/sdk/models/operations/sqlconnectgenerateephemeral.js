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
exports.SqlConnectGenerateEphemeralResponse = exports.SqlConnectGenerateEphemeralRequest = exports.SqlConnectGenerateEphemeralSecurity = exports.SqlConnectGenerateEphemeralSecurityOption2 = exports.SqlConnectGenerateEphemeralSecurityOption1 = exports.SqlConnectGenerateEphemeralQueryParams = exports.SqlConnectGenerateEphemeralPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SqlConnectGenerateEphemeralPathParams = /** @class */ (function (_super) {
    __extends(SqlConnectGenerateEphemeralPathParams, _super);
    function SqlConnectGenerateEphemeralPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralPathParams.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralPathParams.prototype, "project", void 0);
    return SqlConnectGenerateEphemeralPathParams;
}(utils_1.SpeakeasyBase));
exports.SqlConnectGenerateEphemeralPathParams = SqlConnectGenerateEphemeralPathParams;
var SqlConnectGenerateEphemeralQueryParams = /** @class */ (function (_super) {
    __extends(SqlConnectGenerateEphemeralQueryParams, _super);
    function SqlConnectGenerateEphemeralQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlConnectGenerateEphemeralQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralQueryParams.prototype, "uploadProtocol", void 0);
    return SqlConnectGenerateEphemeralQueryParams;
}(utils_1.SpeakeasyBase));
exports.SqlConnectGenerateEphemeralQueryParams = SqlConnectGenerateEphemeralQueryParams;
var SqlConnectGenerateEphemeralSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlConnectGenerateEphemeralSecurityOption1, _super);
    function SqlConnectGenerateEphemeralSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlConnectGenerateEphemeralSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlConnectGenerateEphemeralSecurityOption1.prototype, "oauth2c", void 0);
    return SqlConnectGenerateEphemeralSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.SqlConnectGenerateEphemeralSecurityOption1 = SqlConnectGenerateEphemeralSecurityOption1;
var SqlConnectGenerateEphemeralSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlConnectGenerateEphemeralSecurityOption2, _super);
    function SqlConnectGenerateEphemeralSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlConnectGenerateEphemeralSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlConnectGenerateEphemeralSecurityOption2.prototype, "oauth2c", void 0);
    return SqlConnectGenerateEphemeralSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.SqlConnectGenerateEphemeralSecurityOption2 = SqlConnectGenerateEphemeralSecurityOption2;
var SqlConnectGenerateEphemeralSecurity = /** @class */ (function (_super) {
    __extends(SqlConnectGenerateEphemeralSecurity, _super);
    function SqlConnectGenerateEphemeralSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SqlConnectGenerateEphemeralSecurityOption1)
    ], SqlConnectGenerateEphemeralSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SqlConnectGenerateEphemeralSecurityOption2)
    ], SqlConnectGenerateEphemeralSecurity.prototype, "option2", void 0);
    return SqlConnectGenerateEphemeralSecurity;
}(utils_1.SpeakeasyBase));
exports.SqlConnectGenerateEphemeralSecurity = SqlConnectGenerateEphemeralSecurity;
var SqlConnectGenerateEphemeralRequest = /** @class */ (function (_super) {
    __extends(SqlConnectGenerateEphemeralRequest, _super);
    function SqlConnectGenerateEphemeralRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlConnectGenerateEphemeralPathParams)
    ], SqlConnectGenerateEphemeralRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlConnectGenerateEphemeralQueryParams)
    ], SqlConnectGenerateEphemeralRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GenerateEphemeralCertRequest)
    ], SqlConnectGenerateEphemeralRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SqlConnectGenerateEphemeralSecurity)
    ], SqlConnectGenerateEphemeralRequest.prototype, "security", void 0);
    return SqlConnectGenerateEphemeralRequest;
}(utils_1.SpeakeasyBase));
exports.SqlConnectGenerateEphemeralRequest = SqlConnectGenerateEphemeralRequest;
var SqlConnectGenerateEphemeralResponse = /** @class */ (function (_super) {
    __extends(SqlConnectGenerateEphemeralResponse, _super);
    function SqlConnectGenerateEphemeralResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SqlConnectGenerateEphemeralResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GenerateEphemeralCertResponse)
    ], SqlConnectGenerateEphemeralResponse.prototype, "generateEphemeralCertResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SqlConnectGenerateEphemeralResponse.prototype, "statusCode", void 0);
    return SqlConnectGenerateEphemeralResponse;
}(utils_1.SpeakeasyBase));
exports.SqlConnectGenerateEphemeralResponse = SqlConnectGenerateEphemeralResponse;
