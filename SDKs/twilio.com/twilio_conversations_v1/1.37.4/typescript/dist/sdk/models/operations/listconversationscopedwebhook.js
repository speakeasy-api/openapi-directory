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
exports.ListConversationScopedWebhookResponse = exports.ListConversationScopedWebhookRequest = exports.ListConversationScopedWebhookListConversationScopedWebhookResponse = exports.ListConversationScopedWebhookListConversationScopedWebhookResponseMeta = exports.ListConversationScopedWebhookSecurity = exports.ListConversationScopedWebhookQueryParams = exports.ListConversationScopedWebhookPathParams = exports.ListConversationScopedWebhookServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListConversationScopedWebhookServerList = [
    "https://conversations.twilio.com",
];
var ListConversationScopedWebhookPathParams = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookPathParams, _super);
    function ListConversationScopedWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookPathParams.prototype, "conversationSid", void 0);
    return ListConversationScopedWebhookPathParams;
}(utils_1.SpeakeasyBase));
exports.ListConversationScopedWebhookPathParams = ListConversationScopedWebhookPathParams;
var ListConversationScopedWebhookQueryParams = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookQueryParams, _super);
    function ListConversationScopedWebhookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConversationScopedWebhookQueryParams.prototype, "pageSize", void 0);
    return ListConversationScopedWebhookQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListConversationScopedWebhookQueryParams = ListConversationScopedWebhookQueryParams;
var ListConversationScopedWebhookSecurity = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookSecurity, _super);
    function ListConversationScopedWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConversationScopedWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConversationScopedWebhookSecurity;
}(utils_1.SpeakeasyBase));
exports.ListConversationScopedWebhookSecurity = ListConversationScopedWebhookSecurity;
var ListConversationScopedWebhookListConversationScopedWebhookResponseMeta = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookListConversationScopedWebhookResponseMeta, _super);
    function ListConversationScopedWebhookListConversationScopedWebhookResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponseMeta.prototype, "url", void 0);
    return ListConversationScopedWebhookListConversationScopedWebhookResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListConversationScopedWebhookListConversationScopedWebhookResponseMeta = ListConversationScopedWebhookListConversationScopedWebhookResponseMeta;
var ListConversationScopedWebhookListConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookListConversationScopedWebhookResponse, _super);
    function ListConversationScopedWebhookListConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListConversationScopedWebhookListConversationScopedWebhookResponseMeta)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhooks", elemType: shared.ConversationsV1ConversationConversationScopedWebhook }),
        __metadata("design:type", Array)
    ], ListConversationScopedWebhookListConversationScopedWebhookResponse.prototype, "webhooks", void 0);
    return ListConversationScopedWebhookListConversationScopedWebhookResponse;
}(utils_1.SpeakeasyBase));
exports.ListConversationScopedWebhookListConversationScopedWebhookResponse = ListConversationScopedWebhookListConversationScopedWebhookResponse;
var ListConversationScopedWebhookRequest = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookRequest, _super);
    function ListConversationScopedWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationScopedWebhookPathParams)
    ], ListConversationScopedWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationScopedWebhookQueryParams)
    ], ListConversationScopedWebhookRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationScopedWebhookSecurity)
    ], ListConversationScopedWebhookRequest.prototype, "security", void 0);
    return ListConversationScopedWebhookRequest;
}(utils_1.SpeakeasyBase));
exports.ListConversationScopedWebhookRequest = ListConversationScopedWebhookRequest;
var ListConversationScopedWebhookResponse = /** @class */ (function (_super) {
    __extends(ListConversationScopedWebhookResponse, _super);
    function ListConversationScopedWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConversationScopedWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationScopedWebhookListConversationScopedWebhookResponse)
    ], ListConversationScopedWebhookResponse.prototype, "listConversationScopedWebhookResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListConversationScopedWebhookResponse.prototype, "statusCode", void 0);
    return ListConversationScopedWebhookResponse;
}(utils_1.SpeakeasyBase));
exports.ListConversationScopedWebhookResponse = ListConversationScopedWebhookResponse;
