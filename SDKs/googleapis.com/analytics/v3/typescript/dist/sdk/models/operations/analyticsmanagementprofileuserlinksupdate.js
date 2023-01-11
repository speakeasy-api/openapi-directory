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
exports.AnalyticsManagementProfileUserLinksUpdateResponse = exports.AnalyticsManagementProfileUserLinksUpdateRequest = exports.AnalyticsManagementProfileUserLinksUpdateSecurity = exports.AnalyticsManagementProfileUserLinksUpdateQueryParams = exports.AnalyticsManagementProfileUserLinksUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementProfileUserLinksUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksUpdatePathParams, _super);
    function AnalyticsManagementProfileUserLinksUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=linkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksUpdatePathParams.prototype, "linkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksUpdatePathParams.prototype, "profileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementProfileUserLinksUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementProfileUserLinksUpdatePathParams = AnalyticsManagementProfileUserLinksUpdatePathParams;
var AnalyticsManagementProfileUserLinksUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksUpdateQueryParams, _super);
    function AnalyticsManagementProfileUserLinksUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementProfileUserLinksUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementProfileUserLinksUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementProfileUserLinksUpdateQueryParams = AnalyticsManagementProfileUserLinksUpdateQueryParams;
var AnalyticsManagementProfileUserLinksUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksUpdateSecurity, _super);
    function AnalyticsManagementProfileUserLinksUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfileUserLinksUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfileUserLinksUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfileUserLinksUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementProfileUserLinksUpdateSecurity = AnalyticsManagementProfileUserLinksUpdateSecurity;
var AnalyticsManagementProfileUserLinksUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksUpdateRequest, _super);
    function AnalyticsManagementProfileUserLinksUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementProfileUserLinksUpdatePathParams)
    ], AnalyticsManagementProfileUserLinksUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementProfileUserLinksUpdateQueryParams)
    ], AnalyticsManagementProfileUserLinksUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EntityUserLinkInput)
    ], AnalyticsManagementProfileUserLinksUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementProfileUserLinksUpdateSecurity)
    ], AnalyticsManagementProfileUserLinksUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementProfileUserLinksUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementProfileUserLinksUpdateRequest = AnalyticsManagementProfileUserLinksUpdateRequest;
var AnalyticsManagementProfileUserLinksUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksUpdateResponse, _super);
    function AnalyticsManagementProfileUserLinksUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.EntityUserLink)
    ], AnalyticsManagementProfileUserLinksUpdateResponse.prototype, "entityUserLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileUserLinksUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementProfileUserLinksUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementProfileUserLinksUpdateResponse = AnalyticsManagementProfileUserLinksUpdateResponse;
