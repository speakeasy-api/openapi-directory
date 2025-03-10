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
export var DELETETASKCHANNEL_SERVERS = [
    "https://taskrouter.twilio.com",
];
var DeleteTaskChannelPathParams = /** @class */ (function (_super) {
    __extends(DeleteTaskChannelPathParams, _super);
    function DeleteTaskChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteTaskChannelPathParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], DeleteTaskChannelPathParams.prototype, "workspaceSid", void 0);
    return DeleteTaskChannelPathParams;
}(SpeakeasyBase));
export { DeleteTaskChannelPathParams };
var DeleteTaskChannelSecurity = /** @class */ (function (_super) {
    __extends(DeleteTaskChannelSecurity, _super);
    function DeleteTaskChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteTaskChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteTaskChannelSecurity;
}(SpeakeasyBase));
export { DeleteTaskChannelSecurity };
var DeleteTaskChannelRequest = /** @class */ (function (_super) {
    __extends(DeleteTaskChannelRequest, _super);
    function DeleteTaskChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteTaskChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteTaskChannelPathParams)
    ], DeleteTaskChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteTaskChannelSecurity)
    ], DeleteTaskChannelRequest.prototype, "security", void 0);
    return DeleteTaskChannelRequest;
}(SpeakeasyBase));
export { DeleteTaskChannelRequest };
var DeleteTaskChannelResponse = /** @class */ (function (_super) {
    __extends(DeleteTaskChannelResponse, _super);
    function DeleteTaskChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteTaskChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteTaskChannelResponse.prototype, "statusCode", void 0);
    return DeleteTaskChannelResponse;
}(SpeakeasyBase));
export { DeleteTaskChannelResponse };
