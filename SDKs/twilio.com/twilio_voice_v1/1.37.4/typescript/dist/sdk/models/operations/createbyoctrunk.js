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
exports.CreateByocTrunkResponse = exports.CreateByocTrunkRequest = exports.CreateByocTrunkSecurity = exports.CreateByocTrunkCreateByocTrunkRequest = exports.CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum = exports.CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum = exports.CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum = exports.CreateByocTrunkServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateByocTrunkServerList = [
    "https://voice.twilio.com",
];
var CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum;
(function (CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum) {
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum = exports.CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum || (exports.CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum = {}));
var CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum;
(function (CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum) {
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Get"] = "GET";
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Post"] = "POST";
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum = exports.CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum || (exports.CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum = {}));
var CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum;
(function (CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum) {
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Head"] = "HEAD";
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Get"] = "GET";
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Post"] = "POST";
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Patch"] = "PATCH";
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Put"] = "PUT";
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum["Delete"] = "DELETE";
})(CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum = exports.CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum || (exports.CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum = {}));
var CreateByocTrunkCreateByocTrunkRequest = /** @class */ (function (_super) {
    __extends(CreateByocTrunkCreateByocTrunkRequest, _super);
    function CreateByocTrunkCreateByocTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CnamLookupEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "cnamLookupEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ConnectionPolicySid;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "connectionPolicySid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FromDomainSid;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "fromDomainSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=StatusCallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "statusCallbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "voiceMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], CreateByocTrunkCreateByocTrunkRequest.prototype, "voiceUrl", void 0);
    return CreateByocTrunkCreateByocTrunkRequest;
}(utils_1.SpeakeasyBase));
exports.CreateByocTrunkCreateByocTrunkRequest = CreateByocTrunkCreateByocTrunkRequest;
var CreateByocTrunkSecurity = /** @class */ (function (_super) {
    __extends(CreateByocTrunkSecurity, _super);
    function CreateByocTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateByocTrunkSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateByocTrunkSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateByocTrunkSecurity = CreateByocTrunkSecurity;
var CreateByocTrunkRequest = /** @class */ (function (_super) {
    __extends(CreateByocTrunkRequest, _super);
    function CreateByocTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateByocTrunkRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateByocTrunkCreateByocTrunkRequest)
    ], CreateByocTrunkRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateByocTrunkSecurity)
    ], CreateByocTrunkRequest.prototype, "security", void 0);
    return CreateByocTrunkRequest;
}(utils_1.SpeakeasyBase));
exports.CreateByocTrunkRequest = CreateByocTrunkRequest;
var CreateByocTrunkResponse = /** @class */ (function (_super) {
    __extends(CreateByocTrunkResponse, _super);
    function CreateByocTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateByocTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateByocTrunkResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VoiceV1ByocTrunk)
    ], CreateByocTrunkResponse.prototype, "voiceV1ByocTrunk", void 0);
    return CreateByocTrunkResponse;
}(utils_1.SpeakeasyBase));
exports.CreateByocTrunkResponse = CreateByocTrunkResponse;
