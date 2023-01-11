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
exports.ListChannelWebhookResponse = exports.ListChannelWebhookRequest = exports.ListChannelWebhookListChannelWebhookResponse = exports.ListChannelWebhookListChannelWebhookResponseMeta = exports.ListChannelWebhookSecurity = exports.ListChannelWebhookQueryParams = exports.ListChannelWebhookPathParams = exports.ListChannelWebhookServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListChannelWebhookServerList = [
    "https://ip-messaging.twilio.com",
];
var ListChannelWebhookPathParams = /** @class */ (function (_super) {
    __extends(ListChannelWebhookPathParams, _super);
    function ListChannelWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], ListChannelWebhookPathParams.prototype, "channelSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListChannelWebhookPathParams.prototype, "serviceSid", void 0);
    return ListChannelWebhookPathParams;
}(utils_1.SpeakeasyBase));
exports.ListChannelWebhookPathParams = ListChannelWebhookPathParams;
var ListChannelWebhookQueryParams = /** @class */ (function (_super) {
    __extends(ListChannelWebhookQueryParams, _super);
    function ListChannelWebhookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListChannelWebhookQueryParams.prototype, "pageSize", void 0);
    return ListChannelWebhookQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListChannelWebhookQueryParams = ListChannelWebhookQueryParams;
var ListChannelWebhookSecurity = /** @class */ (function (_super) {
    __extends(ListChannelWebhookSecurity, _super);
    function ListChannelWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListChannelWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return ListChannelWebhookSecurity;
}(utils_1.SpeakeasyBase));
exports.ListChannelWebhookSecurity = ListChannelWebhookSecurity;
var ListChannelWebhookListChannelWebhookResponseMeta = /** @class */ (function (_super) {
    __extends(ListChannelWebhookListChannelWebhookResponseMeta, _super);
    function ListChannelWebhookListChannelWebhookResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListChannelWebhookListChannelWebhookResponseMeta.prototype, "url", void 0);
    return ListChannelWebhookListChannelWebhookResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListChannelWebhookListChannelWebhookResponseMeta = ListChannelWebhookListChannelWebhookResponseMeta;
var ListChannelWebhookListChannelWebhookResponse = /** @class */ (function (_super) {
    __extends(ListChannelWebhookListChannelWebhookResponse, _super);
    function ListChannelWebhookListChannelWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListChannelWebhookListChannelWebhookResponseMeta)
    ], ListChannelWebhookListChannelWebhookResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhooks", elemType: shared.IpMessagingV2ServiceChannelChannelWebhook }),
        __metadata("design:type", Array)
    ], ListChannelWebhookListChannelWebhookResponse.prototype, "webhooks", void 0);
    return ListChannelWebhookListChannelWebhookResponse;
}(utils_1.SpeakeasyBase));
exports.ListChannelWebhookListChannelWebhookResponse = ListChannelWebhookListChannelWebhookResponse;
var ListChannelWebhookRequest = /** @class */ (function (_super) {
    __extends(ListChannelWebhookRequest, _super);
    function ListChannelWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListChannelWebhookRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListChannelWebhookPathParams)
    ], ListChannelWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListChannelWebhookQueryParams)
    ], ListChannelWebhookRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListChannelWebhookSecurity)
    ], ListChannelWebhookRequest.prototype, "security", void 0);
    return ListChannelWebhookRequest;
}(utils_1.SpeakeasyBase));
exports.ListChannelWebhookRequest = ListChannelWebhookRequest;
var ListChannelWebhookResponse = /** @class */ (function (_super) {
    __extends(ListChannelWebhookResponse, _super);
    function ListChannelWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListChannelWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListChannelWebhookListChannelWebhookResponse)
    ], ListChannelWebhookResponse.prototype, "listChannelWebhookResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListChannelWebhookResponse.prototype, "statusCode", void 0);
    return ListChannelWebhookResponse;
}(utils_1.SpeakeasyBase));
exports.ListChannelWebhookResponse = ListChannelWebhookResponse;
