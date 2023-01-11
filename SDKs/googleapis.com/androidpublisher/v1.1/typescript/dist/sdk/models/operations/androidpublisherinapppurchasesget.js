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
exports.AndroidpublisherInapppurchasesGetResponse = exports.AndroidpublisherInapppurchasesGetRequest = exports.AndroidpublisherInapppurchasesGetSecurity = exports.AndroidpublisherInapppurchasesGetQueryParams = exports.AndroidpublisherInapppurchasesGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AndroidpublisherInapppurchasesGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherInapppurchasesGetPathParams, _super);
    function AndroidpublisherInapppurchasesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetPathParams.prototype, "packageName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetPathParams.prototype, "productId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetPathParams.prototype, "token", void 0);
    return AndroidpublisherInapppurchasesGetPathParams;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherInapppurchasesGetPathParams = AndroidpublisherInapppurchasesGetPathParams;
var AndroidpublisherInapppurchasesGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherInapppurchasesGetQueryParams, _super);
    function AndroidpublisherInapppurchasesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherInapppurchasesGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherInapppurchasesGetQueryParams = AndroidpublisherInapppurchasesGetQueryParams;
var AndroidpublisherInapppurchasesGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherInapppurchasesGetSecurity, _super);
    function AndroidpublisherInapppurchasesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherInapppurchasesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherInapppurchasesGetSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherInapppurchasesGetSecurity;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherInapppurchasesGetSecurity = AndroidpublisherInapppurchasesGetSecurity;
var AndroidpublisherInapppurchasesGetRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherInapppurchasesGetRequest, _super);
    function AndroidpublisherInapppurchasesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AndroidpublisherInapppurchasesGetPathParams)
    ], AndroidpublisherInapppurchasesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AndroidpublisherInapppurchasesGetQueryParams)
    ], AndroidpublisherInapppurchasesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AndroidpublisherInapppurchasesGetSecurity)
    ], AndroidpublisherInapppurchasesGetRequest.prototype, "security", void 0);
    return AndroidpublisherInapppurchasesGetRequest;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherInapppurchasesGetRequest = AndroidpublisherInapppurchasesGetRequest;
var AndroidpublisherInapppurchasesGetResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherInapppurchasesGetResponse, _super);
    function AndroidpublisherInapppurchasesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AndroidpublisherInapppurchasesGetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AndroidpublisherInapppurchasesGetResponse.prototype, "statusCode", void 0);
    return AndroidpublisherInapppurchasesGetResponse;
}(utils_1.SpeakeasyBase));
exports.AndroidpublisherInapppurchasesGetResponse = AndroidpublisherInapppurchasesGetResponse;
