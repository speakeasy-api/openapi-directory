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
exports.AnalyticsadminPropertiesCustomDimensionsListResponse = exports.AnalyticsadminPropertiesCustomDimensionsListRequest = exports.AnalyticsadminPropertiesCustomDimensionsListSecurity = exports.AnalyticsadminPropertiesCustomDimensionsListSecurityOption2 = exports.AnalyticsadminPropertiesCustomDimensionsListSecurityOption1 = exports.AnalyticsadminPropertiesCustomDimensionsListQueryParams = exports.AnalyticsadminPropertiesCustomDimensionsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsadminPropertiesCustomDimensionsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsListPathParams, _super);
    function AnalyticsadminPropertiesCustomDimensionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesCustomDimensionsListPathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomDimensionsListPathParams = AnalyticsadminPropertiesCustomDimensionsListPathParams;
var AnalyticsadminPropertiesCustomDimensionsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsListQueryParams, _super);
    function AnalyticsadminPropertiesCustomDimensionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesCustomDimensionsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomDimensionsListQueryParams = AnalyticsadminPropertiesCustomDimensionsListQueryParams;
var AnalyticsadminPropertiesCustomDimensionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsListSecurityOption1, _super);
    function AnalyticsadminPropertiesCustomDimensionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesCustomDimensionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesCustomDimensionsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesCustomDimensionsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomDimensionsListSecurityOption1 = AnalyticsadminPropertiesCustomDimensionsListSecurityOption1;
var AnalyticsadminPropertiesCustomDimensionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsListSecurityOption2, _super);
    function AnalyticsadminPropertiesCustomDimensionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesCustomDimensionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesCustomDimensionsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesCustomDimensionsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomDimensionsListSecurityOption2 = AnalyticsadminPropertiesCustomDimensionsListSecurityOption2;
var AnalyticsadminPropertiesCustomDimensionsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsListSecurity, _super);
    function AnalyticsadminPropertiesCustomDimensionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesCustomDimensionsListSecurityOption1)
    ], AnalyticsadminPropertiesCustomDimensionsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesCustomDimensionsListSecurityOption2)
    ], AnalyticsadminPropertiesCustomDimensionsListSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesCustomDimensionsListSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomDimensionsListSecurity = AnalyticsadminPropertiesCustomDimensionsListSecurity;
var AnalyticsadminPropertiesCustomDimensionsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsListRequest, _super);
    function AnalyticsadminPropertiesCustomDimensionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsadminPropertiesCustomDimensionsListPathParams)
    ], AnalyticsadminPropertiesCustomDimensionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsadminPropertiesCustomDimensionsListQueryParams)
    ], AnalyticsadminPropertiesCustomDimensionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsadminPropertiesCustomDimensionsListSecurity)
    ], AnalyticsadminPropertiesCustomDimensionsListRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesCustomDimensionsListRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomDimensionsListRequest = AnalyticsadminPropertiesCustomDimensionsListRequest;
var AnalyticsadminPropertiesCustomDimensionsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomDimensionsListResponse, _super);
    function AnalyticsadminPropertiesCustomDimensionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomDimensionsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1betaListCustomDimensionsResponse)
    ], AnalyticsadminPropertiesCustomDimensionsListResponse.prototype, "googleAnalyticsAdminV1betaListCustomDimensionsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesCustomDimensionsListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesCustomDimensionsListResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsadminPropertiesCustomDimensionsListResponse = AnalyticsadminPropertiesCustomDimensionsListResponse;
