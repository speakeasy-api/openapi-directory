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
exports.CreateHostedNumbersAuthorizationDocumentResponse = exports.CreateHostedNumbersAuthorizationDocumentRequest = exports.CreateHostedNumbersAuthorizationDocumentSecurity = exports.CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest = exports.CreateHostedNumbersAuthorizationDocumentServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateHostedNumbersAuthorizationDocumentServerList = [
    "https://preview.twilio.com",
];
var CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest, _super);
    function CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=AddressSid;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "addressSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CcEmails;" }),
        __metadata("design:type", Array)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "ccEmails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ContactPhoneNumber;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "contactPhoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=ContactTitle;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "contactTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Email;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=HostedNumberOrderSids;" }),
        __metadata("design:type", Array)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "hostedNumberOrderSids", void 0);
    return CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest;
}(utils_1.SpeakeasyBase));
exports.CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest = CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest;
var CreateHostedNumbersAuthorizationDocumentSecurity = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersAuthorizationDocumentSecurity, _super);
    function CreateHostedNumbersAuthorizationDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateHostedNumbersAuthorizationDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateHostedNumbersAuthorizationDocumentSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateHostedNumbersAuthorizationDocumentSecurity = CreateHostedNumbersAuthorizationDocumentSecurity;
var CreateHostedNumbersAuthorizationDocumentRequest = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersAuthorizationDocumentRequest, _super);
    function CreateHostedNumbersAuthorizationDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest)
    ], CreateHostedNumbersAuthorizationDocumentRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateHostedNumbersAuthorizationDocumentSecurity)
    ], CreateHostedNumbersAuthorizationDocumentRequest.prototype, "security", void 0);
    return CreateHostedNumbersAuthorizationDocumentRequest;
}(utils_1.SpeakeasyBase));
exports.CreateHostedNumbersAuthorizationDocumentRequest = CreateHostedNumbersAuthorizationDocumentRequest;
var CreateHostedNumbersAuthorizationDocumentResponse = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersAuthorizationDocumentResponse, _super);
    function CreateHostedNumbersAuthorizationDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateHostedNumbersAuthorizationDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PreviewHostedNumbersAuthorizationDocument)
    ], CreateHostedNumbersAuthorizationDocumentResponse.prototype, "previewHostedNumbersAuthorizationDocument", void 0);
    return CreateHostedNumbersAuthorizationDocumentResponse;
}(utils_1.SpeakeasyBase));
exports.CreateHostedNumbersAuthorizationDocumentResponse = CreateHostedNumbersAuthorizationDocumentResponse;
