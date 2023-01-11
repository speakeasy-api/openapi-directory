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
exports.SheetsSpreadsheetsDeveloperMetadataGetResponse = exports.SheetsSpreadsheetsDeveloperMetadataGetRequest = exports.SheetsSpreadsheetsDeveloperMetadataGetSecurity = exports.SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3 = exports.SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2 = exports.SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1 = exports.SheetsSpreadsheetsDeveloperMetadataGetQueryParams = exports.SheetsSpreadsheetsDeveloperMetadataGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SheetsSpreadsheetsDeveloperMetadataGetPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataGetPathParams, _super);
    function SheetsSpreadsheetsDeveloperMetadataGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=metadataId" }),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsDeveloperMetadataGetPathParams.prototype, "metadataId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsDeveloperMetadataGetPathParams;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataGetPathParams = SheetsSpreadsheetsDeveloperMetadataGetPathParams;
var SheetsSpreadsheetsDeveloperMetadataGetQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataGetQueryParams, _super);
    function SheetsSpreadsheetsDeveloperMetadataGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsDeveloperMetadataGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsDeveloperMetadataGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataGetQueryParams = SheetsSpreadsheetsDeveloperMetadataGetQueryParams;
var SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1, _super);
    function SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1 = SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1;
var SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2, _super);
    function SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2 = SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2;
var SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3, _super);
    function SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3 = SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3;
var SheetsSpreadsheetsDeveloperMetadataGetSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataGetSecurity, _super);
    function SheetsSpreadsheetsDeveloperMetadataGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1)
    ], SheetsSpreadsheetsDeveloperMetadataGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2)
    ], SheetsSpreadsheetsDeveloperMetadataGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3)
    ], SheetsSpreadsheetsDeveloperMetadataGetSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsDeveloperMetadataGetSecurity;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataGetSecurity = SheetsSpreadsheetsDeveloperMetadataGetSecurity;
var SheetsSpreadsheetsDeveloperMetadataGetRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataGetRequest, _super);
    function SheetsSpreadsheetsDeveloperMetadataGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataGetPathParams)
    ], SheetsSpreadsheetsDeveloperMetadataGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataGetQueryParams)
    ], SheetsSpreadsheetsDeveloperMetadataGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SheetsSpreadsheetsDeveloperMetadataGetSecurity)
    ], SheetsSpreadsheetsDeveloperMetadataGetRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsDeveloperMetadataGetRequest;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataGetRequest = SheetsSpreadsheetsDeveloperMetadataGetRequest;
var SheetsSpreadsheetsDeveloperMetadataGetResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsDeveloperMetadataGetResponse, _super);
    function SheetsSpreadsheetsDeveloperMetadataGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsDeveloperMetadataGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DeveloperMetadata)
    ], SheetsSpreadsheetsDeveloperMetadataGetResponse.prototype, "developerMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsDeveloperMetadataGetResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsDeveloperMetadataGetResponse;
}(utils_1.SpeakeasyBase));
exports.SheetsSpreadsheetsDeveloperMetadataGetResponse = SheetsSpreadsheetsDeveloperMetadataGetResponse;
