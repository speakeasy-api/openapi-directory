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
exports.ListMessageResponse = exports.ListMessageRequest = exports.ListMessageListMessageResponse = exports.ListMessageListMessageResponseMeta = exports.ListMessageSecurity = exports.ListMessageQueryParams = exports.ListMessagePathParams = exports.ListMessageServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListMessageServerList = [
    "https://ip-messaging.twilio.com",
];
var ListMessagePathParams = /** @class */ (function (_super) {
    __extends(ListMessagePathParams, _super);
    function ListMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], ListMessagePathParams.prototype, "channelSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListMessagePathParams.prototype, "serviceSid", void 0);
    return ListMessagePathParams;
}(utils_1.SpeakeasyBase));
exports.ListMessagePathParams = ListMessagePathParams;
var ListMessageQueryParams = /** @class */ (function (_super) {
    __extends(ListMessageQueryParams, _super);
    function ListMessageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListMessageQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMessageQueryParams.prototype, "pageSize", void 0);
    return ListMessageQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListMessageQueryParams = ListMessageQueryParams;
var ListMessageSecurity = /** @class */ (function (_super) {
    __extends(ListMessageSecurity, _super);
    function ListMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMessageSecurity;
}(utils_1.SpeakeasyBase));
exports.ListMessageSecurity = ListMessageSecurity;
var ListMessageListMessageResponseMeta = /** @class */ (function (_super) {
    __extends(ListMessageListMessageResponseMeta, _super);
    function ListMessageListMessageResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMessageListMessageResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMessageListMessageResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMessageListMessageResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMessageListMessageResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMessageListMessageResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMessageListMessageResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMessageListMessageResponseMeta.prototype, "url", void 0);
    return ListMessageListMessageResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListMessageListMessageResponseMeta = ListMessageListMessageResponseMeta;
var ListMessageListMessageResponse = /** @class */ (function (_super) {
    __extends(ListMessageListMessageResponse, _super);
    function ListMessageListMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages", elemType: shared.IpMessagingV1ServiceChannelMessage }),
        __metadata("design:type", Array)
    ], ListMessageListMessageResponse.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListMessageListMessageResponseMeta)
    ], ListMessageListMessageResponse.prototype, "meta", void 0);
    return ListMessageListMessageResponse;
}(utils_1.SpeakeasyBase));
exports.ListMessageListMessageResponse = ListMessageListMessageResponse;
var ListMessageRequest = /** @class */ (function (_super) {
    __extends(ListMessageRequest, _super);
    function ListMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMessageRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMessagePathParams)
    ], ListMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMessageQueryParams)
    ], ListMessageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMessageSecurity)
    ], ListMessageRequest.prototype, "security", void 0);
    return ListMessageRequest;
}(utils_1.SpeakeasyBase));
exports.ListMessageRequest = ListMessageRequest;
var ListMessageResponse = /** @class */ (function (_super) {
    __extends(ListMessageResponse, _super);
    function ListMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMessageListMessageResponse)
    ], ListMessageResponse.prototype, "listMessageResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListMessageResponse.prototype, "statusCode", void 0);
    return ListMessageResponse;
}(utils_1.SpeakeasyBase));
exports.ListMessageResponse = ListMessageResponse;
