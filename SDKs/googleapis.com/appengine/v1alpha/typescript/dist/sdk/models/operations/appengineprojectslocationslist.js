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
exports.AppengineProjectsLocationsListResponse = exports.AppengineProjectsLocationsListRequest = exports.AppengineProjectsLocationsListSecurity = exports.AppengineProjectsLocationsListSecurityOption3 = exports.AppengineProjectsLocationsListSecurityOption2 = exports.AppengineProjectsLocationsListSecurityOption1 = exports.AppengineProjectsLocationsListQueryParams = exports.AppengineProjectsLocationsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AppengineProjectsLocationsListPathParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsListPathParams, _super);
    function AppengineProjectsLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListPathParams.prototype, "projectsId", void 0);
    return AppengineProjectsLocationsListPathParams;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsListPathParams = AppengineProjectsLocationsListPathParams;
var AppengineProjectsLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsListQueryParams, _super);
    function AppengineProjectsLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AppengineProjectsLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineProjectsLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineProjectsLocationsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsListQueryParams = AppengineProjectsLocationsListQueryParams;
var AppengineProjectsLocationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsListSecurityOption1, _super);
    function AppengineProjectsLocationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsListSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsListSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsListSecurityOption1 = AppengineProjectsLocationsListSecurityOption1;
var AppengineProjectsLocationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsListSecurityOption2, _super);
    function AppengineProjectsLocationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsListSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsListSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsListSecurityOption2 = AppengineProjectsLocationsListSecurityOption2;
var AppengineProjectsLocationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsListSecurityOption3, _super);
    function AppengineProjectsLocationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsListSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsListSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsListSecurityOption3 = AppengineProjectsLocationsListSecurityOption3;
var AppengineProjectsLocationsListSecurity = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsListSecurity, _super);
    function AppengineProjectsLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsListSecurityOption1)
    ], AppengineProjectsLocationsListSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsListSecurityOption2)
    ], AppengineProjectsLocationsListSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsListSecurityOption3)
    ], AppengineProjectsLocationsListSecurity.prototype, "option3", void 0);
    return AppengineProjectsLocationsListSecurity;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsListSecurity = AppengineProjectsLocationsListSecurity;
var AppengineProjectsLocationsListRequest = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsListRequest, _super);
    function AppengineProjectsLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppengineProjectsLocationsListPathParams)
    ], AppengineProjectsLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppengineProjectsLocationsListQueryParams)
    ], AppengineProjectsLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppengineProjectsLocationsListSecurity)
    ], AppengineProjectsLocationsListRequest.prototype, "security", void 0);
    return AppengineProjectsLocationsListRequest;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsListRequest = AppengineProjectsLocationsListRequest;
var AppengineProjectsLocationsListResponse = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsListResponse, _super);
    function AppengineProjectsLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListLocationsResponse)
    ], AppengineProjectsLocationsListResponse.prototype, "listLocationsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AppengineProjectsLocationsListResponse.prototype, "statusCode", void 0);
    return AppengineProjectsLocationsListResponse;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsListResponse = AppengineProjectsLocationsListResponse;
