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
exports.WebmastersSitemapsGetResponse = exports.WebmastersSitemapsGetRequest = exports.WebmastersSitemapsGetSecurity = exports.WebmastersSitemapsGetSecurityOption2 = exports.WebmastersSitemapsGetSecurityOption1 = exports.WebmastersSitemapsGetQueryParams = exports.WebmastersSitemapsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebmastersSitemapsGetPathParams = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsGetPathParams, _super);
    function WebmastersSitemapsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=feedpath" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsGetPathParams.prototype, "feedpath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=siteUrl" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsGetPathParams.prototype, "siteUrl", void 0);
    return WebmastersSitemapsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.WebmastersSitemapsGetPathParams = WebmastersSitemapsGetPathParams;
var WebmastersSitemapsGetQueryParams = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsGetQueryParams, _super);
    function WebmastersSitemapsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebmastersSitemapsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsGetQueryParams.prototype, "userIp", void 0);
    return WebmastersSitemapsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.WebmastersSitemapsGetQueryParams = WebmastersSitemapsGetQueryParams;
var WebmastersSitemapsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsGetSecurityOption1, _super);
    function WebmastersSitemapsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebmastersSitemapsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebmastersSitemapsGetSecurityOption1.prototype, "oauth2c", void 0);
    return WebmastersSitemapsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.WebmastersSitemapsGetSecurityOption1 = WebmastersSitemapsGetSecurityOption1;
var WebmastersSitemapsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsGetSecurityOption2, _super);
    function WebmastersSitemapsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebmastersSitemapsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebmastersSitemapsGetSecurityOption2.prototype, "oauth2c", void 0);
    return WebmastersSitemapsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.WebmastersSitemapsGetSecurityOption2 = WebmastersSitemapsGetSecurityOption2;
var WebmastersSitemapsGetSecurity = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsGetSecurity, _super);
    function WebmastersSitemapsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", WebmastersSitemapsGetSecurityOption1)
    ], WebmastersSitemapsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", WebmastersSitemapsGetSecurityOption2)
    ], WebmastersSitemapsGetSecurity.prototype, "option2", void 0);
    return WebmastersSitemapsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.WebmastersSitemapsGetSecurity = WebmastersSitemapsGetSecurity;
var WebmastersSitemapsGetRequest = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsGetRequest, _super);
    function WebmastersSitemapsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebmastersSitemapsGetPathParams)
    ], WebmastersSitemapsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebmastersSitemapsGetQueryParams)
    ], WebmastersSitemapsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebmastersSitemapsGetSecurity)
    ], WebmastersSitemapsGetRequest.prototype, "security", void 0);
    return WebmastersSitemapsGetRequest;
}(utils_1.SpeakeasyBase));
exports.WebmastersSitemapsGetRequest = WebmastersSitemapsGetRequest;
var WebmastersSitemapsGetResponse = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsGetResponse, _super);
    function WebmastersSitemapsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebmastersSitemapsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebmastersSitemapsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.WmxSitemap)
    ], WebmastersSitemapsGetResponse.prototype, "wmxSitemap", void 0);
    return WebmastersSitemapsGetResponse;
}(utils_1.SpeakeasyBase));
exports.WebmastersSitemapsGetResponse = WebmastersSitemapsGetResponse;
