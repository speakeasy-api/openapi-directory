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
exports.TranslateProjectsLocationsTranslateTextResponse = exports.TranslateProjectsLocationsTranslateTextRequest = exports.TranslateProjectsLocationsTranslateTextSecurity = exports.TranslateProjectsLocationsTranslateTextSecurityOption2 = exports.TranslateProjectsLocationsTranslateTextSecurityOption1 = exports.TranslateProjectsLocationsTranslateTextQueryParams = exports.TranslateProjectsLocationsTranslateTextPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TranslateProjectsLocationsTranslateTextPathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateTextPathParams, _super);
    function TranslateProjectsLocationsTranslateTextPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextPathParams.prototype, "parent", void 0);
    return TranslateProjectsLocationsTranslateTextPathParams;
}(utils_1.SpeakeasyBase));
exports.TranslateProjectsLocationsTranslateTextPathParams = TranslateProjectsLocationsTranslateTextPathParams;
var TranslateProjectsLocationsTranslateTextQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateTextQueryParams, _super);
    function TranslateProjectsLocationsTranslateTextQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsTranslateTextQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsTranslateTextQueryParams;
}(utils_1.SpeakeasyBase));
exports.TranslateProjectsLocationsTranslateTextQueryParams = TranslateProjectsLocationsTranslateTextQueryParams;
var TranslateProjectsLocationsTranslateTextSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateTextSecurityOption1, _super);
    function TranslateProjectsLocationsTranslateTextSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsTranslateTextSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsTranslateTextSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsTranslateTextSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.TranslateProjectsLocationsTranslateTextSecurityOption1 = TranslateProjectsLocationsTranslateTextSecurityOption1;
var TranslateProjectsLocationsTranslateTextSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateTextSecurityOption2, _super);
    function TranslateProjectsLocationsTranslateTextSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsTranslateTextSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsTranslateTextSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsTranslateTextSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.TranslateProjectsLocationsTranslateTextSecurityOption2 = TranslateProjectsLocationsTranslateTextSecurityOption2;
var TranslateProjectsLocationsTranslateTextSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateTextSecurity, _super);
    function TranslateProjectsLocationsTranslateTextSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsTranslateTextSecurityOption1)
    ], TranslateProjectsLocationsTranslateTextSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsTranslateTextSecurityOption2)
    ], TranslateProjectsLocationsTranslateTextSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsTranslateTextSecurity;
}(utils_1.SpeakeasyBase));
exports.TranslateProjectsLocationsTranslateTextSecurity = TranslateProjectsLocationsTranslateTextSecurity;
var TranslateProjectsLocationsTranslateTextRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateTextRequest, _super);
    function TranslateProjectsLocationsTranslateTextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TranslateProjectsLocationsTranslateTextPathParams)
    ], TranslateProjectsLocationsTranslateTextRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TranslateProjectsLocationsTranslateTextQueryParams)
    ], TranslateProjectsLocationsTranslateTextRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TranslateTextRequest)
    ], TranslateProjectsLocationsTranslateTextRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TranslateProjectsLocationsTranslateTextSecurity)
    ], TranslateProjectsLocationsTranslateTextRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsTranslateTextRequest;
}(utils_1.SpeakeasyBase));
exports.TranslateProjectsLocationsTranslateTextRequest = TranslateProjectsLocationsTranslateTextRequest;
var TranslateProjectsLocationsTranslateTextResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateTextResponse, _super);
    function TranslateProjectsLocationsTranslateTextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateTextResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsTranslateTextResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TranslateTextResponse)
    ], TranslateProjectsLocationsTranslateTextResponse.prototype, "translateTextResponse", void 0);
    return TranslateProjectsLocationsTranslateTextResponse;
}(utils_1.SpeakeasyBase));
exports.TranslateProjectsLocationsTranslateTextResponse = TranslateProjectsLocationsTranslateTextResponse;
