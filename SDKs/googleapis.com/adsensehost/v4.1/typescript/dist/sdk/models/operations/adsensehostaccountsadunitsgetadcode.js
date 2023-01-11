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
exports.AdsensehostAccountsAdunitsGetAdCodeResponse = exports.AdsensehostAccountsAdunitsGetAdCodeRequest = exports.AdsensehostAccountsAdunitsGetAdCodeSecurity = exports.AdsensehostAccountsAdunitsGetAdCodeQueryParams = exports.AdsensehostAccountsAdunitsGetAdCodePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AdsensehostAccountsAdunitsGetAdCodePathParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsGetAdCodePathParams, _super);
    function AdsensehostAccountsAdunitsGetAdCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetAdCodePathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetAdCodePathParams.prototype, "adClientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=adUnitId" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetAdCodePathParams.prototype, "adUnitId", void 0);
    return AdsensehostAccountsAdunitsGetAdCodePathParams;
}(utils_1.SpeakeasyBase));
exports.AdsensehostAccountsAdunitsGetAdCodePathParams = AdsensehostAccountsAdunitsGetAdCodePathParams;
var AdsensehostAccountsAdunitsGetAdCodeQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsGetAdCodeQueryParams, _super);
    function AdsensehostAccountsAdunitsGetAdCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetAdCodeQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetAdCodeQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hostCustomChannelId" }),
        __metadata("design:type", Array)
    ], AdsensehostAccountsAdunitsGetAdCodeQueryParams.prototype, "hostCustomChannelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetAdCodeQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetAdCodeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostAccountsAdunitsGetAdCodeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetAdCodeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetAdCodeQueryParams.prototype, "userIp", void 0);
    return AdsensehostAccountsAdunitsGetAdCodeQueryParams;
}(utils_1.SpeakeasyBase));
exports.AdsensehostAccountsAdunitsGetAdCodeQueryParams = AdsensehostAccountsAdunitsGetAdCodeQueryParams;
var AdsensehostAccountsAdunitsGetAdCodeSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsGetAdCodeSecurity, _super);
    function AdsensehostAccountsAdunitsGetAdCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostAccountsAdunitsGetAdCodeSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostAccountsAdunitsGetAdCodeSecurity.prototype, "oauth2c", void 0);
    return AdsensehostAccountsAdunitsGetAdCodeSecurity;
}(utils_1.SpeakeasyBase));
exports.AdsensehostAccountsAdunitsGetAdCodeSecurity = AdsensehostAccountsAdunitsGetAdCodeSecurity;
var AdsensehostAccountsAdunitsGetAdCodeRequest = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsGetAdCodeRequest, _super);
    function AdsensehostAccountsAdunitsGetAdCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdsensehostAccountsAdunitsGetAdCodePathParams)
    ], AdsensehostAccountsAdunitsGetAdCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdsensehostAccountsAdunitsGetAdCodeQueryParams)
    ], AdsensehostAccountsAdunitsGetAdCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdsensehostAccountsAdunitsGetAdCodeSecurity)
    ], AdsensehostAccountsAdunitsGetAdCodeRequest.prototype, "security", void 0);
    return AdsensehostAccountsAdunitsGetAdCodeRequest;
}(utils_1.SpeakeasyBase));
exports.AdsensehostAccountsAdunitsGetAdCodeRequest = AdsensehostAccountsAdunitsGetAdCodeRequest;
var AdsensehostAccountsAdunitsGetAdCodeResponse = /** @class */ (function (_super) {
    __extends(AdsensehostAccountsAdunitsGetAdCodeResponse, _super);
    function AdsensehostAccountsAdunitsGetAdCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AdCode)
    ], AdsensehostAccountsAdunitsGetAdCodeResponse.prototype, "adCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AdsensehostAccountsAdunitsGetAdCodeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AdsensehostAccountsAdunitsGetAdCodeResponse.prototype, "statusCode", void 0);
    return AdsensehostAccountsAdunitsGetAdCodeResponse;
}(utils_1.SpeakeasyBase));
exports.AdsensehostAccountsAdunitsGetAdCodeResponse = AdsensehostAccountsAdunitsGetAdCodeResponse;
