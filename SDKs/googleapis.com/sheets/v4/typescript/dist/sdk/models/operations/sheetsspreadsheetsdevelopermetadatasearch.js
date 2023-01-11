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
exports.SheetsSpreadsheetsDeveloperMetadataSearchResponse = exports.SheetsSpreadsheetsDeveloperMetadataSearchRequest = exports.SheetsSpreadsheetsDeveloperMetadataSearchSecurity = exports.SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3 = exports.SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2 = exports.SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1 = exports.SheetsSpreadsheetsDeveloperMetadataSearchQueryParams = exports.SheetsSpreadsheetsDeveloperMetadataSearchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SheetsSpreadsheetsDeveloperMetadataSearchPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataSearchPathParams, _super);
    function SheetsSpreadsheetsDeveloperMetadataSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsDeveloperMetadataSearchPathParams;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataSearchPathParams = SheetsSpreadsheetsDeveloperMetadataSearchPathParams;
var SheetsSpreadsheetsDeveloperMetadataSearchQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataSearchQueryParams, _super);
    function SheetsSpreadsheetsDeveloperMetadataSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsDeveloperMetadataSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsDeveloperMetadataSearchQueryParams;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataSearchQueryParams = SheetsSpreadsheetsDeveloperMetadataSearchQueryParams;
var SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1, _super);
    function SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1 = SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1;
var SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2, _super);
    function SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2 = SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2;
var SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3, _super);
    function SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3 = SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3;
var SheetsSpreadsheetsDeveloperMetadataSearchSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataSearchSecurity, _super);
    function SheetsSpreadsheetsDeveloperMetadataSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1)
    ], SheetsSpreadsheetsDeveloperMetadataSearchSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2)
    ], SheetsSpreadsheetsDeveloperMetadataSearchSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3)
    ], SheetsSpreadsheetsDeveloperMetadataSearchSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsDeveloperMetadataSearchSecurity;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataSearchSecurity = SheetsSpreadsheetsDeveloperMetadataSearchSecurity;
var SheetsSpreadsheetsDeveloperMetadataSearchRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataSearchRequest, _super);
    function SheetsSpreadsheetsDeveloperMetadataSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataSearchPathParams)
    ], SheetsSpreadsheetsDeveloperMetadataSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataSearchQueryParams)
    ], SheetsSpreadsheetsDeveloperMetadataSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchDeveloperMetadataRequest)
    ], SheetsSpreadsheetsDeveloperMetadataSearchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataSearchSecurity)
    ], SheetsSpreadsheetsDeveloperMetadataSearchRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsDeveloperMetadataSearchRequest;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataSearchRequest = SheetsSpreadsheetsDeveloperMetadataSearchRequest;
var SheetsSpreadsheetsDeveloperMetadataSearchResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataSearchResponse, _super);
    function SheetsSpreadsheetsDeveloperMetadataSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataSearchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SearchDeveloperMetadataResponse)
    ], SheetsSpreadsheetsDeveloperMetadataSearchResponse.prototype, "searchDeveloperMetadataResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsDeveloperMetadataSearchResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsDeveloperMetadataSearchResponse;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataSearchResponse = SheetsSpreadsheetsDeveloperMetadataSearchResponse;
