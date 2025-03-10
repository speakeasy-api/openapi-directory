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
export var CREATECOMMAND_SERVERS = [
    "https://wireless.twilio.com",
];
export var CreateCommandCreateCommandRequestCallbackMethodEnum;
(function (CreateCommandCreateCommandRequestCallbackMethodEnum) {
    CreateCommandCreateCommandRequestCallbackMethodEnum["Head"] = "HEAD";
    CreateCommandCreateCommandRequestCallbackMethodEnum["Get"] = "GET";
    CreateCommandCreateCommandRequestCallbackMethodEnum["Post"] = "POST";
    CreateCommandCreateCommandRequestCallbackMethodEnum["Patch"] = "PATCH";
    CreateCommandCreateCommandRequestCallbackMethodEnum["Put"] = "PUT";
    CreateCommandCreateCommandRequestCallbackMethodEnum["Delete"] = "DELETE";
})(CreateCommandCreateCommandRequestCallbackMethodEnum || (CreateCommandCreateCommandRequestCallbackMethodEnum = {}));
var CreateCommandCreateCommandRequest = /** @class */ (function (_super) {
    __extends(CreateCommandCreateCommandRequest, _super);
    function CreateCommandCreateCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "callbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "callbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=Command;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "command", void 0);
    __decorate([
        Metadata({ data: "form, name=CommandMode;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "commandMode", void 0);
    __decorate([
        Metadata({ data: "form, name=DeliveryReceiptRequested;" }),
        __metadata("design:type", Boolean)
    ], CreateCommandCreateCommandRequest.prototype, "deliveryReceiptRequested", void 0);
    __decorate([
        Metadata({ data: "form, name=IncludeSid;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "includeSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Sim;" }),
        __metadata("design:type", String)
    ], CreateCommandCreateCommandRequest.prototype, "sim", void 0);
    return CreateCommandCreateCommandRequest;
}(SpeakeasyBase));
export { CreateCommandCreateCommandRequest };
var CreateCommandSecurity = /** @class */ (function (_super) {
    __extends(CreateCommandSecurity, _super);
    function CreateCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCommandSecurity;
}(SpeakeasyBase));
export { CreateCommandSecurity };
var CreateCommandRequest = /** @class */ (function (_super) {
    __extends(CreateCommandRequest, _super);
    function CreateCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCommandRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCommandCreateCommandRequest)
    ], CreateCommandRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateCommandSecurity)
    ], CreateCommandRequest.prototype, "security", void 0);
    return CreateCommandRequest;
}(SpeakeasyBase));
export { CreateCommandRequest };
var CreateCommandResponse = /** @class */ (function (_super) {
    __extends(CreateCommandResponse, _super);
    function CreateCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCommandResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateCommandResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.WirelessV1Command)
    ], CreateCommandResponse.prototype, "wirelessV1Command", void 0);
    return CreateCommandResponse;
}(SpeakeasyBase));
export { CreateCommandResponse };
