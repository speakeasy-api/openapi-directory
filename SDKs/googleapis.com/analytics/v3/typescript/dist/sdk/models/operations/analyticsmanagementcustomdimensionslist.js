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
exports.AnalyticsManagementCustomDimensionsListResponse = exports.AnalyticsManagementCustomDimensionsListRequest = exports.AnalyticsManagementCustomDimensionsListSecurity = exports.AnalyticsManagementCustomDimensionsListSecurityOption2 = exports.AnalyticsManagementCustomDimensionsListSecurityOption1 = exports.AnalyticsManagementCustomDimensionsListQueryParams = exports.AnalyticsManagementCustomDimensionsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementCustomDimensionsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsListPathParams, _super);
    function AnalyticsManagementCustomDimensionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsListPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementCustomDimensionsListPathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomDimensionsListPathParams = AnalyticsManagementCustomDimensionsListPathParams;
var AnalyticsManagementCustomDimensionsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsListQueryParams, _super);
    function AnalyticsManagementCustomDimensionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomDimensionsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomDimensionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomDimensionsListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementCustomDimensionsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomDimensionsListQueryParams = AnalyticsManagementCustomDimensionsListQueryParams;
var AnalyticsManagementCustomDimensionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsListSecurityOption1, _super);
    function AnalyticsManagementCustomDimensionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomDimensionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomDimensionsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomDimensionsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomDimensionsListSecurityOption1 = AnalyticsManagementCustomDimensionsListSecurityOption1;
var AnalyticsManagementCustomDimensionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsListSecurityOption2, _super);
    function AnalyticsManagementCustomDimensionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomDimensionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomDimensionsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomDimensionsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomDimensionsListSecurityOption2 = AnalyticsManagementCustomDimensionsListSecurityOption2;
var AnalyticsManagementCustomDimensionsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsListSecurity, _super);
    function AnalyticsManagementCustomDimensionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementCustomDimensionsListSecurityOption1)
    ], AnalyticsManagementCustomDimensionsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementCustomDimensionsListSecurityOption2)
    ], AnalyticsManagementCustomDimensionsListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementCustomDimensionsListSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomDimensionsListSecurity = AnalyticsManagementCustomDimensionsListSecurity;
var AnalyticsManagementCustomDimensionsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsListRequest, _super);
    function AnalyticsManagementCustomDimensionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsListPathParams)
    ], AnalyticsManagementCustomDimensionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsListQueryParams)
    ], AnalyticsManagementCustomDimensionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsListSecurity)
    ], AnalyticsManagementCustomDimensionsListRequest.prototype, "security", void 0);
    return AnalyticsManagementCustomDimensionsListRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomDimensionsListRequest = AnalyticsManagementCustomDimensionsListRequest;
var AnalyticsManagementCustomDimensionsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsListResponse, _super);
    function AnalyticsManagementCustomDimensionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomDimensions)
    ], AnalyticsManagementCustomDimensionsListResponse.prototype, "customDimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomDimensionsListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementCustomDimensionsListResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementCustomDimensionsListResponse = AnalyticsManagementCustomDimensionsListResponse;
