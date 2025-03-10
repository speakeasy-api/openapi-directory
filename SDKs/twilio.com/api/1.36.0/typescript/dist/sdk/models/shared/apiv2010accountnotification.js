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
export var ApiV2010AccountNotificationRequestMethodEnum;
(function (ApiV2010AccountNotificationRequestMethodEnum) {
    ApiV2010AccountNotificationRequestMethodEnum["Head"] = "HEAD";
    ApiV2010AccountNotificationRequestMethodEnum["Get"] = "GET";
    ApiV2010AccountNotificationRequestMethodEnum["Post"] = "POST";
    ApiV2010AccountNotificationRequestMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountNotificationRequestMethodEnum["Put"] = "PUT";
    ApiV2010AccountNotificationRequestMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountNotificationRequestMethodEnum || (ApiV2010AccountNotificationRequestMethodEnum = {}));
var ApiV2010AccountNotification = /** @class */ (function (_super) {
    __extends(ApiV2010AccountNotification, _super);
    function ApiV2010AccountNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=call_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "callSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=error_code" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "errorCode", void 0);
    __decorate([
        Metadata({ data: "json, name=log" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "log", void 0);
    __decorate([
        Metadata({ data: "json, name=message_date" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "messageDate", void 0);
    __decorate([
        Metadata({ data: "json, name=message_text" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "messageText", void 0);
    __decorate([
        Metadata({ data: "json, name=more_info" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "moreInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=request_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "requestMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=request_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "requestUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotification.prototype, "uri", void 0);
    return ApiV2010AccountNotification;
}(SpeakeasyBase));
export { ApiV2010AccountNotification };
