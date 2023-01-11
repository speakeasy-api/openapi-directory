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
exports.DriveFilesUpdateResponse = exports.DriveFilesUpdateRequest = exports.DriveFilesUpdateSecurity = exports.DriveFilesUpdateSecurityOption5 = exports.DriveFilesUpdateSecurityOption4 = exports.DriveFilesUpdateSecurityOption3 = exports.DriveFilesUpdateSecurityOption2 = exports.DriveFilesUpdateSecurityOption1 = exports.DriveFilesUpdateQueryParams = exports.DriveFilesUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveFilesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DriveFilesUpdatePathParams, _super);
    function DriveFilesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesUpdatePathParams.prototype, "fileId", void 0);
    return DriveFilesUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.DriveFilesUpdatePathParams = DriveFilesUpdatePathParams;
var DriveFilesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateQueryParams, _super);
    function DriveFilesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=addParents" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "addParents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=keepRevisionForever" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "keepRevisionForever", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ocrLanguage" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "ocrLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=removeParents" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "removeParents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=useContentAsIndexableText" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "useContentAsIndexableText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "userIp", void 0);
    return DriveFilesUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveFilesUpdateQueryParams = DriveFilesUpdateQueryParams;
var DriveFilesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurityOption1, _super);
    function DriveFilesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesUpdateSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveFilesUpdateSecurityOption1 = DriveFilesUpdateSecurityOption1;
var DriveFilesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurityOption2, _super);
    function DriveFilesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesUpdateSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveFilesUpdateSecurityOption2 = DriveFilesUpdateSecurityOption2;
var DriveFilesUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurityOption3, _super);
    function DriveFilesUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesUpdateSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.DriveFilesUpdateSecurityOption3 = DriveFilesUpdateSecurityOption3;
var DriveFilesUpdateSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurityOption4, _super);
    function DriveFilesUpdateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUpdateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUpdateSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesUpdateSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.DriveFilesUpdateSecurityOption4 = DriveFilesUpdateSecurityOption4;
var DriveFilesUpdateSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurityOption5, _super);
    function DriveFilesUpdateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUpdateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUpdateSecurityOption5.prototype, "oauth2c", void 0);
    return DriveFilesUpdateSecurityOption5;
}(utils_1.SpeakeasyBase));
exports.DriveFilesUpdateSecurityOption5 = DriveFilesUpdateSecurityOption5;
var DriveFilesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurity, _super);
    function DriveFilesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUpdateSecurityOption1)
    ], DriveFilesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUpdateSecurityOption2)
    ], DriveFilesUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUpdateSecurityOption3)
    ], DriveFilesUpdateSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUpdateSecurityOption4)
    ], DriveFilesUpdateSecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUpdateSecurityOption5)
    ], DriveFilesUpdateSecurity.prototype, "option5", void 0);
    return DriveFilesUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.DriveFilesUpdateSecurity = DriveFilesUpdateSecurity;
var DriveFilesUpdateRequest = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateRequest, _super);
    function DriveFilesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveFilesUpdatePathParams)
    ], DriveFilesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveFilesUpdateQueryParams)
    ], DriveFilesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], DriveFilesUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveFilesUpdateSecurity)
    ], DriveFilesUpdateRequest.prototype, "security", void 0);
    return DriveFilesUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.DriveFilesUpdateRequest = DriveFilesUpdateRequest;
var DriveFilesUpdateResponse = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateResponse, _super);
    function DriveFilesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveFilesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.File)
    ], DriveFilesUpdateResponse.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveFilesUpdateResponse.prototype, "statusCode", void 0);
    return DriveFilesUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.DriveFilesUpdateResponse = DriveFilesUpdateResponse;
