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
exports.UpdateServiceConversationParticipantResponse = exports.UpdateServiceConversationParticipantRequest = exports.UpdateServiceConversationParticipantSecurity = exports.UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest = exports.UpdateServiceConversationParticipantHeaders = exports.UpdateServiceConversationParticipantPathParams = exports.UpdateServiceConversationParticipantServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateServiceConversationParticipantServerList = [
    "https://conversations.twilio.com",
];
var UpdateServiceConversationParticipantPathParams = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantPathParams, _super);
    function UpdateServiceConversationParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantPathParams.prototype, "conversationSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantPathParams.prototype, "sid", void 0);
    return UpdateServiceConversationParticipantPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateServiceConversationParticipantPathParams = UpdateServiceConversationParticipantPathParams;
var UpdateServiceConversationParticipantHeaders = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantHeaders, _super);
    function UpdateServiceConversationParticipantHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateServiceConversationParticipantHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateServiceConversationParticipantHeaders = UpdateServiceConversationParticipantHeaders;
var UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest, _super);
    function UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=LastReadMessageIndex;" }),
        __metadata("design:type", Number)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "lastReadMessageIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=LastReadTimestamp;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "lastReadTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingBinding.ProjectedAddress;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "messagingBindingProjectedAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingBinding.ProxyAddress;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "messagingBindingProxyAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest.prototype, "roleSid", void 0);
    return UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest = UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest;
var UpdateServiceConversationParticipantSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantSecurity, _super);
    function UpdateServiceConversationParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceConversationParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceConversationParticipantSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateServiceConversationParticipantSecurity = UpdateServiceConversationParticipantSecurity;
var UpdateServiceConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantRequest, _super);
    function UpdateServiceConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateServiceConversationParticipantPathParams)
    ], UpdateServiceConversationParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateServiceConversationParticipantHeaders)
    ], UpdateServiceConversationParticipantRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest)
    ], UpdateServiceConversationParticipantRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateServiceConversationParticipantSecurity)
    ], UpdateServiceConversationParticipantRequest.prototype, "security", void 0);
    return UpdateServiceConversationParticipantRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateServiceConversationParticipantRequest = UpdateServiceConversationParticipantRequest;
var UpdateServiceConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceConversationParticipantResponse, _super);
    function UpdateServiceConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateServiceConversationParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateServiceConversationParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant)
    ], UpdateServiceConversationParticipantResponse.prototype, "conversationsV1ServiceServiceConversationServiceConversationParticipant", void 0);
    return UpdateServiceConversationParticipantResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateServiceConversationParticipantResponse = UpdateServiceConversationParticipantResponse;
