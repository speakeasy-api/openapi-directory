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
exports.CreateServiceConversationParticipantResponse = exports.CreateServiceConversationParticipantRequest = exports.CreateServiceConversationParticipantSecurity = exports.CreateServiceConversationParticipantCreateServiceConversationParticipantRequest = exports.CreateServiceConversationParticipantHeaders = exports.CreateServiceConversationParticipantPathParams = exports.CreateServiceConversationParticipantServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateServiceConversationParticipantServerList = [
    "https://conversations.twilio.com",
];
var CreateServiceConversationParticipantPathParams = /** @class */ (function (_super) {
    __extends(CreateServiceConversationParticipantPathParams, _super);
    function CreateServiceConversationParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], CreateServiceConversationParticipantPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], CreateServiceConversationParticipantPathParams.prototype, "conversationSid", void 0);
    return CreateServiceConversationParticipantPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationParticipantPathParams = CreateServiceConversationParticipantPathParams;
var CreateServiceConversationParticipantHeaders = /** @class */ (function (_super) {
    __extends(CreateServiceConversationParticipantHeaders, _super);
    function CreateServiceConversationParticipantHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateServiceConversationParticipantHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateServiceConversationParticipantHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationParticipantHeaders = CreateServiceConversationParticipantHeaders;
var CreateServiceConversationParticipantCreateServiceConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationParticipantCreateServiceConversationParticipantRequest, _super);
    function CreateServiceConversationParticipantCreateServiceConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationParticipantCreateServiceConversationParticipantRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], CreateServiceConversationParticipantCreateServiceConversationParticipantRequest.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], CreateServiceConversationParticipantCreateServiceConversationParticipantRequest.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationParticipantCreateServiceConversationParticipantRequest.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingBinding.Address;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationParticipantCreateServiceConversationParticipantRequest.prototype, "messagingBindingAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingBinding.ProjectedAddress;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationParticipantCreateServiceConversationParticipantRequest.prototype, "messagingBindingProjectedAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingBinding.ProxyAddress;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationParticipantCreateServiceConversationParticipantRequest.prototype, "messagingBindingProxyAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationParticipantCreateServiceConversationParticipantRequest.prototype, "roleSid", void 0);
    return CreateServiceConversationParticipantCreateServiceConversationParticipantRequest;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationParticipantCreateServiceConversationParticipantRequest = CreateServiceConversationParticipantCreateServiceConversationParticipantRequest;
var CreateServiceConversationParticipantSecurity = /** @class */ (function (_super) {
    __extends(CreateServiceConversationParticipantSecurity, _super);
    function CreateServiceConversationParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateServiceConversationParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateServiceConversationParticipantSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationParticipantSecurity = CreateServiceConversationParticipantSecurity;
var CreateServiceConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationParticipantRequest, _super);
    function CreateServiceConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateServiceConversationParticipantRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateServiceConversationParticipantPathParams)
    ], CreateServiceConversationParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateServiceConversationParticipantHeaders)
    ], CreateServiceConversationParticipantRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateServiceConversationParticipantCreateServiceConversationParticipantRequest)
    ], CreateServiceConversationParticipantRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateServiceConversationParticipantSecurity)
    ], CreateServiceConversationParticipantRequest.prototype, "security", void 0);
    return CreateServiceConversationParticipantRequest;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationParticipantRequest = CreateServiceConversationParticipantRequest;
var CreateServiceConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(CreateServiceConversationParticipantResponse, _super);
    function CreateServiceConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateServiceConversationParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateServiceConversationParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant)
    ], CreateServiceConversationParticipantResponse.prototype, "conversationsV1ServiceServiceConversationServiceConversationParticipant", void 0);
    return CreateServiceConversationParticipantResponse;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationParticipantResponse = CreateServiceConversationParticipantResponse;
