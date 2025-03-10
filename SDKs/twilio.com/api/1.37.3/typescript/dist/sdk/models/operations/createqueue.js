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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var CreateQueueServerList = [
    "https://api.twilio.com",
];
var CreateQueuePathParams = /** @class */ (function (_super) {
    __extends(CreateQueuePathParams, _super);
    function CreateQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateQueuePathParams.prototype, "accountSid", void 0);
    return CreateQueuePathParams;
}(SpeakeasyBase));
export { CreateQueuePathParams };
var CreateQueueCreateQueueRequest = /** @class */ (function (_super) {
    __extends(CreateQueueCreateQueueRequest, _super);
    function CreateQueueCreateQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateQueueCreateQueueRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MaxSize;" }),
        __metadata("design:type", Number)
    ], CreateQueueCreateQueueRequest.prototype, "maxSize", void 0);
    return CreateQueueCreateQueueRequest;
}(SpeakeasyBase));
export { CreateQueueCreateQueueRequest };
var CreateQueueSecurity = /** @class */ (function (_super) {
    __extends(CreateQueueSecurity, _super);
    function CreateQueueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateQueueSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateQueueSecurity;
}(SpeakeasyBase));
export { CreateQueueSecurity };
var CreateQueueRequest = /** @class */ (function (_super) {
    __extends(CreateQueueRequest, _super);
    function CreateQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateQueueRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateQueuePathParams)
    ], CreateQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateQueueCreateQueueRequest)
    ], CreateQueueRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateQueueSecurity)
    ], CreateQueueRequest.prototype, "security", void 0);
    return CreateQueueRequest;
}(SpeakeasyBase));
export { CreateQueueRequest };
var CreateQueueResponse = /** @class */ (function (_super) {
    __extends(CreateQueueResponse, _super);
    function CreateQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateQueueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateQueueResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountQueue)
    ], CreateQueueResponse.prototype, "apiV2010AccountQueue", void 0);
    return CreateQueueResponse;
}(SpeakeasyBase));
export { CreateQueueResponse };
