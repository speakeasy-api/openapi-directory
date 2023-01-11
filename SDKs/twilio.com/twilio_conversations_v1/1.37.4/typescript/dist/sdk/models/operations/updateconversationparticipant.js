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
exports.UpdateConversationParticipantResponse = exports.UpdateConversationParticipantRequest = exports.UpdateConversationParticipantSecurity = exports.UpdateConversationParticipantUpdateConversationParticipantRequest = exports.UpdateConversationParticipantHeaders = exports.UpdateConversationParticipantPathParams = exports.UpdateConversationParticipantServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateConversationParticipantServerList = [
    "https://conversations.twilio.com",
];
var UpdateConversationParticipantPathParams = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantPathParams, _super);
    function UpdateConversationParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantPathParams.prototype, "conversationSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantPathParams.prototype, "sid", void 0);
    return UpdateConversationParticipantPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateConversationParticipantPathParams = UpdateConversationParticipantPathParams;
var UpdateConversationParticipantHeaders = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantHeaders, _super);
    function UpdateConversationParticipantHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateConversationParticipantHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateConversationParticipantHeaders = UpdateConversationParticipantHeaders;
var UpdateConversationParticipantUpdateConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantUpdateConversationParticipantRequest, _super);
    function UpdateConversationParticipantUpdateConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=LastReadMessageIndex;" }),
        __metadata("design:type", Number)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "lastReadMessageIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=LastReadTimestamp;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "lastReadTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingBinding.ProjectedAddress;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "messagingBindingProjectedAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingBinding.ProxyAddress;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "messagingBindingProxyAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=RoleSid;" }),
        __metadata("design:type", String)
    ], UpdateConversationParticipantUpdateConversationParticipantRequest.prototype, "roleSid", void 0);
    return UpdateConversationParticipantUpdateConversationParticipantRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateConversationParticipantUpdateConversationParticipantRequest = UpdateConversationParticipantUpdateConversationParticipantRequest;
var UpdateConversationParticipantSecurity = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantSecurity, _super);
    function UpdateConversationParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateConversationParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateConversationParticipantSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateConversationParticipantSecurity = UpdateConversationParticipantSecurity;
var UpdateConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantRequest, _super);
    function UpdateConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateConversationParticipantRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateConversationParticipantPathParams)
    ], UpdateConversationParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateConversationParticipantHeaders)
    ], UpdateConversationParticipantRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateConversationParticipantUpdateConversationParticipantRequest)
    ], UpdateConversationParticipantRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateConversationParticipantSecurity)
    ], UpdateConversationParticipantRequest.prototype, "security", void 0);
    return UpdateConversationParticipantRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateConversationParticipantRequest = UpdateConversationParticipantRequest;
var UpdateConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(UpdateConversationParticipantResponse, _super);
    function UpdateConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateConversationParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateConversationParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ConversationsV1ConversationConversationParticipant)
    ], UpdateConversationParticipantResponse.prototype, "conversationsV1ConversationConversationParticipant", void 0);
    return UpdateConversationParticipantResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateConversationParticipantResponse = UpdateConversationParticipantResponse;
