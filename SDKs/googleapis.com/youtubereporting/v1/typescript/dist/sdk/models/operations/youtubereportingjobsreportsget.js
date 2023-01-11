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
exports.YoutubereportingJobsReportsGetResponse = exports.YoutubereportingJobsReportsGetRequest = exports.YoutubereportingJobsReportsGetSecurity = exports.YoutubereportingJobsReportsGetSecurityOption2 = exports.YoutubereportingJobsReportsGetSecurityOption1 = exports.YoutubereportingJobsReportsGetQueryParams = exports.YoutubereportingJobsReportsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var YoutubereportingJobsReportsGetPathParams = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsGetPathParams, _super);
    function YoutubereportingJobsReportsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetPathParams.prototype, "jobId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=reportId" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetPathParams.prototype, "reportId", void 0);
    return YoutubereportingJobsReportsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.YoutubereportingJobsReportsGetPathParams = YoutubereportingJobsReportsGetPathParams;
var YoutubereportingJobsReportsGetQueryParams = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsGetQueryParams, _super);
    function YoutubereportingJobsReportsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubereportingJobsReportsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.YoutubereportingJobsReportsGetQueryParams = YoutubereportingJobsReportsGetQueryParams;
var YoutubereportingJobsReportsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsGetSecurityOption1, _super);
    function YoutubereportingJobsReportsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubereportingJobsReportsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubereportingJobsReportsGetSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubereportingJobsReportsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.YoutubereportingJobsReportsGetSecurityOption1 = YoutubereportingJobsReportsGetSecurityOption1;
var YoutubereportingJobsReportsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsGetSecurityOption2, _super);
    function YoutubereportingJobsReportsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubereportingJobsReportsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubereportingJobsReportsGetSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubereportingJobsReportsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.YoutubereportingJobsReportsGetSecurityOption2 = YoutubereportingJobsReportsGetSecurityOption2;
var YoutubereportingJobsReportsGetSecurity = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsGetSecurity, _super);
    function YoutubereportingJobsReportsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubereportingJobsReportsGetSecurityOption1)
    ], YoutubereportingJobsReportsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", YoutubereportingJobsReportsGetSecurityOption2)
    ], YoutubereportingJobsReportsGetSecurity.prototype, "option2", void 0);
    return YoutubereportingJobsReportsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.YoutubereportingJobsReportsGetSecurity = YoutubereportingJobsReportsGetSecurity;
var YoutubereportingJobsReportsGetRequest = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsGetRequest, _super);
    function YoutubereportingJobsReportsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubereportingJobsReportsGetPathParams)
    ], YoutubereportingJobsReportsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubereportingJobsReportsGetQueryParams)
    ], YoutubereportingJobsReportsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", YoutubereportingJobsReportsGetSecurity)
    ], YoutubereportingJobsReportsGetRequest.prototype, "security", void 0);
    return YoutubereportingJobsReportsGetRequest;
}(utils_1.SpeakeasyBase));
exports.YoutubereportingJobsReportsGetRequest = YoutubereportingJobsReportsGetRequest;
var YoutubereportingJobsReportsGetResponse = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsReportsGetResponse, _super);
    function YoutubereportingJobsReportsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], YoutubereportingJobsReportsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Report)
    ], YoutubereportingJobsReportsGetResponse.prototype, "report", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], YoutubereportingJobsReportsGetResponse.prototype, "statusCode", void 0);
    return YoutubereportingJobsReportsGetResponse;
}(utils_1.SpeakeasyBase));
exports.YoutubereportingJobsReportsGetResponse = YoutubereportingJobsReportsGetResponse;
