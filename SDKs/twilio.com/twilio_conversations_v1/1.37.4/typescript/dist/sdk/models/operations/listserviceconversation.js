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
exports.ListServiceConversationResponse = exports.ListServiceConversationRequest = exports.ListServiceConversationListServiceConversationResponse = exports.ListServiceConversationListServiceConversationResponseMeta = exports.ListServiceConversationSecurity = exports.ListServiceConversationQueryParams = exports.ListServiceConversationPathParams = exports.ListServiceConversationServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListServiceConversationServerList = [
    "https://conversations.twilio.com",
];
var ListServiceConversationPathParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationPathParams, _super);
    function ListServiceConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceConversationPathParams.prototype, "chatServiceSid", void 0);
    return ListServiceConversationPathParams;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationPathParams = ListServiceConversationPathParams;
var ListServiceConversationQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceConversationQueryParams, _super);
    function ListServiceConversationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceConversationQueryParams.prototype, "pageSize", void 0);
    return ListServiceConversationQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationQueryParams = ListServiceConversationQueryParams;
var ListServiceConversationSecurity = /** @class */ (function (_super) {
    __extends(ListServiceConversationSecurity, _super);
    function ListServiceConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceConversationSecurity;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationSecurity = ListServiceConversationSecurity;
var ListServiceConversationListServiceConversationResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceConversationListServiceConversationResponseMeta, _super);
    function ListServiceConversationListServiceConversationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceConversationListServiceConversationResponseMeta.prototype, "url", void 0);
    return ListServiceConversationListServiceConversationResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationListServiceConversationResponseMeta = ListServiceConversationListServiceConversationResponseMeta;
var ListServiceConversationListServiceConversationResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationListServiceConversationResponse, _super);
    function ListServiceConversationListServiceConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conversations", elemType: shared.ConversationsV1ServiceServiceConversation }),
        __metadata("design:type", Array)
    ], ListServiceConversationListServiceConversationResponse.prototype, "conversations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceConversationListServiceConversationResponseMeta)
    ], ListServiceConversationListServiceConversationResponse.prototype, "meta", void 0);
    return ListServiceConversationListServiceConversationResponse;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationListServiceConversationResponse = ListServiceConversationListServiceConversationResponse;
var ListServiceConversationRequest = /** @class */ (function (_super) {
    __extends(ListServiceConversationRequest, _super);
    function ListServiceConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListServiceConversationRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationPathParams)
    ], ListServiceConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationQueryParams)
    ], ListServiceConversationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationSecurity)
    ], ListServiceConversationRequest.prototype, "security", void 0);
    return ListServiceConversationRequest;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationRequest = ListServiceConversationRequest;
var ListServiceConversationResponse = /** @class */ (function (_super) {
    __extends(ListServiceConversationResponse, _super);
    function ListServiceConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListServiceConversationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceConversationListServiceConversationResponse)
    ], ListServiceConversationResponse.prototype, "listServiceConversationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListServiceConversationResponse.prototype, "statusCode", void 0);
    return ListServiceConversationResponse;
}(utils_1.SpeakeasyBase));
exports.ListServiceConversationResponse = ListServiceConversationResponse;
