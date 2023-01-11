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
exports.AnalyticsManagementCustomMetricsListResponse = exports.AnalyticsManagementCustomMetricsListRequest = exports.AnalyticsManagementCustomMetricsListSecurity = exports.AnalyticsManagementCustomMetricsListSecurityOption2 = exports.AnalyticsManagementCustomMetricsListSecurityOption1 = exports.AnalyticsManagementCustomMetricsListQueryParams = exports.AnalyticsManagementCustomMetricsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementCustomMetricsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsListPathParams, _super);
    function AnalyticsManagementCustomMetricsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsListPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementCustomMetricsListPathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsListPathParams = AnalyticsManagementCustomMetricsListPathParams;
var AnalyticsManagementCustomMetricsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsListQueryParams, _super);
    function AnalyticsManagementCustomMetricsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomMetricsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomMetricsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomMetricsListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementCustomMetricsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsListQueryParams = AnalyticsManagementCustomMetricsListQueryParams;
var AnalyticsManagementCustomMetricsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsListSecurityOption1, _super);
    function AnalyticsManagementCustomMetricsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomMetricsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomMetricsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomMetricsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsListSecurityOption1 = AnalyticsManagementCustomMetricsListSecurityOption1;
var AnalyticsManagementCustomMetricsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsListSecurityOption2, _super);
    function AnalyticsManagementCustomMetricsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomMetricsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomMetricsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomMetricsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsListSecurityOption2 = AnalyticsManagementCustomMetricsListSecurityOption2;
var AnalyticsManagementCustomMetricsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsListSecurity, _super);
    function AnalyticsManagementCustomMetricsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementCustomMetricsListSecurityOption1)
    ], AnalyticsManagementCustomMetricsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementCustomMetricsListSecurityOption2)
    ], AnalyticsManagementCustomMetricsListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementCustomMetricsListSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsListSecurity = AnalyticsManagementCustomMetricsListSecurity;
var AnalyticsManagementCustomMetricsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsListRequest, _super);
    function AnalyticsManagementCustomMetricsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomMetricsListPathParams)
    ], AnalyticsManagementCustomMetricsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomMetricsListQueryParams)
    ], AnalyticsManagementCustomMetricsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomMetricsListSecurity)
    ], AnalyticsManagementCustomMetricsListRequest.prototype, "security", void 0);
    return AnalyticsManagementCustomMetricsListRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsListRequest = AnalyticsManagementCustomMetricsListRequest;
var AnalyticsManagementCustomMetricsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomMetricsListResponse, _super);
    function AnalyticsManagementCustomMetricsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomMetricsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomMetrics)
    ], AnalyticsManagementCustomMetricsListResponse.prototype, "customMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomMetricsListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementCustomMetricsListResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomMetricsListResponse = AnalyticsManagementCustomMetricsListResponse;
