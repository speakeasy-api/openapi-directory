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
export var ListConnectionPolicyServerList = [
    "https://voice.twilio.com",
];
var ListConnectionPolicyQueryParams = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyQueryParams, _super);
    function ListConnectionPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConnectionPolicyQueryParams.prototype, "pageSize", void 0);
    return ListConnectionPolicyQueryParams;
}(SpeakeasyBase));
export { ListConnectionPolicyQueryParams };
var ListConnectionPolicySecurity = /** @class */ (function (_super) {
    __extends(ListConnectionPolicySecurity, _super);
    function ListConnectionPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConnectionPolicySecurity.prototype, "accountSidAuthToken", void 0);
    return ListConnectionPolicySecurity;
}(SpeakeasyBase));
export { ListConnectionPolicySecurity };
var ListConnectionPolicyListConnectionPolicyResponseMeta = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyListConnectionPolicyResponseMeta, _super);
    function ListConnectionPolicyListConnectionPolicyResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListConnectionPolicyListConnectionPolicyResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListConnectionPolicyListConnectionPolicyResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListConnectionPolicyListConnectionPolicyResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConnectionPolicyListConnectionPolicyResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConnectionPolicyListConnectionPolicyResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListConnectionPolicyListConnectionPolicyResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListConnectionPolicyListConnectionPolicyResponseMeta.prototype, "url", void 0);
    return ListConnectionPolicyListConnectionPolicyResponseMeta;
}(SpeakeasyBase));
export { ListConnectionPolicyListConnectionPolicyResponseMeta };
var ListConnectionPolicyListConnectionPolicyResponse = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyListConnectionPolicyResponse, _super);
    function ListConnectionPolicyListConnectionPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_policies", elemType: shared.VoiceV1ConnectionPolicy }),
        __metadata("design:type", Array)
    ], ListConnectionPolicyListConnectionPolicyResponse.prototype, "connectionPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListConnectionPolicyListConnectionPolicyResponseMeta)
    ], ListConnectionPolicyListConnectionPolicyResponse.prototype, "meta", void 0);
    return ListConnectionPolicyListConnectionPolicyResponse;
}(SpeakeasyBase));
export { ListConnectionPolicyListConnectionPolicyResponse };
var ListConnectionPolicyRequest = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyRequest, _super);
    function ListConnectionPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListConnectionPolicyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConnectionPolicyQueryParams)
    ], ListConnectionPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConnectionPolicySecurity)
    ], ListConnectionPolicyRequest.prototype, "security", void 0);
    return ListConnectionPolicyRequest;
}(SpeakeasyBase));
export { ListConnectionPolicyRequest };
var ListConnectionPolicyResponse = /** @class */ (function (_super) {
    __extends(ListConnectionPolicyResponse, _super);
    function ListConnectionPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListConnectionPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConnectionPolicyListConnectionPolicyResponse)
    ], ListConnectionPolicyResponse.prototype, "listConnectionPolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListConnectionPolicyResponse.prototype, "statusCode", void 0);
    return ListConnectionPolicyResponse;
}(SpeakeasyBase));
export { ListConnectionPolicyResponse };
