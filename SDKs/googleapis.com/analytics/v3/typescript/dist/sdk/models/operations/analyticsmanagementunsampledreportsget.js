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
exports.AnalyticsManagementUnsampledReportsGetResponse = exports.AnalyticsManagementUnsampledReportsGetRequest = exports.AnalyticsManagementUnsampledReportsGetSecurity = exports.AnalyticsManagementUnsampledReportsGetSecurityOption3 = exports.AnalyticsManagementUnsampledReportsGetSecurityOption2 = exports.AnalyticsManagementUnsampledReportsGetSecurityOption1 = exports.AnalyticsManagementUnsampledReportsGetQueryParams = exports.AnalyticsManagementUnsampledReportsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementUnsampledReportsGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsGetPathParams, _super);
    function AnalyticsManagementUnsampledReportsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsGetPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsGetPathParams.prototype, "profileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=unsampledReportId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsGetPathParams.prototype, "unsampledReportId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsGetPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementUnsampledReportsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsGetPathParams = AnalyticsManagementUnsampledReportsGetPathParams;
var AnalyticsManagementUnsampledReportsGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsGetQueryParams, _super);
    function AnalyticsManagementUnsampledReportsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementUnsampledReportsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementUnsampledReportsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsGetQueryParams = AnalyticsManagementUnsampledReportsGetQueryParams;
var AnalyticsManagementUnsampledReportsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsGetSecurityOption1, _super);
    function AnalyticsManagementUnsampledReportsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUnsampledReportsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUnsampledReportsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementUnsampledReportsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsGetSecurityOption1 = AnalyticsManagementUnsampledReportsGetSecurityOption1;
var AnalyticsManagementUnsampledReportsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsGetSecurityOption2, _super);
    function AnalyticsManagementUnsampledReportsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUnsampledReportsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUnsampledReportsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementUnsampledReportsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsGetSecurityOption2 = AnalyticsManagementUnsampledReportsGetSecurityOption2;
var AnalyticsManagementUnsampledReportsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsGetSecurityOption3, _super);
    function AnalyticsManagementUnsampledReportsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUnsampledReportsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUnsampledReportsGetSecurityOption3.prototype, "oauth2c", void 0);
    return AnalyticsManagementUnsampledReportsGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsGetSecurityOption3 = AnalyticsManagementUnsampledReportsGetSecurityOption3;
var AnalyticsManagementUnsampledReportsGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsGetSecurity, _super);
    function AnalyticsManagementUnsampledReportsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUnsampledReportsGetSecurityOption1)
    ], AnalyticsManagementUnsampledReportsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUnsampledReportsGetSecurityOption2)
    ], AnalyticsManagementUnsampledReportsGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUnsampledReportsGetSecurityOption3)
    ], AnalyticsManagementUnsampledReportsGetSecurity.prototype, "option3", void 0);
    return AnalyticsManagementUnsampledReportsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsGetSecurity = AnalyticsManagementUnsampledReportsGetSecurity;
var AnalyticsManagementUnsampledReportsGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsGetRequest, _super);
    function AnalyticsManagementUnsampledReportsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsGetPathParams)
    ], AnalyticsManagementUnsampledReportsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsGetQueryParams)
    ], AnalyticsManagementUnsampledReportsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementUnsampledReportsGetSecurity)
    ], AnalyticsManagementUnsampledReportsGetRequest.prototype, "security", void 0);
    return AnalyticsManagementUnsampledReportsGetRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsGetRequest = AnalyticsManagementUnsampledReportsGetRequest;
var AnalyticsManagementUnsampledReportsGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUnsampledReportsGetResponse, _super);
    function AnalyticsManagementUnsampledReportsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementUnsampledReportsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementUnsampledReportsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnsampledReport)
    ], AnalyticsManagementUnsampledReportsGetResponse.prototype, "unsampledReport", void 0);
    return AnalyticsManagementUnsampledReportsGetResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUnsampledReportsGetResponse = AnalyticsManagementUnsampledReportsGetResponse;
