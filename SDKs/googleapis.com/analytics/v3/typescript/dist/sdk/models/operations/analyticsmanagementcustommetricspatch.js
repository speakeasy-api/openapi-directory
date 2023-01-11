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
exports.AnalyticsManagementCustomMetricsPatchResponse = exports.AnalyticsManagementCustomMetricsPatchRequest = exports.AnalyticsManagementCustomMetricsPatchSecurity = exports.AnalyticsManagementCustomMetricsPatchQueryParams = exports.AnalyticsManagementCustomMetricsPatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementCustomMetricsPatchPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsPatchPathParams, _super);
    function AnalyticsManagementCustomMetricsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=customMetricId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchPathParams.prototype, "customMetricId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementCustomMetricsPatchPathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsPatchPathParams = AnalyticsManagementCustomMetricsPatchPathParams;
var AnalyticsManagementCustomMetricsPatchQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsPatchQueryParams, _super);
    function AnalyticsManagementCustomMetricsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ignoreCustomDataSourceLinks" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "ignoreCustomDataSourceLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementCustomMetricsPatchQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsPatchQueryParams = AnalyticsManagementCustomMetricsPatchQueryParams;
var AnalyticsManagementCustomMetricsPatchSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsPatchSecurity, _super);
    function AnalyticsManagementCustomMetricsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomMetricsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomMetricsPatchSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomMetricsPatchSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsPatchSecurity = AnalyticsManagementCustomMetricsPatchSecurity;
var AnalyticsManagementCustomMetricsPatchRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsPatchRequest, _super);
    function AnalyticsManagementCustomMetricsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomMetricsPatchPathParams)
    ], AnalyticsManagementCustomMetricsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomMetricsPatchQueryParams)
    ], AnalyticsManagementCustomMetricsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomMetricInput)
    ], AnalyticsManagementCustomMetricsPatchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomMetricsPatchSecurity)
    ], AnalyticsManagementCustomMetricsPatchRequest.prototype, "security", void 0);
    return AnalyticsManagementCustomMetricsPatchRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsPatchRequest = AnalyticsManagementCustomMetricsPatchRequest;
var AnalyticsManagementCustomMetricsPatchResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsPatchResponse, _super);
    function AnalyticsManagementCustomMetricsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomMetric)
    ], AnalyticsManagementCustomMetricsPatchResponse.prototype, "customMetric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomMetricsPatchResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementCustomMetricsPatchResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsPatchResponse = AnalyticsManagementCustomMetricsPatchResponse;
