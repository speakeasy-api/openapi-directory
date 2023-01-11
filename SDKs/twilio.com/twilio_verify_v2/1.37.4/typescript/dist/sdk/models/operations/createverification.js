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
exports.CreateVerificationResponse = exports.CreateVerificationRequest = exports.CreateVerificationSecurity = exports.CreateVerificationCreateVerificationRequest = exports.CreateVerificationPathParams = exports.CreateVerificationServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateVerificationServerList = [
    "https://verify.twilio.com",
];
var CreateVerificationPathParams = /** @class */ (function (_super) {
    __extends(CreateVerificationPathParams, _super);
    function CreateVerificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateVerificationPathParams.prototype, "serviceSid", void 0);
    return CreateVerificationPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateVerificationPathParams = CreateVerificationPathParams;
var CreateVerificationCreateVerificationRequest = /** @class */ (function (_super) {
    __extends(CreateVerificationCreateVerificationRequest, _super);
    function CreateVerificationCreateVerificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Amount;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=AppHash;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "appHash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Channel;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ChannelConfiguration;" }),
        __metadata("design:type", Object)
    ], CreateVerificationCreateVerificationRequest.prototype, "channelConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CustomCode;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "customCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CustomFriendlyName;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "customFriendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CustomMessage;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "customMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Locale;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Payee;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "payee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=RateLimits;" }),
        __metadata("design:type", Object)
    ], CreateVerificationCreateVerificationRequest.prototype, "rateLimits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SendDigits;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "sendDigits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=TemplateCustomSubstitutions;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "templateCustomSubstitutions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=TemplateSid;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "templateSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=To;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "to", void 0);
    return CreateVerificationCreateVerificationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateVerificationCreateVerificationRequest = CreateVerificationCreateVerificationRequest;
var CreateVerificationSecurity = /** @class */ (function (_super) {
    __extends(CreateVerificationSecurity, _super);
    function CreateVerificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateVerificationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateVerificationSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateVerificationSecurity = CreateVerificationSecurity;
var CreateVerificationRequest = /** @class */ (function (_super) {
    __extends(CreateVerificationRequest, _super);
    function CreateVerificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateVerificationRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVerificationPathParams)
    ], CreateVerificationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateVerificationCreateVerificationRequest)
    ], CreateVerificationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVerificationSecurity)
    ], CreateVerificationRequest.prototype, "security", void 0);
    return CreateVerificationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateVerificationRequest = CreateVerificationRequest;
var CreateVerificationResponse = /** @class */ (function (_super) {
    __extends(CreateVerificationResponse, _super);
    function CreateVerificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateVerificationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateVerificationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VerifyV2ServiceVerification)
    ], CreateVerificationResponse.prototype, "verifyV2ServiceVerification", void 0);
    return CreateVerificationResponse;
}(utils_1.SpeakeasyBase));
exports.CreateVerificationResponse = CreateVerificationResponse;
