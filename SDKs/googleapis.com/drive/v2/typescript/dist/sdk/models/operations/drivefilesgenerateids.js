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
exports.DriveFilesGenerateIdsResponse = exports.DriveFilesGenerateIdsRequest = exports.DriveFilesGenerateIdsSecurity = exports.DriveFilesGenerateIdsSecurityOption3 = exports.DriveFilesGenerateIdsSecurityOption2 = exports.DriveFilesGenerateIdsSecurityOption1 = exports.DriveFilesGenerateIdsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveFilesGenerateIdsQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsQueryParams, _super);
    function DriveFilesGenerateIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DriveFilesGenerateIdsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesGenerateIdsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=space" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "space", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "userIp", void 0);
    return DriveFilesGenerateIdsQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveFilesGenerateIdsQueryParams = DriveFilesGenerateIdsQueryParams;
var DriveFilesGenerateIdsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsSecurityOption1, _super);
    function DriveFilesGenerateIdsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGenerateIdsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGenerateIdsSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesGenerateIdsSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveFilesGenerateIdsSecurityOption1 = DriveFilesGenerateIdsSecurityOption1;
var DriveFilesGenerateIdsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsSecurityOption2, _super);
    function DriveFilesGenerateIdsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGenerateIdsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGenerateIdsSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesGenerateIdsSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveFilesGenerateIdsSecurityOption2 = DriveFilesGenerateIdsSecurityOption2;
var DriveFilesGenerateIdsSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsSecurityOption3, _super);
    function DriveFilesGenerateIdsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGenerateIdsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGenerateIdsSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesGenerateIdsSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.DriveFilesGenerateIdsSecurityOption3 = DriveFilesGenerateIdsSecurityOption3;
var DriveFilesGenerateIdsSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsSecurity, _super);
    function DriveFilesGenerateIdsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGenerateIdsSecurityOption1)
    ], DriveFilesGenerateIdsSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGenerateIdsSecurityOption2)
    ], DriveFilesGenerateIdsSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGenerateIdsSecurityOption3)
    ], DriveFilesGenerateIdsSecurity.prototype, "option3", void 0);
    return DriveFilesGenerateIdsSecurity;
}(utils_1.SpeakeasyBase));
exports.DriveFilesGenerateIdsSecurity = DriveFilesGenerateIdsSecurity;
var DriveFilesGenerateIdsRequest = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsRequest, _super);
    function DriveFilesGenerateIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveFilesGenerateIdsQueryParams)
    ], DriveFilesGenerateIdsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveFilesGenerateIdsSecurity)
    ], DriveFilesGenerateIdsRequest.prototype, "security", void 0);
    return DriveFilesGenerateIdsRequest;
}(utils_1.SpeakeasyBase));
exports.DriveFilesGenerateIdsRequest = DriveFilesGenerateIdsRequest;
var DriveFilesGenerateIdsResponse = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsResponse, _super);
    function DriveFilesGenerateIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GeneratedIds)
    ], DriveFilesGenerateIdsResponse.prototype, "generatedIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveFilesGenerateIdsResponse.prototype, "statusCode", void 0);
    return DriveFilesGenerateIdsResponse;
}(utils_1.SpeakeasyBase));
exports.DriveFilesGenerateIdsResponse = DriveFilesGenerateIdsResponse;
