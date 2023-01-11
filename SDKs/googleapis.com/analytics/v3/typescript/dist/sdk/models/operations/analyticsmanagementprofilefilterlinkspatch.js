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
exports.AnalyticsManagementProfileFilterLinksPatchResponse = exports.AnalyticsManagementProfileFilterLinksPatchRequest = exports.AnalyticsManagementProfileFilterLinksPatchSecurity = exports.AnalyticsManagementProfileFilterLinksPatchQueryParams = exports.AnalyticsManagementProfileFilterLinksPatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementProfileFilterLinksPatchPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksPatchPathParams, _super);
    function AnalyticsManagementProfileFilterLinksPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=linkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchPathParams.prototype, "linkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchPathParams.prototype, "profileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementProfileFilterLinksPatchPathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementProfileFilterLinksPatchPathParams = AnalyticsManagementProfileFilterLinksPatchPathParams;
var AnalyticsManagementProfileFilterLinksPatchQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksPatchQueryParams, _super);
    function AnalyticsManagementProfileFilterLinksPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementProfileFilterLinksPatchQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementProfileFilterLinksPatchQueryParams = AnalyticsManagementProfileFilterLinksPatchQueryParams;
var AnalyticsManagementProfileFilterLinksPatchSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksPatchSecurity, _super);
    function AnalyticsManagementProfileFilterLinksPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfileFilterLinksPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfileFilterLinksPatchSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfileFilterLinksPatchSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementProfileFilterLinksPatchSecurity = AnalyticsManagementProfileFilterLinksPatchSecurity;
var AnalyticsManagementProfileFilterLinksPatchRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksPatchRequest, _super);
    function AnalyticsManagementProfileFilterLinksPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksPatchPathParams)
    ], AnalyticsManagementProfileFilterLinksPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksPatchQueryParams)
    ], AnalyticsManagementProfileFilterLinksPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProfileFilterLinkInput)
    ], AnalyticsManagementProfileFilterLinksPatchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksPatchSecurity)
    ], AnalyticsManagementProfileFilterLinksPatchRequest.prototype, "security", void 0);
    return AnalyticsManagementProfileFilterLinksPatchRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementProfileFilterLinksPatchRequest = AnalyticsManagementProfileFilterLinksPatchRequest;
var AnalyticsManagementProfileFilterLinksPatchResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksPatchResponse, _super);
    function AnalyticsManagementProfileFilterLinksPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksPatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProfileFilterLink)
    ], AnalyticsManagementProfileFilterLinksPatchResponse.prototype, "profileFilterLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileFilterLinksPatchResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementProfileFilterLinksPatchResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementProfileFilterLinksPatchResponse = AnalyticsManagementProfileFilterLinksPatchResponse;
