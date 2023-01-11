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
exports.CreateConversationResponse = exports.CreateConversationRequest = exports.CreateConversationSecurity = exports.CreateConversationCreateConversationRequest = exports.CreateConversationHeaders = exports.CreateConversationServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateConversationServerList = [
    "https://conversations.twilio.com",
];
var CreateConversationHeaders = /** @class */ (function (_super) {
    __extends(CreateConversationHeaders, _super);
    function CreateConversationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateConversationHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateConversationHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateConversationHeaders = CreateConversationHeaders;
var CreateConversationCreateConversationRequest = /** @class */ (function (_super) {
    __extends(CreateConversationCreateConversationRequest, _super);
    function CreateConversationCreateConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateConversationCreateConversationRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], CreateConversationCreateConversationRequest.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], CreateConversationCreateConversationRequest.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateConversationCreateConversationRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingServiceSid;" }),
        __metadata("design:type", String)
    ], CreateConversationCreateConversationRequest.prototype, "messagingServiceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=State;" }),
        __metadata("design:type", String)
    ], CreateConversationCreateConversationRequest.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Timers.Closed;" }),
        __metadata("design:type", String)
    ], CreateConversationCreateConversationRequest.prototype, "timersClosed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Timers.Inactive;" }),
        __metadata("design:type", String)
    ], CreateConversationCreateConversationRequest.prototype, "timersInactive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateConversationCreateConversationRequest.prototype, "uniqueName", void 0);
    return CreateConversationCreateConversationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateConversationCreateConversationRequest = CreateConversationCreateConversationRequest;
var CreateConversationSecurity = /** @class */ (function (_super) {
    __extends(CreateConversationSecurity, _super);
    function CreateConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateConversationSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateConversationSecurity = CreateConversationSecurity;
var CreateConversationRequest = /** @class */ (function (_super) {
    __extends(CreateConversationRequest, _super);
    function CreateConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateConversationRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateConversationHeaders)
    ], CreateConversationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateConversationCreateConversationRequest)
    ], CreateConversationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateConversationSecurity)
    ], CreateConversationRequest.prototype, "security", void 0);
    return CreateConversationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateConversationRequest = CreateConversationRequest;
var CreateConversationResponse = /** @class */ (function (_super) {
    __extends(CreateConversationResponse, _super);
    function CreateConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateConversationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateConversationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ConversationsV1Conversation)
    ], CreateConversationResponse.prototype, "conversationsV1Conversation", void 0);
    return CreateConversationResponse;
}(utils_1.SpeakeasyBase));
exports.CreateConversationResponse = CreateConversationResponse;
