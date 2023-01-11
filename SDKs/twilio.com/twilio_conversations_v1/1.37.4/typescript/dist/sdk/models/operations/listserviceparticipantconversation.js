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
exports.ListServiceParticipantConversationResponse = exports.ListServiceParticipantConversationRequest = exports.ListServiceParticipantConversationListServiceParticipantConversationResponse = exports.ListServiceParticipantConversationListServiceParticipantConversationResponseMeta = exports.ListServiceParticipantConversationSecurity = exports.ListServiceParticipantConversationQueryParams = exports.ListServiceParticipantConversationPathParams = exports.ListServiceParticipantConversationServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListServiceParticipantConversationServerList = [
    "https://conversations.twilio.com",
];
var ListServiceParticipantConversationPathParams = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationPathParams, _super);
    function ListServiceParticipantConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationPathParams.prototype, "chatServiceSid", void 0);
    return ListServiceParticipantConversationPathParams;
}(utils_1.SpeakeasyBase));
exports.ListServiceParticipantConversationPathParams = ListServiceParticipantConversationPathParams;
var ListServiceParticipantConversationQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationQueryParams, _super);
    function ListServiceParticipantConversationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Address" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationQueryParams.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationQueryParams.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceParticipantConversationQueryParams.prototype, "pageSize", void 0);
    return ListServiceParticipantConversationQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListServiceParticipantConversationQueryParams = ListServiceParticipantConversationQueryParams;
var ListServiceParticipantConversationSecurity = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationSecurity, _super);
    function ListServiceParticipantConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceParticipantConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceParticipantConversationSecurity;
}(utils_1.SpeakeasyBase));
exports.ListServiceParticipantConversationSecurity = ListServiceParticipantConversationSecurity;
var ListServiceParticipantConversationListServiceParticipantConversationResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationListServiceParticipantConversationResponseMeta, _super);
    function ListServiceParticipantConversationListServiceParticipantConversationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponseMeta.prototype, "url", void 0);
    return ListServiceParticipantConversationListServiceParticipantConversationResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListServiceParticipantConversationListServiceParticipantConversationResponseMeta = ListServiceParticipantConversationListServiceParticipantConversationResponseMeta;
var ListServiceParticipantConversationListServiceParticipantConversationResponse = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationListServiceParticipantConversationResponse, _super);
    function ListServiceParticipantConversationListServiceParticipantConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conversations", elemType: shared.ConversationsV1ServiceServiceParticipantConversation }),
        __metadata("design:type", Array)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponse.prototype, "conversations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceParticipantConversationListServiceParticipantConversationResponseMeta)
    ], ListServiceParticipantConversationListServiceParticipantConversationResponse.prototype, "meta", void 0);
    return ListServiceParticipantConversationListServiceParticipantConversationResponse;
}(utils_1.SpeakeasyBase));
exports.ListServiceParticipantConversationListServiceParticipantConversationResponse = ListServiceParticipantConversationListServiceParticipantConversationResponse;
var ListServiceParticipantConversationRequest = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationRequest, _super);
    function ListServiceParticipantConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceParticipantConversationPathParams)
    ], ListServiceParticipantConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceParticipantConversationQueryParams)
    ], ListServiceParticipantConversationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceParticipantConversationSecurity)
    ], ListServiceParticipantConversationRequest.prototype, "security", void 0);
    return ListServiceParticipantConversationRequest;
}(utils_1.SpeakeasyBase));
exports.ListServiceParticipantConversationRequest = ListServiceParticipantConversationRequest;
var ListServiceParticipantConversationResponse = /** @class */ (function (_super) {
    __extends(ListServiceParticipantConversationResponse, _super);
    function ListServiceParticipantConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListServiceParticipantConversationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceParticipantConversationListServiceParticipantConversationResponse)
    ], ListServiceParticipantConversationResponse.prototype, "listServiceParticipantConversationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListServiceParticipantConversationResponse.prototype, "statusCode", void 0);
    return ListServiceParticipantConversationResponse;
}(utils_1.SpeakeasyBase));
exports.ListServiceParticipantConversationResponse = ListServiceParticipantConversationResponse;
