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
export var UPDATEENDUSER_SERVERS = [
    "https://trusthub.twilio.com",
];
var UpdateEndUserPathParams = /** @class */ (function (_super) {
    __extends(UpdateEndUserPathParams, _super);
    function UpdateEndUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateEndUserPathParams.prototype, "sid", void 0);
    return UpdateEndUserPathParams;
}(SpeakeasyBase));
export { UpdateEndUserPathParams };
var UpdateEndUserUpdateEndUserRequest = /** @class */ (function (_super) {
    __extends(UpdateEndUserUpdateEndUserRequest, _super);
    function UpdateEndUserUpdateEndUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", Object)
    ], UpdateEndUserUpdateEndUserRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateEndUserUpdateEndUserRequest.prototype, "friendlyName", void 0);
    return UpdateEndUserUpdateEndUserRequest;
}(SpeakeasyBase));
export { UpdateEndUserUpdateEndUserRequest };
var UpdateEndUserSecurity = /** @class */ (function (_super) {
    __extends(UpdateEndUserSecurity, _super);
    function UpdateEndUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateEndUserSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateEndUserSecurity;
}(SpeakeasyBase));
export { UpdateEndUserSecurity };
var UpdateEndUserRequest = /** @class */ (function (_super) {
    __extends(UpdateEndUserRequest, _super);
    function UpdateEndUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateEndUserRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateEndUserPathParams)
    ], UpdateEndUserRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateEndUserUpdateEndUserRequest)
    ], UpdateEndUserRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateEndUserSecurity)
    ], UpdateEndUserRequest.prototype, "security", void 0);
    return UpdateEndUserRequest;
}(SpeakeasyBase));
export { UpdateEndUserRequest };
var UpdateEndUserResponse = /** @class */ (function (_super) {
    __extends(UpdateEndUserResponse, _super);
    function UpdateEndUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateEndUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateEndUserResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrusthubV1EndUser)
    ], UpdateEndUserResponse.prototype, "trusthubV1EndUser", void 0);
    return UpdateEndUserResponse;
}(SpeakeasyBase));
export { UpdateEndUserResponse };
