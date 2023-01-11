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
exports.ListServiceConversationMessageResponse = exports.ListServiceConversationMessageRequest = exports.ListServiceConversationMessageListServiceConversationMessageResponse = exports.ListServiceConversationMessageListServiceConversationMessageResponseMeta = exports.ListServiceConversationMessageSecurity = exports.ListServiceConversationMessageQueryParams = exports.ListServiceConversationMessagePathParams = exports.ListServiceConversationMessageServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListServiceConversationMessageServerList = [
    "https://conversations.twilio.com",
];
var ListServiceConversationMessagePathParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessagePathParams, _super);
    function ListServiceConversationMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessagePathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessagePathParams.prototype, "conversationSid", void 0);
    return ListServiceConversationMessagePathParams;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationMessagePathParams = ListServiceConversationMessagePathParams;
var ListServiceConversationMessageQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageQueryParams, _super);
    function ListServiceConversationMessageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceConversationMessageQueryParams.prototype, "pageSize", void 0);
    return ListServiceConversationMessageQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationMessageQueryParams = ListServiceConversationMessageQueryParams;
var ListServiceConversationMessageSecurity = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageSecurity, _super);
    function ListServiceConversationMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceConversationMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceConversationMessageSecurity;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationMessageSecurity = ListServiceConversationMessageSecurity;
var ListServiceConversationMessageListServiceConversationMessageResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageListServiceConversationMessageResponseMeta, _super);
    function ListServiceConversationMessageListServiceConversationMessageResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageListServiceConversationMessageResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageListServiceConversationMessageResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageListServiceConversationMessageResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceConversationMessageListServiceConversationMessageResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceConversationMessageListServiceConversationMessageResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageListServiceConversationMessageResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceConversationMessageListServiceConversationMessageResponseMeta.prototype, "url", void 0);
    return ListServiceConversationMessageListServiceConversationMessageResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationMessageListServiceConversationMessageResponseMeta = ListServiceConversationMessageListServiceConversationMessageResponseMeta;
var ListServiceConversationMessageListServiceConversationMessageResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageListServiceConversationMessageResponse, _super);
    function ListServiceConversationMessageListServiceConversationMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage }),
        __metadata("design:type", Array)
    ], ListServiceConversationMessageListServiceConversationMessageResponse.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceConversationMessageListServiceConversationMessageResponseMeta)
    ], ListServiceConversationMessageListServiceConversationMessageResponse.prototype, "meta", void 0);
    return ListServiceConversationMessageListServiceConversationMessageResponse;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationMessageListServiceConversationMessageResponse = ListServiceConversationMessageListServiceConversationMessageResponse;
var ListServiceConversationMessageRequest = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageRequest, _super);
    function ListServiceConversationMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListServiceConversationMessageRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationMessagePathParams)
    ], ListServiceConversationMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationMessageQueryParams)
    ], ListServiceConversationMessageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationMessageSecurity)
    ], ListServiceConversationMessageRequest.prototype, "security", void 0);
    return ListServiceConversationMessageRequest;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationMessageRequest = ListServiceConversationMessageRequest;
var ListServiceConversationMessageResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationMessageResponse, _super);
    function ListServiceConversationMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListServiceConversationMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationMessageListServiceConversationMessageResponse)
    ], ListServiceConversationMessageResponse.prototype, "listServiceConversationMessageResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListServiceConversationMessageResponse.prototype, "statusCode", void 0);
    return ListServiceConversationMessageResponse;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationMessageResponse = ListServiceConversationMessageResponse;
