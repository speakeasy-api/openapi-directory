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
exports.DriveCommentsDeleteResponse = exports.DriveCommentsDeleteRequest = exports.DriveCommentsDeleteSecurity = exports.DriveCommentsDeleteSecurityOption2 = exports.DriveCommentsDeleteSecurityOption1 = exports.DriveCommentsDeleteQueryParams = exports.DriveCommentsDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveCommentsDeletePathParams = /** @class */ (function (_super) {
    __extends(DriveCommentsDeletePathParams, _super);
    function DriveCommentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], DriveCommentsDeletePathParams.prototype, "commentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveCommentsDeletePathParams.prototype, "fileId", void 0);
    return DriveCommentsDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsDeletePathParams = DriveCommentsDeletePathParams;
var DriveCommentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DriveCommentsDeleteQueryParams, _super);
    function DriveCommentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveCommentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveCommentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveCommentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveCommentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveCommentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveCommentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveCommentsDeleteQueryParams.prototype, "userIp", void 0);
    return DriveCommentsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsDeleteQueryParams = DriveCommentsDeleteQueryParams;
var DriveCommentsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveCommentsDeleteSecurityOption1, _super);
    function DriveCommentsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DriveCommentsDeleteSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsDeleteSecurityOption1 = DriveCommentsDeleteSecurityOption1;
var DriveCommentsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveCommentsDeleteSecurityOption2, _super);
    function DriveCommentsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DriveCommentsDeleteSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsDeleteSecurityOption2 = DriveCommentsDeleteSecurityOption2;
var DriveCommentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DriveCommentsDeleteSecurity, _super);
    function DriveCommentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsDeleteSecurityOption1)
    ], DriveCommentsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsDeleteSecurityOption2)
    ], DriveCommentsDeleteSecurity.prototype, "option2", void 0);
    return DriveCommentsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsDeleteSecurity = DriveCommentsDeleteSecurity;
var DriveCommentsDeleteRequest = /** @class */ (function (_super) {
    __extends(DriveCommentsDeleteRequest, _super);
    function DriveCommentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveCommentsDeletePathParams)
    ], DriveCommentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveCommentsDeleteQueryParams)
    ], DriveCommentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveCommentsDeleteSecurity)
    ], DriveCommentsDeleteRequest.prototype, "security", void 0);
    return DriveCommentsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsDeleteRequest = DriveCommentsDeleteRequest;
var DriveCommentsDeleteResponse = /** @class */ (function (_super) {
    __extends(DriveCommentsDeleteResponse, _super);
    function DriveCommentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveCommentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveCommentsDeleteResponse.prototype, "statusCode", void 0);
    return DriveCommentsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.DriveCommentsDeleteResponse = DriveCommentsDeleteResponse;
