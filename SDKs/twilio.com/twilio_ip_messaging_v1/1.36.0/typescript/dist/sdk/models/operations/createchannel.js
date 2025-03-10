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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var CREATECHANNEL_SERVERS = [
    "https://ip-messaging.twilio.com",
];
var CreateChannelPathParams = /** @class */ (function (_super) {
    __extends(CreateChannelPathParams, _super);
    function CreateChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateChannelPathParams.prototype, "serviceSid", void 0);
    return CreateChannelPathParams;
}(SpeakeasyBase));
export { CreateChannelPathParams };
var CreateChannelCreateChannelRequest = /** @class */ (function (_super) {
    __extends(CreateChannelCreateChannelRequest, _super);
    function CreateChannelCreateChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateChannelCreateChannelRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateChannelCreateChannelRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Type;" }),
        __metadata("design:type", String)
    ], CreateChannelCreateChannelRequest.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateChannelCreateChannelRequest.prototype, "uniqueName", void 0);
    return CreateChannelCreateChannelRequest;
}(SpeakeasyBase));
export { CreateChannelCreateChannelRequest };
var CreateChannelSecurity = /** @class */ (function (_super) {
    __extends(CreateChannelSecurity, _super);
    function CreateChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateChannelSecurity;
}(SpeakeasyBase));
export { CreateChannelSecurity };
var CreateChannelRequest = /** @class */ (function (_super) {
    __extends(CreateChannelRequest, _super);
    function CreateChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateChannelPathParams)
    ], CreateChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateChannelCreateChannelRequest)
    ], CreateChannelRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateChannelSecurity)
    ], CreateChannelRequest.prototype, "security", void 0);
    return CreateChannelRequest;
}(SpeakeasyBase));
export { CreateChannelRequest };
var CreateChannelResponse = /** @class */ (function (_super) {
    __extends(CreateChannelResponse, _super);
    function CreateChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.IpMessagingV1ServiceChannel)
    ], CreateChannelResponse.prototype, "ipMessagingV1ServiceChannel", void 0);
    return CreateChannelResponse;
}(SpeakeasyBase));
export { CreateChannelResponse };
