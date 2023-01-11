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
exports.AnalyticsadminPropertiesCustomMetricsListResponse = exports.AnalyticsadminPropertiesCustomMetricsListRequest = exports.AnalyticsadminPropertiesCustomMetricsListSecurity = exports.AnalyticsadminPropertiesCustomMetricsListSecurityOption2 = exports.AnalyticsadminPropertiesCustomMetricsListSecurityOption1 = exports.AnalyticsadminPropertiesCustomMetricsListQueryParams = exports.AnalyticsadminPropertiesCustomMetricsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsadminPropertiesCustomMetricsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsListPathParams, _super);
    function AnalyticsadminPropertiesCustomMetricsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesCustomMetricsListPathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomMetricsListPathParams = AnalyticsadminPropertiesCustomMetricsListPathParams;
var AnalyticsadminPropertiesCustomMetricsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsListQueryParams, _super);
    function AnalyticsadminPropertiesCustomMetricsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesCustomMetricsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomMetricsListQueryParams = AnalyticsadminPropertiesCustomMetricsListQueryParams;
var AnalyticsadminPropertiesCustomMetricsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsListSecurityOption1, _super);
    function AnalyticsadminPropertiesCustomMetricsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesCustomMetricsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesCustomMetricsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesCustomMetricsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomMetricsListSecurityOption1 = AnalyticsadminPropertiesCustomMetricsListSecurityOption1;
var AnalyticsadminPropertiesCustomMetricsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsListSecurityOption2, _super);
    function AnalyticsadminPropertiesCustomMetricsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesCustomMetricsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesCustomMetricsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesCustomMetricsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomMetricsListSecurityOption2 = AnalyticsadminPropertiesCustomMetricsListSecurityOption2;
var AnalyticsadminPropertiesCustomMetricsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsListSecurity, _super);
    function AnalyticsadminPropertiesCustomMetricsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesCustomMetricsListSecurityOption1)
    ], AnalyticsadminPropertiesCustomMetricsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesCustomMetricsListSecurityOption2)
    ], AnalyticsadminPropertiesCustomMetricsListSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesCustomMetricsListSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomMetricsListSecurity = AnalyticsadminPropertiesCustomMetricsListSecurity;
var AnalyticsadminPropertiesCustomMetricsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsListRequest, _super);
    function AnalyticsadminPropertiesCustomMetricsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsadminPropertiesCustomMetricsListPathParams)
    ], AnalyticsadminPropertiesCustomMetricsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsadminPropertiesCustomMetricsListQueryParams)
    ], AnalyticsadminPropertiesCustomMetricsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsadminPropertiesCustomMetricsListSecurity)
    ], AnalyticsadminPropertiesCustomMetricsListRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesCustomMetricsListRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomMetricsListRequest = AnalyticsadminPropertiesCustomMetricsListRequest;
var AnalyticsadminPropertiesCustomMetricsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsListResponse, _super);
    function AnalyticsadminPropertiesCustomMetricsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1betaListCustomMetricsResponse)
    ], AnalyticsadminPropertiesCustomMetricsListResponse.prototype, "googleAnalyticsAdminV1betaListCustomMetricsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesCustomMetricsListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesCustomMetricsListResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomMetricsListResponse = AnalyticsadminPropertiesCustomMetricsListResponse;
