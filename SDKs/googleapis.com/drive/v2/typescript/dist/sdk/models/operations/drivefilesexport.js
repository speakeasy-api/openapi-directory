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
exports.DriveFilesExportResponse = exports.DriveFilesExportRequest = exports.DriveFilesExportSecurity = exports.DriveFilesExportSecurityOption3 = exports.DriveFilesExportSecurityOption2 = exports.DriveFilesExportSecurityOption1 = exports.DriveFilesExportQueryParams = exports.DriveFilesExportPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveFilesExportPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesExportPathParams, _super);
    function DriveFilesExportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesExportPathParams.prototype, "fileId", void 0);
    return DriveFilesExportPathParams;
}(utils_1.SpeakeasyBase));
exports.DriveFilesExportPathParams = DriveFilesExportPathParams;
var DriveFilesExportQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesExportQueryParams, _super);
    function DriveFilesExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=mimeType" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "mimeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesExportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "userIp", void 0);
    return DriveFilesExportQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveFilesExportQueryParams = DriveFilesExportQueryParams;
var DriveFilesExportSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesExportSecurityOption1, _super);
    function DriveFilesExportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesExportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesExportSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesExportSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveFilesExportSecurityOption1 = DriveFilesExportSecurityOption1;
var DriveFilesExportSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesExportSecurityOption2, _super);
    function DriveFilesExportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesExportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesExportSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesExportSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveFilesExportSecurityOption2 = DriveFilesExportSecurityOption2;
var DriveFilesExportSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesExportSecurityOption3, _super);
    function DriveFilesExportSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesExportSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesExportSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesExportSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.DriveFilesExportSecurityOption3 = DriveFilesExportSecurityOption3;
var DriveFilesExportSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesExportSecurity, _super);
    function DriveFilesExportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesExportSecurityOption1)
    ], DriveFilesExportSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesExportSecurityOption2)
    ], DriveFilesExportSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesExportSecurityOption3)
    ], DriveFilesExportSecurity.prototype, "option3", void 0);
    return DriveFilesExportSecurity;
}(utils_1.SpeakeasyBase));
exports.DriveFilesExportSecurity = DriveFilesExportSecurity;
var DriveFilesExportRequest = /** @class */ (function (_super) {
    __extends(DriveFilesExportRequest, _super);
    function DriveFilesExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveFilesExportPathParams)
    ], DriveFilesExportRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveFilesExportQueryParams)
    ], DriveFilesExportRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveFilesExportSecurity)
    ], DriveFilesExportRequest.prototype, "security", void 0);
    return DriveFilesExportRequest;
}(utils_1.SpeakeasyBase));
exports.DriveFilesExportRequest = DriveFilesExportRequest;
var DriveFilesExportResponse = /** @class */ (function (_super) {
    __extends(DriveFilesExportResponse, _super);
    function DriveFilesExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveFilesExportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveFilesExportResponse.prototype, "statusCode", void 0);
    return DriveFilesExportResponse;
}(utils_1.SpeakeasyBase));
exports.DriveFilesExportResponse = DriveFilesExportResponse;
