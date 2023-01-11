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
exports.ListServiceConversationParticipantResponse = exports.ListServiceConversationParticipantRequest = exports.ListServiceConversationParticipantListServiceConversationParticipantResponse = exports.ListServiceConversationParticipantListServiceConversationParticipantResponseMeta = exports.ListServiceConversationParticipantSecurity = exports.ListServiceConversationParticipantQueryParams = exports.ListServiceConversationParticipantPathParams = exports.ListServiceConversationParticipantServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListServiceConversationParticipantServerList = [
    "https://conversations.twilio.com",
];
var ListServiceConversationParticipantPathParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantPathParams, _super);
    function ListServiceConversationParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantPathParams.prototype, "conversationSid", void 0);
    return ListServiceConversationParticipantPathParams;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationParticipantPathParams = ListServiceConversationParticipantPathParams;
var ListServiceConversationParticipantQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantQueryParams, _super);
    function ListServiceConversationParticipantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceConversationParticipantQueryParams.prototype, "pageSize", void 0);
    return ListServiceConversationParticipantQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationParticipantQueryParams = ListServiceConversationParticipantQueryParams;
var ListServiceConversationParticipantSecurity = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantSecurity, _super);
    function ListServiceConversationParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceConversationParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceConversationParticipantSecurity;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationParticipantSecurity = ListServiceConversationParticipantSecurity;
var ListServiceConversationParticipantListServiceConversationParticipantResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantListServiceConversationParticipantResponseMeta, _super);
    function ListServiceConversationParticipantListServiceConversationParticipantResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponseMeta.prototype, "url", void 0);
    return ListServiceConversationParticipantListServiceConversationParticipantResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationParticipantListServiceConversationParticipantResponseMeta = ListServiceConversationParticipantListServiceConversationParticipantResponseMeta;
var ListServiceConversationParticipantListServiceConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantListServiceConversationParticipantResponse, _super);
    function ListServiceConversationParticipantListServiceConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceConversationParticipantListServiceConversationParticipantResponseMeta)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant }),
        __metadata("design:type", Array)
    ], ListServiceConversationParticipantListServiceConversationParticipantResponse.prototype, "participants", void 0);
    return ListServiceConversationParticipantListServiceConversationParticipantResponse;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationParticipantListServiceConversationParticipantResponse = ListServiceConversationParticipantListServiceConversationParticipantResponse;
var ListServiceConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantRequest, _super);
    function ListServiceConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationParticipantPathParams)
    ], ListServiceConversationParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationParticipantQueryParams)
    ], ListServiceConversationParticipantRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationParticipantSecurity)
    ], ListServiceConversationParticipantRequest.prototype, "security", void 0);
    return ListServiceConversationParticipantRequest;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationParticipantRequest = ListServiceConversationParticipantRequest;
var ListServiceConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationParticipantResponse, _super);
    function ListServiceConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListServiceConversationParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationParticipantListServiceConversationParticipantResponse)
    ], ListServiceConversationParticipantResponse.prototype, "listServiceConversationParticipantResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListServiceConversationParticipantResponse.prototype, "statusCode", void 0);
    return ListServiceConversationParticipantResponse;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationParticipantResponse = ListServiceConversationParticipantResponse;
