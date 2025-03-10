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
export var ListFlexFlowServerList = [
    "https://flex-api.twilio.com",
];
var ListFlexFlowQueryParams = /** @class */ (function (_super) {
    __extends(ListFlexFlowQueryParams, _super);
    function ListFlexFlowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListFlexFlowQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFlexFlowQueryParams.prototype, "pageSize", void 0);
    return ListFlexFlowQueryParams;
}(SpeakeasyBase));
export { ListFlexFlowQueryParams };
var ListFlexFlowSecurity = /** @class */ (function (_super) {
    __extends(ListFlexFlowSecurity, _super);
    function ListFlexFlowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFlexFlowSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFlexFlowSecurity;
}(SpeakeasyBase));
export { ListFlexFlowSecurity };
var ListFlexFlowListFlexFlowResponseMeta = /** @class */ (function (_super) {
    __extends(ListFlexFlowListFlexFlowResponseMeta, _super);
    function ListFlexFlowListFlexFlowResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFlexFlowListFlexFlowResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFlexFlowListFlexFlowResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFlexFlowListFlexFlowResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFlexFlowListFlexFlowResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFlexFlowListFlexFlowResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFlexFlowListFlexFlowResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFlexFlowListFlexFlowResponseMeta.prototype, "url", void 0);
    return ListFlexFlowListFlexFlowResponseMeta;
}(SpeakeasyBase));
export { ListFlexFlowListFlexFlowResponseMeta };
var ListFlexFlowListFlexFlowResponse = /** @class */ (function (_super) {
    __extends(ListFlexFlowListFlexFlowResponse, _super);
    function ListFlexFlowListFlexFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flex_flows", elemType: shared.FlexV1FlexFlow }),
        __metadata("design:type", Array)
    ], ListFlexFlowListFlexFlowResponse.prototype, "flexFlows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListFlexFlowListFlexFlowResponseMeta)
    ], ListFlexFlowListFlexFlowResponse.prototype, "meta", void 0);
    return ListFlexFlowListFlexFlowResponse;
}(SpeakeasyBase));
export { ListFlexFlowListFlexFlowResponse };
var ListFlexFlowRequest = /** @class */ (function (_super) {
    __extends(ListFlexFlowRequest, _super);
    function ListFlexFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFlexFlowRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFlexFlowQueryParams)
    ], ListFlexFlowRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFlexFlowSecurity)
    ], ListFlexFlowRequest.prototype, "security", void 0);
    return ListFlexFlowRequest;
}(SpeakeasyBase));
export { ListFlexFlowRequest };
var ListFlexFlowResponse = /** @class */ (function (_super) {
    __extends(ListFlexFlowResponse, _super);
    function ListFlexFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFlexFlowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFlexFlowListFlexFlowResponse)
    ], ListFlexFlowResponse.prototype, "listFlexFlowResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListFlexFlowResponse.prototype, "statusCode", void 0);
    return ListFlexFlowResponse;
}(SpeakeasyBase));
export { ListFlexFlowResponse };
