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
export var FetchCredentialAwsServerList = [
    "https://accounts.twilio.com",
];
var FetchCredentialAwsPathParams = /** @class */ (function (_super) {
    __extends(FetchCredentialAwsPathParams, _super);
    function FetchCredentialAwsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchCredentialAwsPathParams.prototype, "sid", void 0);
    return FetchCredentialAwsPathParams;
}(SpeakeasyBase));
export { FetchCredentialAwsPathParams };
var FetchCredentialAwsSecurity = /** @class */ (function (_super) {
    __extends(FetchCredentialAwsSecurity, _super);
    function FetchCredentialAwsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchCredentialAwsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchCredentialAwsSecurity;
}(SpeakeasyBase));
export { FetchCredentialAwsSecurity };
var FetchCredentialAwsRequest = /** @class */ (function (_super) {
    __extends(FetchCredentialAwsRequest, _super);
    function FetchCredentialAwsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchCredentialAwsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchCredentialAwsPathParams)
    ], FetchCredentialAwsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchCredentialAwsSecurity)
    ], FetchCredentialAwsRequest.prototype, "security", void 0);
    return FetchCredentialAwsRequest;
}(SpeakeasyBase));
export { FetchCredentialAwsRequest };
var FetchCredentialAwsResponse = /** @class */ (function (_super) {
    __extends(FetchCredentialAwsResponse, _super);
    function FetchCredentialAwsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchCredentialAwsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchCredentialAwsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountsV1CredentialCredentialAws)
    ], FetchCredentialAwsResponse.prototype, "accountsV1CredentialCredentialAws", void 0);
    return FetchCredentialAwsResponse;
}(SpeakeasyBase));
export { FetchCredentialAwsResponse };
