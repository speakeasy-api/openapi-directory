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
exports.AnalyticsManagementCustomMetricsUpdateResponse = exports.AnalyticsManagementCustomMetricsUpdateRequest = exports.AnalyticsManagementCustomMetricsUpdateSecurity = exports.AnalyticsManagementCustomMetricsUpdateQueryParams = exports.AnalyticsManagementCustomMetricsUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementCustomMetricsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsUpdatePathParams, _super);
    function AnalyticsManagementCustomMetricsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=customMetricId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsUpdatePathParams.prototype, "customMetricId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementCustomMetricsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsUpdatePathParams = AnalyticsManagementCustomMetricsUpdatePathParams;
var AnalyticsManagementCustomMetricsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsUpdateQueryParams, _super);
    function AnalyticsManagementCustomMetricsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ignoreCustomDataSourceLinks" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomMetricsUpdateQueryParams.prototype, "ignoreCustomDataSourceLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomMetricsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementCustomMetricsUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsUpdateQueryParams = AnalyticsManagementCustomMetricsUpdateQueryParams;
var AnalyticsManagementCustomMetricsUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsUpdateSecurity, _super);
    function AnalyticsManagementCustomMetricsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomMetricsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomMetricsUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomMetricsUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsUpdateSecurity = AnalyticsManagementCustomMetricsUpdateSecurity;
var AnalyticsManagementCustomMetricsUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsUpdateRequest, _super);
    function AnalyticsManagementCustomMetricsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomMetricsUpdatePathParams)
    ], AnalyticsManagementCustomMetricsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomMetricsUpdateQueryParams)
    ], AnalyticsManagementCustomMetricsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomMetricInput)
    ], AnalyticsManagementCustomMetricsUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomMetricsUpdateSecurity)
    ], AnalyticsManagementCustomMetricsUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementCustomMetricsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsUpdateRequest = AnalyticsManagementCustomMetricsUpdateRequest;
var AnalyticsManagementCustomMetricsUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsUpdateResponse, _super);
    function AnalyticsManagementCustomMetricsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomMetric)
    ], AnalyticsManagementCustomMetricsUpdateResponse.prototype, "customMetric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomMetricsUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementCustomMetricsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsUpdateResponse = AnalyticsManagementCustomMetricsUpdateResponse;
