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
exports.RecaptchaenterpriseProjectsKeysCreateResponse = exports.RecaptchaenterpriseProjectsKeysCreateRequest = exports.RecaptchaenterpriseProjectsKeysCreateSecurity = exports.RecaptchaenterpriseProjectsKeysCreateQueryParams = exports.RecaptchaenterpriseProjectsKeysCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RecaptchaenterpriseProjectsKeysCreatePathParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysCreatePathParams, _super);
    function RecaptchaenterpriseProjectsKeysCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreatePathParams.prototype, "parent", void 0);
    return RecaptchaenterpriseProjectsKeysCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.RecaptchaenterpriseProjectsKeysCreatePathParams = RecaptchaenterpriseProjectsKeysCreatePathParams;
var RecaptchaenterpriseProjectsKeysCreateQueryParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysCreateQueryParams, _super);
    function RecaptchaenterpriseProjectsKeysCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecaptchaenterpriseProjectsKeysCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RecaptchaenterpriseProjectsKeysCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.RecaptchaenterpriseProjectsKeysCreateQueryParams = RecaptchaenterpriseProjectsKeysCreateQueryParams;
var RecaptchaenterpriseProjectsKeysCreateSecurity = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysCreateSecurity, _super);
    function RecaptchaenterpriseProjectsKeysCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecaptchaenterpriseProjectsKeysCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecaptchaenterpriseProjectsKeysCreateSecurity.prototype, "oauth2c", void 0);
    return RecaptchaenterpriseProjectsKeysCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.RecaptchaenterpriseProjectsKeysCreateSecurity = RecaptchaenterpriseProjectsKeysCreateSecurity;
var RecaptchaenterpriseProjectsKeysCreateRequest = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysCreateRequest, _super);
    function RecaptchaenterpriseProjectsKeysCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysCreatePathParams)
    ], RecaptchaenterpriseProjectsKeysCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysCreateQueryParams)
    ], RecaptchaenterpriseProjectsKeysCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecaptchaenterpriseV1Key)
    ], RecaptchaenterpriseProjectsKeysCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysCreateSecurity)
    ], RecaptchaenterpriseProjectsKeysCreateRequest.prototype, "security", void 0);
    return RecaptchaenterpriseProjectsKeysCreateRequest;
}(utils_1.SpeakeasyBase));
exports.RecaptchaenterpriseProjectsKeysCreateRequest = RecaptchaenterpriseProjectsKeysCreateRequest;
var RecaptchaenterpriseProjectsKeysCreateResponse = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysCreateResponse, _super);
    function RecaptchaenterpriseProjectsKeysCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GoogleCloudRecaptchaenterpriseV1Key)
    ], RecaptchaenterpriseProjectsKeysCreateResponse.prototype, "googleCloudRecaptchaenterpriseV1Key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RecaptchaenterpriseProjectsKeysCreateResponse.prototype, "statusCode", void 0);
    return RecaptchaenterpriseProjectsKeysCreateResponse;
}(utils_1.SpeakeasyBase));
exports.RecaptchaenterpriseProjectsKeysCreateResponse = RecaptchaenterpriseProjectsKeysCreateResponse;
