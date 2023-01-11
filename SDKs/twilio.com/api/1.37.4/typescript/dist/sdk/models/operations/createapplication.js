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
exports.CreateApplicationResponse = exports.CreateApplicationRequest = exports.CreateApplicationSecurity = exports.CreateApplicationCreateApplicationRequest = exports.CreateApplicationCreateApplicationRequestVoiceMethodEnum = exports.CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum = exports.CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum = exports.CreateApplicationCreateApplicationRequestSmsMethodEnum = exports.CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum = exports.CreateApplicationPathParams = exports.CreateApplicationServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateApplicationServerList = [
    "https://api.twilio.com",
];
var CreateApplicationPathParams = /** @class */ (function (_super) {
    __extends(CreateApplicationPathParams, _super);
    function CreateApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateApplicationPathParams.prototype, "accountSid", void 0);
    return CreateApplicationPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateApplicationPathParams = CreateApplicationPathParams;
var CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum;
(function (CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum) {
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Get"] = "GET";
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Post"] = "POST";
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Put"] = "PUT";
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum = exports.CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum || (exports.CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum = {}));
var CreateApplicationCreateApplicationRequestSmsMethodEnum;
(function (CreateApplicationCreateApplicationRequestSmsMethodEnum) {
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Head"] = "HEAD";
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Get"] = "GET";
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Post"] = "POST";
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Patch"] = "PATCH";
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Put"] = "PUT";
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Delete"] = "DELETE";
})(CreateApplicationCreateApplicationRequestSmsMethodEnum = exports.CreateApplicationCreateApplicationRequestSmsMethodEnum || (exports.CreateApplicationCreateApplicationRequestSmsMethodEnum = {}));
var CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum;
(function (CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum) {
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum = exports.CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum || (exports.CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum = {}));
var CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum;
(function (CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum) {
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Get"] = "GET";
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Post"] = "POST";
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum = exports.CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum || (exports.CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum = {}));
var CreateApplicationCreateApplicationRequestVoiceMethodEnum;
(function (CreateApplicationCreateApplicationRequestVoiceMethodEnum) {
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Head"] = "HEAD";
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Get"] = "GET";
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Post"] = "POST";
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Patch"] = "PATCH";
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Put"] = "PUT";
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Delete"] = "DELETE";
})(CreateApplicationCreateApplicationRequestVoiceMethodEnum = exports.CreateApplicationCreateApplicationRequestVoiceMethodEnum || (exports.CreateApplicationCreateApplicationRequestVoiceMethodEnum = {}));
var CreateApplicationCreateApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateApplicationCreateApplicationRequest, _super);
    function CreateApplicationCreateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ApiVersion;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessageStatusCallback;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "messageStatusCallback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "smsMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SmsStatusCallback;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "smsStatusCallback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "smsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "statusCallback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceCallerIdLookup;" }),
        __metadata("design:type", Boolean)
    ], CreateApplicationCreateApplicationRequest.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "voiceMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "voiceUrl", void 0);
    return CreateApplicationCreateApplicationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateApplicationCreateApplicationRequest = CreateApplicationCreateApplicationRequest;
var CreateApplicationSecurity = /** @class */ (function (_super) {
    __extends(CreateApplicationSecurity, _super);
    function CreateApplicationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateApplicationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateApplicationSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateApplicationSecurity = CreateApplicationSecurity;
var CreateApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateApplicationRequest, _super);
    function CreateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateApplicationRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateApplicationPathParams)
    ], CreateApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateApplicationCreateApplicationRequest)
    ], CreateApplicationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateApplicationSecurity)
    ], CreateApplicationRequest.prototype, "security", void 0);
    return CreateApplicationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateApplicationRequest = CreateApplicationRequest;
var CreateApplicationResponse = /** @class */ (function (_super) {
    __extends(CreateApplicationResponse, _super);
    function CreateApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiV2010AccountApplication)
    ], CreateApplicationResponse.prototype, "apiV2010AccountApplication", void 0);
    return CreateApplicationResponse;
}(utils_1.SpeakeasyBase));
exports.CreateApplicationResponse = CreateApplicationResponse;
