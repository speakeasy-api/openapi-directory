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
exports.CreateServiceConversationScopedWebhookResponse = exports.CreateServiceConversationScopedWebhookRequest = exports.CreateServiceConversationScopedWebhookSecurity = exports.CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest = exports.CreateServiceConversationScopedWebhookPathParams = exports.CreateServiceConversationScopedWebhookServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateServiceConversationScopedWebhookServerList = [
    "https://conversations.twilio.com",
];
var CreateServiceConversationScopedWebhookPathParams = /** @class */ (function (_super) {
    __extends(CreateServiceConversationScopedWebhookPathParams, _super);
    function CreateServiceConversationScopedWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookPathParams.prototype, "conversationSid", void 0);
    return CreateServiceConversationScopedWebhookPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationScopedWebhookPathParams = CreateServiceConversationScopedWebhookPathParams;
var CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest, _super);
    function CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.Filters;" }),
        __metadata("design:type", Array)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.FlowSid;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationFlowSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.Method;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.ReplayAfter;" }),
        __metadata("design:type", Number)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationReplayAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.Triggers;" }),
        __metadata("design:type", Array)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationTriggers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.Url;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "configurationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Target;" }),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest.prototype, "target", void 0);
    return CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest = CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest;
var CreateServiceConversationScopedWebhookSecurity = /** @class */ (function (_super) {
    __extends(CreateServiceConversationScopedWebhookSecurity, _super);
    function CreateServiceConversationScopedWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateServiceConversationScopedWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateServiceConversationScopedWebhookSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationScopedWebhookSecurity = CreateServiceConversationScopedWebhookSecurity;
var CreateServiceConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateServiceConversationScopedWebhookRequest, _super);
    function CreateServiceConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateServiceConversationScopedWebhookPathParams)
    ], CreateServiceConversationScopedWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest)
    ], CreateServiceConversationScopedWebhookRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateServiceConversationScopedWebhookSecurity)
    ], CreateServiceConversationScopedWebhookRequest.prototype, "security", void 0);
    return CreateServiceConversationScopedWebhookRequest;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationScopedWebhookRequest = CreateServiceConversationScopedWebhookRequest;
var CreateServiceConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(CreateServiceConversationScopedWebhookResponse, _super);
    function CreateServiceConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateServiceConversationScopedWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateServiceConversationScopedWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook)
    ], CreateServiceConversationScopedWebhookResponse.prototype, "conversationsV1ServiceServiceConversationServiceConversationScopedWebhook", void 0);
    return CreateServiceConversationScopedWebhookResponse;
}(utils_1.SpeakeasyBase));
exports.CreateServiceConversationScopedWebhookResponse = CreateServiceConversationScopedWebhookResponse;
