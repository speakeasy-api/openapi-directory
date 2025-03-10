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
export var LISTHOSTEDNUMBERSDEPENDENTHOSTEDNUMBERORDER_SERVERS = [
    "https://preview.twilio.com",
];
var ListHostedNumbersDependentHostedNumberOrderPathParams = /** @class */ (function (_super) {
    __extends(ListHostedNumbersDependentHostedNumberOrderPathParams, _super);
    function ListHostedNumbersDependentHostedNumberOrderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=SigningDocumentSid" }),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderPathParams.prototype, "signingDocumentSid", void 0);
    return ListHostedNumbersDependentHostedNumberOrderPathParams;
}(SpeakeasyBase));
export { ListHostedNumbersDependentHostedNumberOrderPathParams };
var ListHostedNumbersDependentHostedNumberOrderQueryParams = /** @class */ (function (_super) {
    __extends(ListHostedNumbersDependentHostedNumberOrderQueryParams, _super);
    function ListHostedNumbersDependentHostedNumberOrderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IncomingPhoneNumberSid" }),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderQueryParams.prototype, "incomingPhoneNumberSid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListHostedNumbersDependentHostedNumberOrderQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" }),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderQueryParams.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderQueryParams.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UniqueName" }),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderQueryParams.prototype, "uniqueName", void 0);
    return ListHostedNumbersDependentHostedNumberOrderQueryParams;
}(SpeakeasyBase));
export { ListHostedNumbersDependentHostedNumberOrderQueryParams };
var ListHostedNumbersDependentHostedNumberOrderSecurity = /** @class */ (function (_super) {
    __extends(ListHostedNumbersDependentHostedNumberOrderSecurity, _super);
    function ListHostedNumbersDependentHostedNumberOrderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListHostedNumbersDependentHostedNumberOrderSecurity.prototype, "accountSidAuthToken", void 0);
    return ListHostedNumbersDependentHostedNumberOrderSecurity;
}(SpeakeasyBase));
export { ListHostedNumbersDependentHostedNumberOrderSecurity };
var ListHostedNumbersDependentHostedNumberOrderRequest = /** @class */ (function (_super) {
    __extends(ListHostedNumbersDependentHostedNumberOrderRequest, _super);
    function ListHostedNumbersDependentHostedNumberOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListHostedNumbersDependentHostedNumberOrderPathParams)
    ], ListHostedNumbersDependentHostedNumberOrderRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListHostedNumbersDependentHostedNumberOrderQueryParams)
    ], ListHostedNumbersDependentHostedNumberOrderRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListHostedNumbersDependentHostedNumberOrderSecurity)
    ], ListHostedNumbersDependentHostedNumberOrderRequest.prototype, "security", void 0);
    return ListHostedNumbersDependentHostedNumberOrderRequest;
}(SpeakeasyBase));
export { ListHostedNumbersDependentHostedNumberOrderRequest };
var ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta = /** @class */ (function (_super) {
    __extends(ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta, _super);
    function ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta.prototype, "url", void 0);
    return ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta;
}(SpeakeasyBase));
export { ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta };
var ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse = /** @class */ (function (_super) {
    __extends(ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse, _super);
    function ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=items", elemType: shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder }),
        __metadata("design:type", Array)
    ], ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse.prototype, "items", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta)
    ], ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse.prototype, "meta", void 0);
    return ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse;
}(SpeakeasyBase));
export { ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse };
var ListHostedNumbersDependentHostedNumberOrderResponse = /** @class */ (function (_super) {
    __extends(ListHostedNumbersDependentHostedNumberOrderResponse, _super);
    function ListHostedNumbersDependentHostedNumberOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListHostedNumbersDependentHostedNumberOrderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse)
    ], ListHostedNumbersDependentHostedNumberOrderResponse.prototype, "listHostedNumbersDependentHostedNumberOrderResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListHostedNumbersDependentHostedNumberOrderResponse.prototype, "statusCode", void 0);
    return ListHostedNumbersDependentHostedNumberOrderResponse;
}(SpeakeasyBase));
export { ListHostedNumbersDependentHostedNumberOrderResponse };
