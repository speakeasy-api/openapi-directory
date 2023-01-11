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
exports.DriveactivityActivityQueryResponse = exports.DriveactivityActivityQueryRequest = exports.DriveactivityActivityQuerySecurity = exports.DriveactivityActivityQuerySecurityOption2 = exports.DriveactivityActivityQuerySecurityOption1 = exports.DriveactivityActivityQueryQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DriveactivityActivityQueryQueryParams = /** @class */ (function (_super) {
    __extends(DriveactivityActivityQueryQueryParams, _super);
    function DriveactivityActivityQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DriveactivityActivityQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DriveactivityActivityQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveactivityActivityQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DriveactivityActivityQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveactivityActivityQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveactivityActivityQueryQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveactivityActivityQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveactivityActivityQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveactivityActivityQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DriveactivityActivityQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DriveactivityActivityQueryQueryParams.prototype, "uploadProtocol", void 0);
    return DriveactivityActivityQueryQueryParams;
}(utils_1.SpeakeasyBase));
exports.DriveactivityActivityQueryQueryParams = DriveactivityActivityQueryQueryParams;
var DriveactivityActivityQuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveactivityActivityQuerySecurityOption1, _super);
    function DriveactivityActivityQuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveactivityActivityQuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveactivityActivityQuerySecurityOption1.prototype, "oauth2c", void 0);
    return DriveactivityActivityQuerySecurityOption1;
}(utils_1.SpeakeasyBase));
exports.DriveactivityActivityQuerySecurityOption1 = DriveactivityActivityQuerySecurityOption1;
var DriveactivityActivityQuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveactivityActivityQuerySecurityOption2, _super);
    function DriveactivityActivityQuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveactivityActivityQuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveactivityActivityQuerySecurityOption2.prototype, "oauth2c", void 0);
    return DriveactivityActivityQuerySecurityOption2;
}(utils_1.SpeakeasyBase));
exports.DriveactivityActivityQuerySecurityOption2 = DriveactivityActivityQuerySecurityOption2;
var DriveactivityActivityQuerySecurity = /** @class */ (function (_super) {
    __extends(DriveactivityActivityQuerySecurity, _super);
    function DriveactivityActivityQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveactivityActivityQuerySecurityOption1)
    ], DriveactivityActivityQuerySecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", DriveactivityActivityQuerySecurityOption2)
    ], DriveactivityActivityQuerySecurity.prototype, "option2", void 0);
    return DriveactivityActivityQuerySecurity;
}(utils_1.SpeakeasyBase));
exports.DriveactivityActivityQuerySecurity = DriveactivityActivityQuerySecurity;
var DriveactivityActivityQueryRequest = /** @class */ (function (_super) {
    __extends(DriveactivityActivityQueryRequest, _super);
    function DriveactivityActivityQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveactivityActivityQueryQueryParams)
    ], DriveactivityActivityQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QueryDriveActivityRequest)
    ], DriveactivityActivityQueryRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DriveactivityActivityQuerySecurity)
    ], DriveactivityActivityQueryRequest.prototype, "security", void 0);
    return DriveactivityActivityQueryRequest;
}(utils_1.SpeakeasyBase));
exports.DriveactivityActivityQueryRequest = DriveactivityActivityQueryRequest;
var DriveactivityActivityQueryResponse = /** @class */ (function (_super) {
    __extends(DriveactivityActivityQueryResponse, _super);
    function DriveactivityActivityQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DriveactivityActivityQueryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.QueryDriveActivityResponse)
    ], DriveactivityActivityQueryResponse.prototype, "queryDriveActivityResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DriveactivityActivityQueryResponse.prototype, "statusCode", void 0);
    return DriveactivityActivityQueryResponse;
}(utils_1.SpeakeasyBase));
exports.DriveactivityActivityQueryResponse = DriveactivityActivityQueryResponse;
