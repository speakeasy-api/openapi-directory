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
exports.SmsVerifyResponse = exports.SmsVerifyRequest = exports.SmsVerifyRequestBody = exports.SmsVerifyRequestBodyOutputCaseEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SmsVerifyRequestBodyOutputCaseEnum;
(function (SmsVerifyRequestBodyOutputCaseEnum) {
    SmsVerifyRequestBodyOutputCaseEnum["Camel"] = "camel";
})(SmsVerifyRequestBodyOutputCaseEnum = exports.SmsVerifyRequestBodyOutputCaseEnum || (exports.SmsVerifyRequestBodyOutputCaseEnum = {}));
var SmsVerifyRequestBody = /** @class */ (function (_super) {
    __extends(SmsVerifyRequestBody, _super);
    function SmsVerifyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=code-length;" }),
        __metadata("design:type", Number)
    ], SmsVerifyRequestBody.prototype, "codeLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=country-code;" }),
        __metadata("design:type", String)
    ], SmsVerifyRequestBody.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=language-code;" }),
        __metadata("design:type", String)
    ], SmsVerifyRequestBody.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=limit;" }),
        __metadata("design:type", Number)
    ], SmsVerifyRequestBody.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=limit-ttl;" }),
        __metadata("design:type", Number)
    ], SmsVerifyRequestBody.prototype, "limitTtl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], SmsVerifyRequestBody.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=output-case;" }),
        __metadata("design:type", String)
    ], SmsVerifyRequestBody.prototype, "outputCase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=security-code;" }),
        __metadata("design:type", Number)
    ], SmsVerifyRequestBody.prototype, "securityCode", void 0);
    return SmsVerifyRequestBody;
}(utils_1.SpeakeasyBase));
exports.SmsVerifyRequestBody = SmsVerifyRequestBody;
var SmsVerifyRequest = /** @class */ (function (_super) {
    __extends(SmsVerifyRequest, _super);
    function SmsVerifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", SmsVerifyRequestBody)
    ], SmsVerifyRequest.prototype, "request", void 0);
    return SmsVerifyRequest;
}(utils_1.SpeakeasyBase));
exports.SmsVerifyRequest = SmsVerifyRequest;
var SmsVerifyResponse = /** @class */ (function (_super) {
    __extends(SmsVerifyResponse, _super);
    function SmsVerifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiError)
    ], SmsVerifyResponse.prototype, "apiError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SmsVerifyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SmsVerifyResponse)
    ], SmsVerifyResponse.prototype, "smsVerifyResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SmsVerifyResponse.prototype, "statusCode", void 0);
    return SmsVerifyResponse;
}(utils_1.SpeakeasyBase));
exports.SmsVerifyResponse = SmsVerifyResponse;
