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
exports.StorageProjectsHmacKeysUpdateResponse = exports.StorageProjectsHmacKeysUpdateRequest = exports.StorageProjectsHmacKeysUpdateSecurity = exports.StorageProjectsHmacKeysUpdateSecurityOption2 = exports.StorageProjectsHmacKeysUpdateSecurityOption1 = exports.StorageProjectsHmacKeysUpdateQueryParams = exports.StorageProjectsHmacKeysUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StorageProjectsHmacKeysUpdatePathParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdatePathParams, _super);
    function StorageProjectsHmacKeysUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accessId" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdatePathParams.prototype, "accessId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdatePathParams.prototype, "projectId", void 0);
    return StorageProjectsHmacKeysUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.StorageProjectsHmacKeysUpdatePathParams = StorageProjectsHmacKeysUpdatePathParams;
var StorageProjectsHmacKeysUpdateQueryParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateQueryParams, _super);
    function StorageProjectsHmacKeysUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateQueryParams.prototype, "userProject", void 0);
    return StorageProjectsHmacKeysUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.StorageProjectsHmacKeysUpdateQueryParams = StorageProjectsHmacKeysUpdateQueryParams;
var StorageProjectsHmacKeysUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateSecurityOption1, _super);
    function StorageProjectsHmacKeysUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysUpdateSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.StorageProjectsHmacKeysUpdateSecurityOption1 = StorageProjectsHmacKeysUpdateSecurityOption1;
var StorageProjectsHmacKeysUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateSecurityOption2, _super);
    function StorageProjectsHmacKeysUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysUpdateSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.StorageProjectsHmacKeysUpdateSecurityOption2 = StorageProjectsHmacKeysUpdateSecurityOption2;
var StorageProjectsHmacKeysUpdateSecurity = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateSecurity, _super);
    function StorageProjectsHmacKeysUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysUpdateSecurityOption1)
    ], StorageProjectsHmacKeysUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysUpdateSecurityOption2)
    ], StorageProjectsHmacKeysUpdateSecurity.prototype, "option2", void 0);
    return StorageProjectsHmacKeysUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.StorageProjectsHmacKeysUpdateSecurity = StorageProjectsHmacKeysUpdateSecurity;
var StorageProjectsHmacKeysUpdateRequest = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateRequest, _super);
    function StorageProjectsHmacKeysUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageProjectsHmacKeysUpdatePathParams)
    ], StorageProjectsHmacKeysUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageProjectsHmacKeysUpdateQueryParams)
    ], StorageProjectsHmacKeysUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HmacKeyMetadata)
    ], StorageProjectsHmacKeysUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StorageProjectsHmacKeysUpdateSecurity)
    ], StorageProjectsHmacKeysUpdateRequest.prototype, "security", void 0);
    return StorageProjectsHmacKeysUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.StorageProjectsHmacKeysUpdateRequest = StorageProjectsHmacKeysUpdateRequest;
var StorageProjectsHmacKeysUpdateResponse = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysUpdateResponse, _super);
    function StorageProjectsHmacKeysUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.HmacKeyMetadata)
    ], StorageProjectsHmacKeysUpdateResponse.prototype, "hmacKeyMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StorageProjectsHmacKeysUpdateResponse.prototype, "statusCode", void 0);
    return StorageProjectsHmacKeysUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.StorageProjectsHmacKeysUpdateResponse = StorageProjectsHmacKeysUpdateResponse;
