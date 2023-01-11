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
exports.DriveCommentsCreateResponse = exports.DriveCommentsCreateRequest = exports.DriveCommentsCreateSecurity = exports.DriveCommentsCreateSecurityOption2 = exports.DriveCommentsCreateSecurityOption1 = exports.DriveCommentsCreateQueryParams = exports.DriveCommentsCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveCommentsCreatePathParams = /** @class */ (function (_super) {
    __extends(DriveCommentsCreatePathParams, _super);
    function DriveCommentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveCommentsCreatePathParams.prototype, "fileId", void 0);
    return DriveCommentsCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsCreatePathParams = DriveCommentsCreatePathParams;
var DriveCommentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateQueryParams, _super);
    function DriveCommentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveCommentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "userIp", void 0);
    return DriveCommentsCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsCreateQueryParams = DriveCommentsCreateQueryParams;
var DriveCommentsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateSecurityOption1, _super);
    function DriveCommentsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DriveCommentsCreateSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsCreateSecurityOption1 = DriveCommentsCreateSecurityOption1;
var DriveCommentsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateSecurityOption2, _super);
    function DriveCommentsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DriveCommentsCreateSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsCreateSecurityOption2 = DriveCommentsCreateSecurityOption2;
var DriveCommentsCreateSecurity = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateSecurity, _super);
    function DriveCommentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsCreateSecurityOption1)
    ], DriveCommentsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsCreateSecurityOption2)
    ], DriveCommentsCreateSecurity.prototype, "option2", void 0);
    return DriveCommentsCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsCreateSecurity = DriveCommentsCreateSecurity;
var DriveCommentsCreateRequest = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateRequest, _super);
    function DriveCommentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveCommentsCreatePathParams)
    ], DriveCommentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveCommentsCreateQueryParams)
    ], DriveCommentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Comment)
    ], DriveCommentsCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveCommentsCreateSecurity)
    ], DriveCommentsCreateRequest.prototype, "security", void 0);
    return DriveCommentsCreateRequest;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsCreateRequest = DriveCommentsCreateRequest;
var DriveCommentsCreateResponse = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateResponse, _super);
    function DriveCommentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Comment)
    ], DriveCommentsCreateResponse.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveCommentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveCommentsCreateResponse.prototype, "statusCode", void 0);
    return DriveCommentsCreateResponse;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsCreateResponse = DriveCommentsCreateResponse;
