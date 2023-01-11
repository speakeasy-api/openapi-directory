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
exports.ListConversationMessageResponse = exports.ListConversationMessageRequest = exports.ListConversationMessageListConversationMessageResponse = exports.ListConversationMessageListConversationMessageResponseMeta = exports.ListConversationMessageSecurity = exports.ListConversationMessageQueryParams = exports.ListConversationMessagePathParams = exports.ListConversationMessageServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListConversationMessageServerList = [
    "https://conversations.twilio.com",
];
var ListConversationMessagePathParams = /** @class */ (function (_super) {
    __extends(ListConversationMessagePathParams, _super);
    function ListConversationMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], ListConversationMessagePathParams.prototype, "conversationSid", void 0);
    return ListConversationMessagePathParams;
}(utils_1.SpeakeasyBase));
exports.ListConversationMessagePathParams = ListConversationMessagePathParams;
var ListConversationMessageQueryParams = /** @class */ (function (_super) {
    __extends(ListConversationMessageQueryParams, _super);
    function ListConversationMessageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListConversationMessageQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConversationMessageQueryParams.prototype, "pageSize", void 0);
    return ListConversationMessageQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListConversationMessageQueryParams = ListConversationMessageQueryParams;
var ListConversationMessageSecurity = /** @class */ (function (_super) {
    __extends(ListConversationMessageSecurity, _super);
    function ListConversationMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConversationMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConversationMessageSecurity;
}(utils_1.SpeakeasyBase));
exports.ListConversationMessageSecurity = ListConversationMessageSecurity;
var ListConversationMessageListConversationMessageResponseMeta = /** @class */ (function (_super) {
    __extends(ListConversationMessageListConversationMessageResponseMeta, _super);
    function ListConversationMessageListConversationMessageResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListConversationMessageListConversationMessageResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListConversationMessageListConversationMessageResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListConversationMessageListConversationMessageResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConversationMessageListConversationMessageResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConversationMessageListConversationMessageResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListConversationMessageListConversationMessageResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListConversationMessageListConversationMessageResponseMeta.prototype, "url", void 0);
    return ListConversationMessageListConversationMessageResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListConversationMessageListConversationMessageResponseMeta = ListConversationMessageListConversationMessageResponseMeta;
var ListConversationMessageListConversationMessageResponse = /** @class */ (function (_super) {
    __extends(ListConversationMessageListConversationMessageResponse, _super);
    function ListConversationMessageListConversationMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages", elemType: shared.ConversationsV1ConversationConversationMessage }),
        __metadata("design:type", Array)
    ], ListConversationMessageListConversationMessageResponse.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListConversationMessageListConversationMessageResponseMeta)
    ], ListConversationMessageListConversationMessageResponse.prototype, "meta", void 0);
    return ListConversationMessageListConversationMessageResponse;
}(utils_1.SpeakeasyBase));
exports.ListConversationMessageListConversationMessageResponse = ListConversationMessageListConversationMessageResponse;
var ListConversationMessageRequest = /** @class */ (function (_super) {
    __extends(ListConversationMessageRequest, _super);
    function ListConversationMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConversationMessageRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationMessagePathParams)
    ], ListConversationMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationMessageQueryParams)
    ], ListConversationMessageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationMessageSecurity)
    ], ListConversationMessageRequest.prototype, "security", void 0);
    return ListConversationMessageRequest;
}(utils_1.SpeakeasyBase));
exports.ListConversationMessageRequest = ListConversationMessageRequest;
var ListConversationMessageResponse = /** @class */ (function (_super) {
    __extends(ListConversationMessageResponse, _super);
    function ListConversationMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConversationMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationMessageListConversationMessageResponse)
    ], ListConversationMessageResponse.prototype, "listConversationMessageResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListConversationMessageResponse.prototype, "statusCode", void 0);
    return ListConversationMessageResponse;
}(utils_1.SpeakeasyBase));
exports.ListConversationMessageResponse = ListConversationMessageResponse;
