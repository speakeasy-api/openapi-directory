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
exports.UpdateMessageResponse = exports.UpdateMessageRequest = exports.UpdateMessageSecurity = exports.UpdateMessageUpdateMessageRequest = exports.UpdateMessageHeaders = exports.UpdateMessagePathParams = exports.UpdateMessageServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateMessageServerList = [
    "https://ip-messaging.twilio.com",
];
var UpdateMessagePathParams = /** @class */ (function (_super) {
    __extends(UpdateMessagePathParams, _super);
    function UpdateMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], UpdateMessagePathParams.prototype, "channelSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateMessagePathParams.prototype, "serviceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateMessagePathParams.prototype, "sid", void 0);
    return UpdateMessagePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateMessagePathParams = UpdateMessagePathParams;
var UpdateMessageHeaders = /** @class */ (function (_super) {
    __extends(UpdateMessageHeaders, _super);
    function UpdateMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], UpdateMessageHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return UpdateMessageHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateMessageHeaders = UpdateMessageHeaders;
var UpdateMessageUpdateMessageRequest = /** @class */ (function (_super) {
    __extends(UpdateMessageUpdateMessageRequest, _super);
    function UpdateMessageUpdateMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateMessageUpdateMessageRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Body;" }),
        __metadata("design:type", String)
    ], UpdateMessageUpdateMessageRequest.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateCreated;" }),
        __metadata("design:type", Date)
    ], UpdateMessageUpdateMessageRequest.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DateUpdated;" }),
        __metadata("design:type", Date)
    ], UpdateMessageUpdateMessageRequest.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=From;" }),
        __metadata("design:type", String)
    ], UpdateMessageUpdateMessageRequest.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=LastUpdatedBy;" }),
        __metadata("design:type", String)
    ], UpdateMessageUpdateMessageRequest.prototype, "lastUpdatedBy", void 0);
    return UpdateMessageUpdateMessageRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateMessageUpdateMessageRequest = UpdateMessageUpdateMessageRequest;
var UpdateMessageSecurity = /** @class */ (function (_super) {
    __extends(UpdateMessageSecurity, _super);
    function UpdateMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateMessageSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateMessageSecurity = UpdateMessageSecurity;
var UpdateMessageRequest = /** @class */ (function (_super) {
    __extends(UpdateMessageRequest, _super);
    function UpdateMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateMessageRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMessagePathParams)
    ], UpdateMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMessageHeaders)
    ], UpdateMessageRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateMessageUpdateMessageRequest)
    ], UpdateMessageRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMessageSecurity)
    ], UpdateMessageRequest.prototype, "security", void 0);
    return UpdateMessageRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateMessageRequest = UpdateMessageRequest;
var UpdateMessageResponse = /** @class */ (function (_super) {
    __extends(UpdateMessageResponse, _super);
    function UpdateMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.IpMessagingV2ServiceChannelMessage)
    ], UpdateMessageResponse.prototype, "ipMessagingV2ServiceChannelMessage", void 0);
    return UpdateMessageResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateMessageResponse = UpdateMessageResponse;
