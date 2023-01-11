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
exports.AnalyticsManagementUploadsGetResponse = exports.AnalyticsManagementUploadsGetRequest = exports.AnalyticsManagementUploadsGetSecurity = exports.AnalyticsManagementUploadsGetSecurityOption3 = exports.AnalyticsManagementUploadsGetSecurityOption2 = exports.AnalyticsManagementUploadsGetSecurityOption1 = exports.AnalyticsManagementUploadsGetQueryParams = exports.AnalyticsManagementUploadsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AnalyticsManagementUploadsGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsGetPathParams, _super);
    function AnalyticsManagementUploadsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsGetPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=customDataSourceId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsGetPathParams.prototype, "customDataSourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=uploadId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsGetPathParams.prototype, "uploadId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsGetPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementUploadsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUploadsGetPathParams = AnalyticsManagementUploadsGetPathParams;
var AnalyticsManagementUploadsGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsGetQueryParams, _super);
    function AnalyticsManagementUploadsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementUploadsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementUploadsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUploadsGetQueryParams = AnalyticsManagementUploadsGetQueryParams;
var AnalyticsManagementUploadsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsGetSecurityOption1, _super);
    function AnalyticsManagementUploadsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUploadsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUploadsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementUploadsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUploadsGetSecurityOption1 = AnalyticsManagementUploadsGetSecurityOption1;
var AnalyticsManagementUploadsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsGetSecurityOption2, _super);
    function AnalyticsManagementUploadsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUploadsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUploadsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementUploadsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUploadsGetSecurityOption2 = AnalyticsManagementUploadsGetSecurityOption2;
var AnalyticsManagementUploadsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsGetSecurityOption3, _super);
    function AnalyticsManagementUploadsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUploadsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUploadsGetSecurityOption3.prototype, "oauth2c", void 0);
    return AnalyticsManagementUploadsGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUploadsGetSecurityOption3 = AnalyticsManagementUploadsGetSecurityOption3;
var AnalyticsManagementUploadsGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsGetSecurity, _super);
    function AnalyticsManagementUploadsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUploadsGetSecurityOption1)
    ], AnalyticsManagementUploadsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUploadsGetSecurityOption2)
    ], AnalyticsManagementUploadsGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUploadsGetSecurityOption3)
    ], AnalyticsManagementUploadsGetSecurity.prototype, "option3", void 0);
    return AnalyticsManagementUploadsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUploadsGetSecurity = AnalyticsManagementUploadsGetSecurity;
var AnalyticsManagementUploadsGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsGetRequest, _super);
    function AnalyticsManagementUploadsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementUploadsGetPathParams)
    ], AnalyticsManagementUploadsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementUploadsGetQueryParams)
    ], AnalyticsManagementUploadsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AnalyticsManagementUploadsGetSecurity)
    ], AnalyticsManagementUploadsGetRequest.prototype, "security", void 0);
    return AnalyticsManagementUploadsGetRequest;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUploadsGetRequest = AnalyticsManagementUploadsGetRequest;
var AnalyticsManagementUploadsGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsGetResponse, _super);
    function AnalyticsManagementUploadsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AnalyticsManagementUploadsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Upload)
    ], AnalyticsManagementUploadsGetResponse.prototype, "upload", void 0);
    return AnalyticsManagementUploadsGetResponse;
}(utils_1.SpeakeasyBase));
exports.AnalyticsManagementUploadsGetResponse = AnalyticsManagementUploadsGetResponse;
