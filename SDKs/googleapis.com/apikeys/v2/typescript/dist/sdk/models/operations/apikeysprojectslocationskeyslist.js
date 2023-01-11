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
exports.ApikeysProjectsLocationsKeysListResponse = exports.ApikeysProjectsLocationsKeysListRequest = exports.ApikeysProjectsLocationsKeysListSecurity = exports.ApikeysProjectsLocationsKeysListSecurityOption2 = exports.ApikeysProjectsLocationsKeysListSecurityOption1 = exports.ApikeysProjectsLocationsKeysListQueryParams = exports.ApikeysProjectsLocationsKeysListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ApikeysProjectsLocationsKeysListPathParams = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysListPathParams, _super);
    function ApikeysProjectsLocationsKeysListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListPathParams.prototype, "parent", void 0);
    return ApikeysProjectsLocationsKeysListPathParams;
}(utils_1.SpeakeasyBase));
exports.ApikeysProjectsLocationsKeysListPathParams = ApikeysProjectsLocationsKeysListPathParams;
var ApikeysProjectsLocationsKeysListQueryParams = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysListQueryParams, _super);
    function ApikeysProjectsLocationsKeysListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListQueryParams.prototype, "uploadProtocol", void 0);
    return ApikeysProjectsLocationsKeysListQueryParams;
}(utils_1.SpeakeasyBase));
exports.ApikeysProjectsLocationsKeysListQueryParams = ApikeysProjectsLocationsKeysListQueryParams;
var ApikeysProjectsLocationsKeysListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysListSecurityOption1, _super);
    function ApikeysProjectsLocationsKeysListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApikeysProjectsLocationsKeysListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApikeysProjectsLocationsKeysListSecurityOption1.prototype, "oauth2c", void 0);
    return ApikeysProjectsLocationsKeysListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ApikeysProjectsLocationsKeysListSecurityOption1 = ApikeysProjectsLocationsKeysListSecurityOption1;
var ApikeysProjectsLocationsKeysListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysListSecurityOption2, _super);
    function ApikeysProjectsLocationsKeysListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApikeysProjectsLocationsKeysListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApikeysProjectsLocationsKeysListSecurityOption2.prototype, "oauth2c", void 0);
    return ApikeysProjectsLocationsKeysListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ApikeysProjectsLocationsKeysListSecurityOption2 = ApikeysProjectsLocationsKeysListSecurityOption2;
var ApikeysProjectsLocationsKeysListSecurity = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysListSecurity, _super);
    function ApikeysProjectsLocationsKeysListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ApikeysProjectsLocationsKeysListSecurityOption1)
    ], ApikeysProjectsLocationsKeysListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ApikeysProjectsLocationsKeysListSecurityOption2)
    ], ApikeysProjectsLocationsKeysListSecurity.prototype, "option2", void 0);
    return ApikeysProjectsLocationsKeysListSecurity;
}(utils_1.SpeakeasyBase));
exports.ApikeysProjectsLocationsKeysListSecurity = ApikeysProjectsLocationsKeysListSecurity;
var ApikeysProjectsLocationsKeysListRequest = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysListRequest, _super);
    function ApikeysProjectsLocationsKeysListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ApikeysProjectsLocationsKeysListPathParams)
    ], ApikeysProjectsLocationsKeysListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ApikeysProjectsLocationsKeysListQueryParams)
    ], ApikeysProjectsLocationsKeysListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ApikeysProjectsLocationsKeysListSecurity)
    ], ApikeysProjectsLocationsKeysListRequest.prototype, "security", void 0);
    return ApikeysProjectsLocationsKeysListRequest;
}(utils_1.SpeakeasyBase));
exports.ApikeysProjectsLocationsKeysListRequest = ApikeysProjectsLocationsKeysListRequest;
var ApikeysProjectsLocationsKeysListResponse = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysListResponse, _super);
    function ApikeysProjectsLocationsKeysListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ApikeysProjectsLocationsKeysListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.V2ListKeysResponse)
    ], ApikeysProjectsLocationsKeysListResponse.prototype, "v2ListKeysResponse", void 0);
    return ApikeysProjectsLocationsKeysListResponse;
}(utils_1.SpeakeasyBase));
exports.ApikeysProjectsLocationsKeysListResponse = ApikeysProjectsLocationsKeysListResponse;
