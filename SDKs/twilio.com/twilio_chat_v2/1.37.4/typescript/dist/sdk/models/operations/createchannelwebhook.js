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
exports.CreateChannelWebhookResponse = exports.CreateChannelWebhookRequest = exports.CreateChannelWebhookSecurity = exports.CreateChannelWebhookCreateChannelWebhookRequest = exports.CreateChannelWebhookPathParams = exports.CreateChannelWebhookServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateChannelWebhookServerList = [
    "https://chat.twilio.com",
];
var CreateChannelWebhookPathParams = /** @class */ (function (_super) {
    __extends(CreateChannelWebhookPathParams, _super);
    function CreateChannelWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], CreateChannelWebhookPathParams.prototype, "channelSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateChannelWebhookPathParams.prototype, "serviceSid", void 0);
    return CreateChannelWebhookPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateChannelWebhookPathParams = CreateChannelWebhookPathParams;
var CreateChannelWebhookCreateChannelWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateChannelWebhookCreateChannelWebhookRequest, _super);
    function CreateChannelWebhookCreateChannelWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.Filters;" }),
        __metadata("design:type", Array)
    ], CreateChannelWebhookCreateChannelWebhookRequest.prototype, "configurationFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.FlowSid;" }),
        __metadata("design:type", String)
    ], CreateChannelWebhookCreateChannelWebhookRequest.prototype, "configurationFlowSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.Method;" }),
        __metadata("design:type", String)
    ], CreateChannelWebhookCreateChannelWebhookRequest.prototype, "configurationMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.RetryCount;" }),
        __metadata("design:type", Number)
    ], CreateChannelWebhookCreateChannelWebhookRequest.prototype, "configurationRetryCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.Triggers;" }),
        __metadata("design:type", Array)
    ], CreateChannelWebhookCreateChannelWebhookRequest.prototype, "configurationTriggers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Configuration.Url;" }),
        __metadata("design:type", String)
    ], CreateChannelWebhookCreateChannelWebhookRequest.prototype, "configurationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Type;" }),
        __metadata("design:type", String)
    ], CreateChannelWebhookCreateChannelWebhookRequest.prototype, "type", void 0);
    return CreateChannelWebhookCreateChannelWebhookRequest;
}(utils_1.SpeakeasyBase));
exports.CreateChannelWebhookCreateChannelWebhookRequest = CreateChannelWebhookCreateChannelWebhookRequest;
var CreateChannelWebhookSecurity = /** @class */ (function (_super) {
    __extends(CreateChannelWebhookSecurity, _super);
    function CreateChannelWebhookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateChannelWebhookSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateChannelWebhookSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateChannelWebhookSecurity = CreateChannelWebhookSecurity;
var CreateChannelWebhookRequest = /** @class */ (function (_super) {
    __extends(CreateChannelWebhookRequest, _super);
    function CreateChannelWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateChannelWebhookRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateChannelWebhookPathParams)
    ], CreateChannelWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateChannelWebhookCreateChannelWebhookRequest)
    ], CreateChannelWebhookRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateChannelWebhookSecurity)
    ], CreateChannelWebhookRequest.prototype, "security", void 0);
    return CreateChannelWebhookRequest;
}(utils_1.SpeakeasyBase));
exports.CreateChannelWebhookRequest = CreateChannelWebhookRequest;
var CreateChannelWebhookResponse = /** @class */ (function (_super) {
    __extends(CreateChannelWebhookResponse, _super);
    function CreateChannelWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateChannelWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateChannelWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ChatV2ServiceChannelChannelWebhook)
    ], CreateChannelWebhookResponse.prototype, "chatV2ServiceChannelChannelWebhook", void 0);
    return CreateChannelWebhookResponse;
}(utils_1.SpeakeasyBase));
exports.CreateChannelWebhookResponse = CreateChannelWebhookResponse;
