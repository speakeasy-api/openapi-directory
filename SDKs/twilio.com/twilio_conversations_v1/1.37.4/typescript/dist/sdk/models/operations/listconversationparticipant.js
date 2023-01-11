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
exports.ListConversationParticipantResponse = exports.ListConversationParticipantRequest = exports.ListConversationParticipantListConversationParticipantResponse = exports.ListConversationParticipantListConversationParticipantResponseMeta = exports.ListConversationParticipantSecurity = exports.ListConversationParticipantQueryParams = exports.ListConversationParticipantPathParams = exports.ListConversationParticipantServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListConversationParticipantServerList = [
    "https://conversations.twilio.com",
];
var ListConversationParticipantPathParams = /** @class */ (function (_super) {
    __extends(ListConversationParticipantPathParams, _super);
    function ListConversationParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], ListConversationParticipantPathParams.prototype, "conversationSid", void 0);
    return ListConversationParticipantPathParams;
}(utils_1.SpeakeasyBase));
exports.ListConversationParticipantPathParams = ListConversationParticipantPathParams;
var ListConversationParticipantQueryParams = /** @class */ (function (_super) {
    __extends(ListConversationParticipantQueryParams, _super);
    function ListConversationParticipantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConversationParticipantQueryParams.prototype, "pageSize", void 0);
    return ListConversationParticipantQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListConversationParticipantQueryParams = ListConversationParticipantQueryParams;
var ListConversationParticipantSecurity = /** @class */ (function (_super) {
    __extends(ListConversationParticipantSecurity, _super);
    function ListConversationParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConversationParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConversationParticipantSecurity;
}(utils_1.SpeakeasyBase));
exports.ListConversationParticipantSecurity = ListConversationParticipantSecurity;
var ListConversationParticipantListConversationParticipantResponseMeta = /** @class */ (function (_super) {
    __extends(ListConversationParticipantListConversationParticipantResponseMeta, _super);
    function ListConversationParticipantListConversationParticipantResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListConversationParticipantListConversationParticipantResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListConversationParticipantListConversationParticipantResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListConversationParticipantListConversationParticipantResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConversationParticipantListConversationParticipantResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConversationParticipantListConversationParticipantResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListConversationParticipantListConversationParticipantResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListConversationParticipantListConversationParticipantResponseMeta.prototype, "url", void 0);
    return ListConversationParticipantListConversationParticipantResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListConversationParticipantListConversationParticipantResponseMeta = ListConversationParticipantListConversationParticipantResponseMeta;
var ListConversationParticipantListConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(ListConversationParticipantListConversationParticipantResponse, _super);
    function ListConversationParticipantListConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListConversationParticipantListConversationParticipantResponseMeta)
    ], ListConversationParticipantListConversationParticipantResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: shared.ConversationsV1ConversationConversationParticipant }),
        __metadata("design:type", Array)
    ], ListConversationParticipantListConversationParticipantResponse.prototype, "participants", void 0);
    return ListConversationParticipantListConversationParticipantResponse;
}(utils_1.SpeakeasyBase));
exports.ListConversationParticipantListConversationParticipantResponse = ListConversationParticipantListConversationParticipantResponse;
var ListConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(ListConversationParticipantRequest, _super);
    function ListConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConversationParticipantRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationParticipantPathParams)
    ], ListConversationParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationParticipantQueryParams)
    ], ListConversationParticipantRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationParticipantSecurity)
    ], ListConversationParticipantRequest.prototype, "security", void 0);
    return ListConversationParticipantRequest;
}(utils_1.SpeakeasyBase));
exports.ListConversationParticipantRequest = ListConversationParticipantRequest;
var ListConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(ListConversationParticipantResponse, _super);
    function ListConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConversationParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConversationParticipantListConversationParticipantResponse)
    ], ListConversationParticipantResponse.prototype, "listConversationParticipantResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListConversationParticipantResponse.prototype, "statusCode", void 0);
    return ListConversationParticipantResponse;
}(utils_1.SpeakeasyBase));
exports.ListConversationParticipantResponse = ListConversationParticipantResponse;
