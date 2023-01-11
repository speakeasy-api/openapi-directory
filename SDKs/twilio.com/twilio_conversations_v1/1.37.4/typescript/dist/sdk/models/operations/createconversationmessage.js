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
exports.CreateConversationMessageResponse = exports.CreateConversationMessageRequest = exports.CreateConversationMessageSecurity = exports.CreateConversationMessageCreateConversationMessageRequest = exports.CreateConversationMessageHeaders = exports.CreateConversationMessagePathParams = exports.CreateConversationMessageServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateConversationMessageServerList = [
    "https://conversations.twilio.com",
];
var CreateConversationMessagePathParams = /** @class */ (function (_super) {
    __extends(CreateConversationMessagePathParams, _super);
    function CreateConversationMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], CreateConversationMessagePathParams.prototype, "conversationSid", void 0);
    return CreateConversationMessagePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateConversationMessagePathParams = CreateConversationMessagePathParams;
var CreateConversationMessageHeaders = /** @class */ (function (_super) {
    __extends(CreateConversationMessageHeaders, _super);
    function CreateConversationMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateConversationMessageHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateConversationMessageHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateConversationMessageHeaders = CreateConversationMessageHeaders;
var CreateConversationMessageCreateConversationMessageRequest = /** @class */ (function (_super) {
    __extends(CreateConversationMessageCreateConversationMessageRequest, _super);
    function CreateConversationMessageCreateConversationMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Author;" }),
        __metadata("design:type", String)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Body;" }),
        __metadata("design:type", String)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MediaSid;" }),
        __metadata("design:type", String)
    ], CreateConversationMessageCreateConversationMessageRequest.prototype, "mediaSid", void 0);
    return CreateConversationMessageCreateConversationMessageRequest;
}(utils_1.SpeakeasyBase));
exports.CreateConversationMessageCreateConversationMessageRequest = CreateConversationMessageCreateConversationMessageRequest;
var CreateConversationMessageSecurity = /** @class */ (function (_super) {
    __extends(CreateConversationMessageSecurity, _super);
    function CreateConversationMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateConversationMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateConversationMessageSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateConversationMessageSecurity = CreateConversationMessageSecurity;
var CreateConversationMessageRequest = /** @class */ (function (_super) {
    __extends(CreateConversationMessageRequest, _super);
    function CreateConversationMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateConversationMessageRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateConversationMessagePathParams)
    ], CreateConversationMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateConversationMessageHeaders)
    ], CreateConversationMessageRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateConversationMessageCreateConversationMessageRequest)
    ], CreateConversationMessageRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateConversationMessageSecurity)
    ], CreateConversationMessageRequest.prototype, "security", void 0);
    return CreateConversationMessageRequest;
}(utils_1.SpeakeasyBase));
exports.CreateConversationMessageRequest = CreateConversationMessageRequest;
var CreateConversationMessageResponse = /** @class */ (function (_super) {
    __extends(CreateConversationMessageResponse, _super);
    function CreateConversationMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateConversationMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateConversationMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ConversationsV1ConversationConversationMessage)
    ], CreateConversationMessageResponse.prototype, "conversationsV1ConversationConversationMessage", void 0);
    return CreateConversationMessageResponse;
}(utils_1.SpeakeasyBase));
exports.CreateConversationMessageResponse = CreateConversationMessageResponse;
