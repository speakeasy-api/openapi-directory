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
exports.CreateSipAuthCallsCredentialListMappingResponse = exports.CreateSipAuthCallsCredentialListMappingRequest = exports.CreateSipAuthCallsCredentialListMappingSecurity = exports.CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest = exports.CreateSipAuthCallsCredentialListMappingPathParams = exports.CreateSipAuthCallsCredentialListMappingServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateSipAuthCallsCredentialListMappingServerList = [
    "https://api.twilio.com",
];
var CreateSipAuthCallsCredentialListMappingPathParams = /** @class */ (function (_super) {
    __extends(CreateSipAuthCallsCredentialListMappingPathParams, _super);
    function CreateSipAuthCallsCredentialListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateSipAuthCallsCredentialListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], CreateSipAuthCallsCredentialListMappingPathParams.prototype, "domainSid", void 0);
    return CreateSipAuthCallsCredentialListMappingPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateSipAuthCallsCredentialListMappingPathParams = CreateSipAuthCallsCredentialListMappingPathParams;
var CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest = /** @class */ (function (_super) {
    __extends(CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest, _super);
    function CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CredentialListSid;" }),
        __metadata("design:type", String)
    ], CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest.prototype, "credentialListSid", void 0);
    return CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest = CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest;
var CreateSipAuthCallsCredentialListMappingSecurity = /** @class */ (function (_super) {
    __extends(CreateSipAuthCallsCredentialListMappingSecurity, _super);
    function CreateSipAuthCallsCredentialListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSipAuthCallsCredentialListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSipAuthCallsCredentialListMappingSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateSipAuthCallsCredentialListMappingSecurity = CreateSipAuthCallsCredentialListMappingSecurity;
var CreateSipAuthCallsCredentialListMappingRequest = /** @class */ (function (_super) {
    __extends(CreateSipAuthCallsCredentialListMappingRequest, _super);
    function CreateSipAuthCallsCredentialListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSipAuthCallsCredentialListMappingRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSipAuthCallsCredentialListMappingPathParams)
    ], CreateSipAuthCallsCredentialListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest)
    ], CreateSipAuthCallsCredentialListMappingRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSipAuthCallsCredentialListMappingSecurity)
    ], CreateSipAuthCallsCredentialListMappingRequest.prototype, "security", void 0);
    return CreateSipAuthCallsCredentialListMappingRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSipAuthCallsCredentialListMappingRequest = CreateSipAuthCallsCredentialListMappingRequest;
var CreateSipAuthCallsCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(CreateSipAuthCallsCredentialListMappingResponse, _super);
    function CreateSipAuthCallsCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSipAuthCallsCredentialListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateSipAuthCallsCredentialListMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping)
    ], CreateSipAuthCallsCredentialListMappingResponse.prototype, "apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping", void 0);
    return CreateSipAuthCallsCredentialListMappingResponse;
}(utils_1.SpeakeasyBase));
exports.CreateSipAuthCallsCredentialListMappingResponse = CreateSipAuthCallsCredentialListMappingResponse;
