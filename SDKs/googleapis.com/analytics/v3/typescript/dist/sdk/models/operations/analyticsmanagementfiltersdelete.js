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
exports.AnalyticsManagementFiltersDeleteResponse = exports.AnalyticsManagementFiltersDeleteRequest = exports.AnalyticsManagementFiltersDeleteSecurity = exports.AnalyticsManagementFiltersDeleteQueryParams = exports.AnalyticsManagementFiltersDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementFiltersDeletePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersDeletePathParams, _super);
    function AnalyticsManagementFiltersDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=filterId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersDeletePathParams.prototype, "filterId", void 0);
    return AnalyticsManagementFiltersDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementFiltersDeletePathParams = AnalyticsManagementFiltersDeletePathParams;
var AnalyticsManagementFiltersDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersDeleteQueryParams, _super);
    function AnalyticsManagementFiltersDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementFiltersDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersDeleteQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementFiltersDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementFiltersDeleteQueryParams = AnalyticsManagementFiltersDeleteQueryParams;
var AnalyticsManagementFiltersDeleteSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersDeleteSecurity, _super);
    function AnalyticsManagementFiltersDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementFiltersDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementFiltersDeleteSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementFiltersDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementFiltersDeleteSecurity = AnalyticsManagementFiltersDeleteSecurity;
var AnalyticsManagementFiltersDeleteRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersDeleteRequest, _super);
    function AnalyticsManagementFiltersDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementFiltersDeletePathParams)
    ], AnalyticsManagementFiltersDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementFiltersDeleteQueryParams)
    ], AnalyticsManagementFiltersDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementFiltersDeleteSecurity)
    ], AnalyticsManagementFiltersDeleteRequest.prototype, "security", void 0);
    return AnalyticsManagementFiltersDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementFiltersDeleteRequest = AnalyticsManagementFiltersDeleteRequest;
var AnalyticsManagementFiltersDeleteResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersDeleteResponse, _super);
    function AnalyticsManagementFiltersDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Filter)
    ], AnalyticsManagementFiltersDeleteResponse.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementFiltersDeleteResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementFiltersDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementFiltersDeleteResponse = AnalyticsManagementFiltersDeleteResponse;
