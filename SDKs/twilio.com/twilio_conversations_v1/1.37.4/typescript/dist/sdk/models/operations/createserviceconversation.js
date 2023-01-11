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
exports.CreateServiceConversationResponse = exports.CreateServiceConversationRequest = exports.CreateServiceConversationSecurity = exports.CreateServiceConversationCreateServiceConversationRequest = exports.CreateServiceConversationHeaders = exports.CreateServiceConversationPathParams = exports.CreateServiceConversationServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateServiceConversationServerList = [
    "https://conversations.twilio.com",
];
var CreateServiceConversationPathParams = /** @class */ (function (_super) {
    __extends(CreateServiceConversationPathParams, _super);
    function CreateServiceConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], CreateServiceConversationPathParams.prototype, "chatServiceSid", void 0);
    return CreateServiceConversationPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationPathParams = CreateServiceConversationPathParams;
var CreateServiceConversationHeaders = /** @class */ (function (_super) {
    __extends(CreateServiceConversationHeaders, _super);
    function CreateServiceConversationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], CreateServiceConversationHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return CreateServiceConversationHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationHeaders = CreateServiceConversationHeaders;
var CreateServiceConversationCreateServiceConversationRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationCreateServiceConversationRequest, _super);
    function CreateServiceConversationCreateServiceConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MessagingServiceSid;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "messagingServiceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=State;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Timers.Closed;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "timersClosed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Timers.Inactive;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "timersInactive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationCreateServiceConversationRequest.prototype, "uniqueName", void 0);
    return CreateServiceConversationCreateServiceConversationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationCreateServiceConversationRequest = CreateServiceConversationCreateServiceConversationRequest;
var CreateServiceConversationSecurity = /** @class */ (function (_super) {
    __extends(CreateServiceConversationSecurity, _super);
    function CreateServiceConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateServiceConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateServiceConversationSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationSecurity = CreateServiceConversationSecurity;
var CreateServiceConversationRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationRequest, _super);
    function CreateServiceConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateServiceConversationRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateServiceConversationPathParams)
    ], CreateServiceConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateServiceConversationHeaders)
    ], CreateServiceConversationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateServiceConversationCreateServiceConversationRequest)
    ], CreateServiceConversationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateServiceConversationSecurity)
    ], CreateServiceConversationRequest.prototype, "security", void 0);
    return CreateServiceConversationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationRequest = CreateServiceConversationRequest;
var CreateServiceConversationResponse = /** @class */ (function (_super) {
    __extends(CreateServiceConversationResponse, _super);
    function CreateServiceConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateServiceConversationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateServiceConversationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConversation)
    ], CreateServiceConversationResponse.prototype, "conversationsV1ServiceServiceConversation", void 0);
    return CreateServiceConversationResponse;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationResponse = CreateServiceConversationResponse;
