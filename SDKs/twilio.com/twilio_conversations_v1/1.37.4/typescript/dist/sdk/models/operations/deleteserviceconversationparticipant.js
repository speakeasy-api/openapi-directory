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
exports.DeleteServiceConversationParticipantResponse = exports.DeleteServiceConversationParticipantRequest = exports.DeleteServiceConversationParticipantSecurity = exports.DeleteServiceConversationParticipantHeaders = exports.DeleteServiceConversationParticipantPathParams = exports.DeleteServiceConversationParticipantServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.DeleteServiceConversationParticipantServerList = [
    "https://conversations.twilio.com",
];
var DeleteServiceConversationParticipantPathParams = /** @class */ (function (_super) {
    __extends(DeleteServiceConversationParticipantPathParams, _super);
    function DeleteServiceConversationParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], DeleteServiceConversationParticipantPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], DeleteServiceConversationParticipantPathParams.prototype, "conversationSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteServiceConversationParticipantPathParams.prototype, "sid", void 0);
    return DeleteServiceConversationParticipantPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteServiceConversationParticipantPathParams = DeleteServiceConversationParticipantPathParams;
var DeleteServiceConversationParticipantHeaders = /** @class */ (function (_super) {
    __extends(DeleteServiceConversationParticipantHeaders, _super);
    function DeleteServiceConversationParticipantHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], DeleteServiceConversationParticipantHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return DeleteServiceConversationParticipantHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteServiceConversationParticipantHeaders = DeleteServiceConversationParticipantHeaders;
var DeleteServiceConversationParticipantSecurity = /** @class */ (function (_super) {
    __extends(DeleteServiceConversationParticipantSecurity, _super);
    function DeleteServiceConversationParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteServiceConversationParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteServiceConversationParticipantSecurity;
}(utils_1.SpeakeasyBase));
exports.DeleteServiceConversationParticipantSecurity = DeleteServiceConversationParticipantSecurity;
var DeleteServiceConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(DeleteServiceConversationParticipantRequest, _super);
    function DeleteServiceConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteServiceConversationParticipantRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteServiceConversationParticipantPathParams)
    ], DeleteServiceConversationParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteServiceConversationParticipantHeaders)
    ], DeleteServiceConversationParticipantRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteServiceConversationParticipantSecurity)
    ], DeleteServiceConversationParticipantRequest.prototype, "security", void 0);
    return DeleteServiceConversationParticipantRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteServiceConversationParticipantRequest = DeleteServiceConversationParticipantRequest;
var DeleteServiceConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(DeleteServiceConversationParticipantResponse, _super);
    function DeleteServiceConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteServiceConversationParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteServiceConversationParticipantResponse.prototype, "statusCode", void 0);
    return DeleteServiceConversationParticipantResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteServiceConversationParticipantResponse = DeleteServiceConversationParticipantResponse;
