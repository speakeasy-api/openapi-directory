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
exports.AnalyticsManagementUnsampledReportsDeleteResponse = exports.AnalyticsManagementUnsampledReportsDeleteRequest = exports.AnalyticsManagementUnsampledReportsDeleteSecurity = exports.AnalyticsManagementUnsampledReportsDeleteQueryParams = exports.AnalyticsManagementUnsampledReportsDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementUnsampledReportsDeletePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsDeletePathParams, _super);
    function AnalyticsManagementUnsampledReportsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsDeletePathParams.prototype, "profileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=unsampledReportId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsDeletePathParams.prototype, "unsampledReportId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsDeletePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementUnsampledReportsDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsDeletePathParams = AnalyticsManagementUnsampledReportsDeletePathParams;
var AnalyticsManagementUnsampledReportsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsDeleteQueryParams, _super);
    function AnalyticsManagementUnsampledReportsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementUnsampledReportsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsDeleteQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementUnsampledReportsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsDeleteQueryParams = AnalyticsManagementUnsampledReportsDeleteQueryParams;
var AnalyticsManagementUnsampledReportsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsDeleteSecurity, _super);
    function AnalyticsManagementUnsampledReportsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUnsampledReportsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUnsampledReportsDeleteSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementUnsampledReportsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsDeleteSecurity = AnalyticsManagementUnsampledReportsDeleteSecurity;
var AnalyticsManagementUnsampledReportsDeleteRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsDeleteRequest, _super);
    function AnalyticsManagementUnsampledReportsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsDeletePathParams)
    ], AnalyticsManagementUnsampledReportsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsDeleteQueryParams)
    ], AnalyticsManagementUnsampledReportsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsDeleteSecurity)
    ], AnalyticsManagementUnsampledReportsDeleteRequest.prototype, "security", void 0);
    return AnalyticsManagementUnsampledReportsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsDeleteRequest = AnalyticsManagementUnsampledReportsDeleteRequest;
var AnalyticsManagementUnsampledReportsDeleteResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsDeleteResponse, _super);
    function AnalyticsManagementUnsampledReportsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementUnsampledReportsDeleteResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementUnsampledReportsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsDeleteResponse = AnalyticsManagementUnsampledReportsDeleteResponse;
