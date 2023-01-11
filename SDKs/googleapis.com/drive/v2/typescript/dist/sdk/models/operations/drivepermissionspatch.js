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
exports.DrivePermissionsPatchResponse = exports.DrivePermissionsPatchRequest = exports.DrivePermissionsPatchSecurity = exports.DrivePermissionsPatchSecurityOption2 = exports.DrivePermissionsPatchSecurityOption1 = exports.DrivePermissionsPatchQueryParams = exports.DrivePermissionsPatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DrivePermissionsPatchPathParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsPatchPathParams, _super);
    function DrivePermissionsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePermissionsPatchPathParams.prototype, "fileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=permissionId" }),
        __metadata("design:type", String)
    ], DrivePermissionsPatchPathParams.prototype, "permissionId", void 0);
    return DrivePermissionsPatchPathParams;
}(utils_1.SpeakeasyBase));
exports.DrivePermissionsPatchPathParams = DrivePermissionsPatchPathParams;
var DrivePermissionsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsPatchQueryParams, _super);
    function DrivePermissionsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePermissionsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePermissionsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePermissionsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePermissionsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePermissionsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=removeExpiration" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsPatchQueryParams.prototype, "removeExpiration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsPatchQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsPatchQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=transferOwnership" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsPatchQueryParams.prototype, "transferOwnership", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsPatchQueryParams.prototype, "useDomainAdminAccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePermissionsPatchQueryParams.prototype, "userIp", void 0);
    return DrivePermissionsPatchQueryParams;
}(utils_1.SpeakeasyBase));
exports.DrivePermissionsPatchQueryParams = DrivePermissionsPatchQueryParams;
var DrivePermissionsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePermissionsPatchSecurityOption1, _super);
    function DrivePermissionsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePermissionsPatchSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DrivePermissionsPatchSecurityOption1 = DrivePermissionsPatchSecurityOption1;
var DrivePermissionsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePermissionsPatchSecurityOption2, _super);
    function DrivePermissionsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePermissionsPatchSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DrivePermissionsPatchSecurityOption2 = DrivePermissionsPatchSecurityOption2;
var DrivePermissionsPatchSecurity = /** @class */ (function (_super) {
    __extends(DrivePermissionsPatchSecurity, _super);
    function DrivePermissionsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsPatchSecurityOption1)
    ], DrivePermissionsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsPatchSecurityOption2)
    ], DrivePermissionsPatchSecurity.prototype, "option2", void 0);
    return DrivePermissionsPatchSecurity;
}(utils_1.SpeakeasyBase));
exports.DrivePermissionsPatchSecurity = DrivePermissionsPatchSecurity;
var DrivePermissionsPatchRequest = /** @class */ (function (_super) {
    __extends(DrivePermissionsPatchRequest, _super);
    function DrivePermissionsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DrivePermissionsPatchPathParams)
    ], DrivePermissionsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DrivePermissionsPatchQueryParams)
    ], DrivePermissionsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PermissionInput)
    ], DrivePermissionsPatchRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DrivePermissionsPatchSecurity)
    ], DrivePermissionsPatchRequest.prototype, "security", void 0);
    return DrivePermissionsPatchRequest;
}(utils_1.SpeakeasyBase));
exports.DrivePermissionsPatchRequest = DrivePermissionsPatchRequest;
var DrivePermissionsPatchResponse = /** @class */ (function (_super) {
    __extends(DrivePermissionsPatchResponse, _super);
    function DrivePermissionsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DrivePermissionsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Permission)
    ], DrivePermissionsPatchResponse.prototype, "permission", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DrivePermissionsPatchResponse.prototype, "statusCode", void 0);
    return DrivePermissionsPatchResponse;
}(utils_1.SpeakeasyBase));
exports.DrivePermissionsPatchResponse = DrivePermissionsPatchResponse;
