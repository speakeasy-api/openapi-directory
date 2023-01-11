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
exports.AndroidpublisherEditsExpansionfilesUploadResponse = exports.AndroidpublisherEditsExpansionfilesUploadRequest = exports.AndroidpublisherEditsExpansionfilesUploadSecurity = exports.AndroidpublisherEditsExpansionfilesUploadQueryParams = exports.AndroidpublisherEditsExpansionfilesUploadPathParams = exports.AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum;
(function (AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum) {
    AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum["ExpansionFileTypeUnspecified"] = "expansionFileTypeUnspecified";
    AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum["Main"] = "main";
    AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum["Patch"] = "patch";
})(AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum = exports.AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum || (exports.AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum = {}));
var AndroidpublisherEditsExpansionfilesUploadPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesUploadPathParams, _super);
    function AndroidpublisherEditsExpansionfilesUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=apkVersionCode" }),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsExpansionfilesUploadPathParams.prototype, "apkVersionCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadPathParams.prototype, "editId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=expansionFileType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadPathParams.prototype, "expansionFileType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadPathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsExpansionfilesUploadPathParams;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherEditsExpansionfilesUploadPathParams = AndroidpublisherEditsExpansionfilesUploadPathParams;
var AndroidpublisherEditsExpansionfilesUploadQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesUploadQueryParams, _super);
    function AndroidpublisherEditsExpansionfilesUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherEditsExpansionfilesUploadQueryParams;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherEditsExpansionfilesUploadQueryParams = AndroidpublisherEditsExpansionfilesUploadQueryParams;
var AndroidpublisherEditsExpansionfilesUploadSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesUploadSecurity, _super);
    function AndroidpublisherEditsExpansionfilesUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsExpansionfilesUploadSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsExpansionfilesUploadSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsExpansionfilesUploadSecurity;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherEditsExpansionfilesUploadSecurity = AndroidpublisherEditsExpansionfilesUploadSecurity;
var AndroidpublisherEditsExpansionfilesUploadRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesUploadRequest, _super);
    function AndroidpublisherEditsExpansionfilesUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesUploadPathParams)
    ], AndroidpublisherEditsExpansionfilesUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesUploadQueryParams)
    ], AndroidpublisherEditsExpansionfilesUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesUploadSecurity)
    ], AndroidpublisherEditsExpansionfilesUploadRequest.prototype, "security", void 0);
    return AndroidpublisherEditsExpansionfilesUploadRequest;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherEditsExpansionfilesUploadRequest = AndroidpublisherEditsExpansionfilesUploadRequest;
var AndroidpublisherEditsExpansionfilesUploadResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesUploadResponse, _super);
    function AndroidpublisherEditsExpansionfilesUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesUploadResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ExpansionFilesUploadResponse)
    ], AndroidpublisherEditsExpansionfilesUploadResponse.prototype, "expansionFilesUploadResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsExpansionfilesUploadResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsExpansionfilesUploadResponse;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherEditsExpansionfilesUploadResponse = AndroidpublisherEditsExpansionfilesUploadResponse;
