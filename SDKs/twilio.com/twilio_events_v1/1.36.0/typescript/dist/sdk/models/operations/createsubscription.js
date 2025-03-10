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
export var CREATESUBSCRIPTION_SERVERS = [
    "https://events.twilio.com",
];
var CreateSubscriptionCreateSubscriptionRequest = /** @class */ (function (_super) {
    __extends(CreateSubscriptionCreateSubscriptionRequest, _super);
    function CreateSubscriptionCreateSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Description;" }),
        __metadata("design:type", String)
    ], CreateSubscriptionCreateSubscriptionRequest.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "form, name=SinkSid;" }),
        __metadata("design:type", String)
    ], CreateSubscriptionCreateSubscriptionRequest.prototype, "sinkSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Types;" }),
        __metadata("design:type", Array)
    ], CreateSubscriptionCreateSubscriptionRequest.prototype, "types", void 0);
    return CreateSubscriptionCreateSubscriptionRequest;
}(SpeakeasyBase));
export { CreateSubscriptionCreateSubscriptionRequest };
var CreateSubscriptionSecurity = /** @class */ (function (_super) {
    __extends(CreateSubscriptionSecurity, _super);
    function CreateSubscriptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSubscriptionSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSubscriptionSecurity;
}(SpeakeasyBase));
export { CreateSubscriptionSecurity };
var CreateSubscriptionRequest = /** @class */ (function (_super) {
    __extends(CreateSubscriptionRequest, _super);
    function CreateSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSubscriptionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSubscriptionCreateSubscriptionRequest)
    ], CreateSubscriptionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSubscriptionSecurity)
    ], CreateSubscriptionRequest.prototype, "security", void 0);
    return CreateSubscriptionRequest;
}(SpeakeasyBase));
export { CreateSubscriptionRequest };
var CreateSubscriptionResponse = /** @class */ (function (_super) {
    __extends(CreateSubscriptionResponse, _super);
    function CreateSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSubscriptionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.EventsV1Subscription)
    ], CreateSubscriptionResponse.prototype, "eventsV1Subscription", void 0);
    return CreateSubscriptionResponse;
}(SpeakeasyBase));
export { CreateSubscriptionResponse };
