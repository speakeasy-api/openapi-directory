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
exports.AppengineProjectsLocationsGetResponse = exports.AppengineProjectsLocationsGetRequest = exports.AppengineProjectsLocationsGetSecurity = exports.AppengineProjectsLocationsGetSecurityOption3 = exports.AppengineProjectsLocationsGetSecurityOption2 = exports.AppengineProjectsLocationsGetSecurityOption1 = exports.AppengineProjectsLocationsGetQueryParams = exports.AppengineProjectsLocationsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AppengineProjectsLocationsGetPathParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsGetPathParams, _super);
    function AppengineProjectsLocationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=locationsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetPathParams.prototype, "locationsId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetPathParams.prototype, "projectsId", void 0);
    return AppengineProjectsLocationsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsGetPathParams = AppengineProjectsLocationsGetPathParams;
var AppengineProjectsLocationsGetQueryParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsGetQueryParams, _super);
    function AppengineProjectsLocationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineProjectsLocationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineProjectsLocationsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsGetQueryParams = AppengineProjectsLocationsGetQueryParams;
var AppengineProjectsLocationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsGetSecurityOption1, _super);
    function AppengineProjectsLocationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsGetSecurityOption1 = AppengineProjectsLocationsGetSecurityOption1;
var AppengineProjectsLocationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsGetSecurityOption2, _super);
    function AppengineProjectsLocationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsGetSecurityOption2 = AppengineProjectsLocationsGetSecurityOption2;
var AppengineProjectsLocationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsGetSecurityOption3, _super);
    function AppengineProjectsLocationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsGetSecurityOption3 = AppengineProjectsLocationsGetSecurityOption3;
var AppengineProjectsLocationsGetSecurity = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsGetSecurity, _super);
    function AppengineProjectsLocationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsGetSecurityOption1)
    ], AppengineProjectsLocationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsGetSecurityOption2)
    ], AppengineProjectsLocationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsGetSecurityOption3)
    ], AppengineProjectsLocationsGetSecurity.prototype, "option3", void 0);
    return AppengineProjectsLocationsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsGetSecurity = AppengineProjectsLocationsGetSecurity;
var AppengineProjectsLocationsGetRequest = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsGetRequest, _super);
    function AppengineProjectsLocationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppengineProjectsLocationsGetPathParams)
    ], AppengineProjectsLocationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppengineProjectsLocationsGetQueryParams)
    ], AppengineProjectsLocationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppengineProjectsLocationsGetSecurity)
    ], AppengineProjectsLocationsGetRequest.prototype, "security", void 0);
    return AppengineProjectsLocationsGetRequest;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsGetRequest = AppengineProjectsLocationsGetRequest;
var AppengineProjectsLocationsGetResponse = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsGetResponse, _super);
    function AppengineProjectsLocationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Location)
    ], AppengineProjectsLocationsGetResponse.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AppengineProjectsLocationsGetResponse.prototype, "statusCode", void 0);
    return AppengineProjectsLocationsGetResponse;
}(utils_1.SpeakeasyBase));
exports.AppengineProjectsLocationsGetResponse = AppengineProjectsLocationsGetResponse;
