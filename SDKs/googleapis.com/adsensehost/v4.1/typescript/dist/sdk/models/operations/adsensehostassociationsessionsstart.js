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
exports.AdsensehostAssociationsessionsStartResponse = exports.AdsensehostAssociationsessionsStartRequest = exports.AdsensehostAssociationsessionsStartSecurity = exports.AdsensehostAssociationsessionsStartQueryParams = exports.AdsensehostAssociationsessionsStartProductCodeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AdsensehostAssociationsessionsStartProductCodeEnum;
(function (AdsensehostAssociationsessionsStartProductCodeEnum) {
    AdsensehostAssociationsessionsStartProductCodeEnum["Afc"] = "AFC";
    AdsensehostAssociationsessionsStartProductCodeEnum["Afg"] = "AFG";
    AdsensehostAssociationsessionsStartProductCodeEnum["Afmc"] = "AFMC";
    AdsensehostAssociationsessionsStartProductCodeEnum["Afs"] = "AFS";
    AdsensehostAssociationsessionsStartProductCodeEnum["Afv"] = "AFV";
})(AdsensehostAssociationsessionsStartProductCodeEnum = exports.AdsensehostAssociationsessionsStartProductCodeEnum || (exports.AdsensehostAssociationsessionsStartProductCodeEnum = {}));
var AdsensehostAssociationsessionsStartQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostAssociationsessionsStartQueryParams, _super);
    function AdsensehostAssociationsessionsStartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callbackUrl" }),
        __metadata("design:type", String)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "callbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=productCode" }),
        __metadata("design:type", Array)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "productCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "userIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userLocale" }),
        __metadata("design:type", String)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "userLocale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=websiteLocale" }),
        __metadata("design:type", String)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "websiteLocale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=websiteUrl" }),
        __metadata("design:type", String)
    ], AdsensehostAssociationsessionsStartQueryParams.prototype, "websiteUrl", void 0);
    return AdsensehostAssociationsessionsStartQueryParams;
}(utils_1.SpeakeasyBase));
exports.AdsensehostAssociationsessionsStartQueryParams = AdsensehostAssociationsessionsStartQueryParams;
var AdsensehostAssociationsessionsStartSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostAssociationsessionsStartSecurity, _super);
    function AdsensehostAssociationsessionsStartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostAssociationsessionsStartSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostAssociationsessionsStartSecurity.prototype, "oauth2c", void 0);
    return AdsensehostAssociationsessionsStartSecurity;
}(utils_1.SpeakeasyBase));
exports.AdsensehostAssociationsessionsStartSecurity = AdsensehostAssociationsessionsStartSecurity;
var AdsensehostAssociationsessionsStartRequest = /** @class */ (function (_super) {
    __extends(AdsensehostAssociationsessionsStartRequest, _super);
    function AdsensehostAssociationsessionsStartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdsensehostAssociationsessionsStartQueryParams)
    ], AdsensehostAssociationsessionsStartRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdsensehostAssociationsessionsStartSecurity)
    ], AdsensehostAssociationsessionsStartRequest.prototype, "security", void 0);
    return AdsensehostAssociationsessionsStartRequest;
}(utils_1.SpeakeasyBase));
exports.AdsensehostAssociationsessionsStartRequest = AdsensehostAssociationsessionsStartRequest;
var AdsensehostAssociationsessionsStartResponse = /** @class */ (function (_super) {
    __extends(AdsensehostAssociationsessionsStartResponse, _super);
    function AdsensehostAssociationsessionsStartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AssociationSession)
    ], AdsensehostAssociationsessionsStartResponse.prototype, "associationSession", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AdsensehostAssociationsessionsStartResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AdsensehostAssociationsessionsStartResponse.prototype, "statusCode", void 0);
    return AdsensehostAssociationsessionsStartResponse;
}(utils_1.SpeakeasyBase));
exports.AdsensehostAssociationsessionsStartResponse = AdsensehostAssociationsessionsStartResponse;
