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
exports.GetAccountsAccountIdResponse = exports.GetAccountsAccountIdRequest = exports.GetAccountsAccountIdSecurity = exports.GetAccountsAccountIdHeaders = exports.GetAccountsAccountIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAccountsAccountIdPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdPathParams, _super);
    function GetAccountsAccountIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetAccountsAccountIdPathParams = GetAccountsAccountIdPathParams;
var GetAccountsAccountIdHeaders = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdHeaders, _super);
    function GetAccountsAccountIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=sandbox-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdHeaders.prototype, "sandboxId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetAccountsAccountIdHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAccountsAccountIdHeaders = GetAccountsAccountIdHeaders;
var GetAccountsAccountIdSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdSecurity, _super);
    function GetAccountsAccountIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuthorizationCodeToken)
    ], GetAccountsAccountIdSecurity.prototype, "authorizationCodeToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GetAccountsAccountIdSecurity.prototype, "clientId", void 0);
    return GetAccountsAccountIdSecurity;
}(utils_1.SpeakeasyBase));
exports.GetAccountsAccountIdSecurity = GetAccountsAccountIdSecurity;
var GetAccountsAccountIdRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdRequest, _super);
    function GetAccountsAccountIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountsAccountIdPathParams)
    ], GetAccountsAccountIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountsAccountIdHeaders)
    ], GetAccountsAccountIdRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountsAccountIdSecurity)
    ], GetAccountsAccountIdRequest.prototype, "security", void 0);
    return GetAccountsAccountIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetAccountsAccountIdRequest = GetAccountsAccountIdRequest;
var GetAccountsAccountIdResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdResponse, _super);
    function GetAccountsAccountIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetAccountsAccountIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ObReadAccount5)
    ], GetAccountsAccountIdResponse.prototype, "obReadAccount5", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetAccountsAccountIdResponse = GetAccountsAccountIdResponse;
