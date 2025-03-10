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
exports.UpdateByocTrunkResponse = exports.UpdateByocTrunkRequest = exports.UpdateByocTrunkSecurity = exports.UpdateByocTrunkUpdateByocTrunkRequest = exports.UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum = exports.UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum = exports.UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum = exports.UpdateByocTrunkPathParams = exports.UpdateByocTrunkServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateByocTrunkServerList = [
    "https://voice.twilio.com",
];
var UpdateByocTrunkPathParams = /** @class */ (function (_super) {
    __extends(UpdateByocTrunkPathParams, _super);
    function UpdateByocTrunkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateByocTrunkPathParams.prototype, "sid", void 0);
    return UpdateByocTrunkPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateByocTrunkPathParams = UpdateByocTrunkPathParams;
var UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum;
(function (UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum) {
    UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum["Get"] = "GET";
    UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum["Post"] = "POST";
    UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum = exports.UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum || (exports.UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum = {}));
var UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum;
(function (UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum) {
    UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum["Get"] = "GET";
    UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum["Post"] = "POST";
    UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum = exports.UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum || (exports.UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum = {}));
var UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum;
(function (UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum) {
    UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum["Head"] = "HEAD";
    UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum["Get"] = "GET";
    UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum["Post"] = "POST";
    UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum["Patch"] = "PATCH";
    UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum["Put"] = "PUT";
    UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum["Delete"] = "DELETE";
})(UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum = exports.UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum || (exports.UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum = {}));
var UpdateByocTrunkUpdateByocTrunkRequest = /** @class */ (function (_super) {
    __extends(UpdateByocTrunkUpdateByocTrunkRequest, _super);
    function UpdateByocTrunkUpdateByocTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CnamLookupEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateByocTrunkUpdateByocTrunkRequest.prototype, "cnamLookupEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ConnectionPolicySid;" }),
        __metadata("design:type", String)
    ], UpdateByocTrunkUpdateByocTrunkRequest.prototype, "connectionPolicySid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateByocTrunkUpdateByocTrunkRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FromDomainSid;" }),
        __metadata("design:type", String)
    ], UpdateByocTrunkUpdateByocTrunkRequest.prototype, "fromDomainSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateByocTrunkUpdateByocTrunkRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateByocTrunkUpdateByocTrunkRequest.prototype, "statusCallbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateByocTrunkUpdateByocTrunkRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateByocTrunkUpdateByocTrunkRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], UpdateByocTrunkUpdateByocTrunkRequest.prototype, "voiceMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], UpdateByocTrunkUpdateByocTrunkRequest.prototype, "voiceUrl", void 0);
    return UpdateByocTrunkUpdateByocTrunkRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateByocTrunkUpdateByocTrunkRequest = UpdateByocTrunkUpdateByocTrunkRequest;
var UpdateByocTrunkSecurity = /** @class */ (function (_super) {
    __extends(UpdateByocTrunkSecurity, _super);
    function UpdateByocTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateByocTrunkSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateByocTrunkSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateByocTrunkSecurity = UpdateByocTrunkSecurity;
var UpdateByocTrunkRequest = /** @class */ (function (_super) {
    __extends(UpdateByocTrunkRequest, _super);
    function UpdateByocTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateByocTrunkRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateByocTrunkPathParams)
    ], UpdateByocTrunkRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateByocTrunkUpdateByocTrunkRequest)
    ], UpdateByocTrunkRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateByocTrunkSecurity)
    ], UpdateByocTrunkRequest.prototype, "security", void 0);
    return UpdateByocTrunkRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateByocTrunkRequest = UpdateByocTrunkRequest;
var UpdateByocTrunkResponse = /** @class */ (function (_super) {
    __extends(UpdateByocTrunkResponse, _super);
    function UpdateByocTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateByocTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateByocTrunkResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VoiceV1ByocTrunk)
    ], UpdateByocTrunkResponse.prototype, "voiceV1ByocTrunk", void 0);
    return UpdateByocTrunkResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateByocTrunkResponse = UpdateByocTrunkResponse;
