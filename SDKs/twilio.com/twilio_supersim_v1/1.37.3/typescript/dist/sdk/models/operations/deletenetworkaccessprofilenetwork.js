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
export var DeleteNetworkAccessProfileNetworkServerList = [
    "https://supersim.twilio.com",
];
var DeleteNetworkAccessProfileNetworkPathParams = /** @class */ (function (_super) {
    __extends(DeleteNetworkAccessProfileNetworkPathParams, _super);
    function DeleteNetworkAccessProfileNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=NetworkAccessProfileSid" }),
        __metadata("design:type", String)
    ], DeleteNetworkAccessProfileNetworkPathParams.prototype, "networkAccessProfileSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteNetworkAccessProfileNetworkPathParams.prototype, "sid", void 0);
    return DeleteNetworkAccessProfileNetworkPathParams;
}(SpeakeasyBase));
export { DeleteNetworkAccessProfileNetworkPathParams };
var DeleteNetworkAccessProfileNetworkSecurity = /** @class */ (function (_super) {
    __extends(DeleteNetworkAccessProfileNetworkSecurity, _super);
    function DeleteNetworkAccessProfileNetworkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteNetworkAccessProfileNetworkSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteNetworkAccessProfileNetworkSecurity;
}(SpeakeasyBase));
export { DeleteNetworkAccessProfileNetworkSecurity };
var DeleteNetworkAccessProfileNetworkRequest = /** @class */ (function (_super) {
    __extends(DeleteNetworkAccessProfileNetworkRequest, _super);
    function DeleteNetworkAccessProfileNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteNetworkAccessProfileNetworkRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteNetworkAccessProfileNetworkPathParams)
    ], DeleteNetworkAccessProfileNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteNetworkAccessProfileNetworkSecurity)
    ], DeleteNetworkAccessProfileNetworkRequest.prototype, "security", void 0);
    return DeleteNetworkAccessProfileNetworkRequest;
}(SpeakeasyBase));
export { DeleteNetworkAccessProfileNetworkRequest };
var DeleteNetworkAccessProfileNetworkResponse = /** @class */ (function (_super) {
    __extends(DeleteNetworkAccessProfileNetworkResponse, _super);
    function DeleteNetworkAccessProfileNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteNetworkAccessProfileNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteNetworkAccessProfileNetworkResponse.prototype, "statusCode", void 0);
    return DeleteNetworkAccessProfileNetworkResponse;
}(SpeakeasyBase));
export { DeleteNetworkAccessProfileNetworkResponse };
