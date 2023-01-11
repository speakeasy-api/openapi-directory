"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSimIpAddressResponse = exports.ListSimIpAddressRequest = exports.ListSimIpAddressListSimIpAddressResponse = exports.ListSimIpAddressListSimIpAddressResponseMeta = exports.ListSimIpAddressSecurity = exports.ListSimIpAddressQueryParams = exports.ListSimIpAddressPathParams = exports.ListSimIpAddressServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListSimIpAddressServerList = [
    "https://supersim.twilio.com",
];
var ListSimIpAddressPathParams = /** @class */ (function (_super) {
    __extends(ListSimIpAddressPathParams, _super);
    function ListSimIpAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=SimSid" }),
        __metadata("design:type", String)
    ], ListSimIpAddressPathParams.prototype, "simSid", void 0);
    return ListSimIpAddressPathParams;
}(utils_1.SpeakeasyBase));
exports.ListSimIpAddressPathParams = ListSimIpAddressPathParams;
var ListSimIpAddressQueryParams = /** @class */ (function (_super) {
    __extends(ListSimIpAddressQueryParams, _super);
    function ListSimIpAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSimIpAddressQueryParams.prototype, "pageSize", void 0);
    return ListSimIpAddressQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSimIpAddressQueryParams = ListSimIpAddressQueryParams;
var ListSimIpAddressSecurity = /** @class */ (function (_super) {
    __extends(ListSimIpAddressSecurity, _super);
    function ListSimIpAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSimIpAddressSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSimIpAddressSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSimIpAddressSecurity = ListSimIpAddressSecurity;
var ListSimIpAddressListSimIpAddressResponseMeta = /** @class */ (function (_super) {
    __extends(ListSimIpAddressListSimIpAddressResponseMeta, _super);
    function ListSimIpAddressListSimIpAddressResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSimIpAddressListSimIpAddressResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSimIpAddressListSimIpAddressResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSimIpAddressListSimIpAddressResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSimIpAddressListSimIpAddressResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSimIpAddressListSimIpAddressResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSimIpAddressListSimIpAddressResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSimIpAddressListSimIpAddressResponseMeta.prototype, "url", void 0);
    return ListSimIpAddressListSimIpAddressResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListSimIpAddressListSimIpAddressResponseMeta = ListSimIpAddressListSimIpAddressResponseMeta;
var ListSimIpAddressListSimIpAddressResponse = /** @class */ (function (_super) {
    __extends(ListSimIpAddressListSimIpAddressResponse, _super);
    function ListSimIpAddressListSimIpAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses", elemType: shared.SupersimV1SimSimIpAddress }),
        __metadata("design:type", Array)
    ], ListSimIpAddressListSimIpAddressResponse.prototype, "ipAddresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListSimIpAddressListSimIpAddressResponseMeta)
    ], ListSimIpAddressListSimIpAddressResponse.prototype, "meta", void 0);
    return ListSimIpAddressListSimIpAddressResponse;
}(utils_1.SpeakeasyBase));
exports.ListSimIpAddressListSimIpAddressResponse = ListSimIpAddressListSimIpAddressResponse;
var ListSimIpAddressRequest = /** @class */ (function (_super) {
    __extends(ListSimIpAddressRequest, _super);
    function ListSimIpAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSimIpAddressRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSimIpAddressPathParams)
    ], ListSimIpAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSimIpAddressQueryParams)
    ], ListSimIpAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSimIpAddressSecurity)
    ], ListSimIpAddressRequest.prototype, "security", void 0);
    return ListSimIpAddressRequest;
}(utils_1.SpeakeasyBase));
exports.ListSimIpAddressRequest = ListSimIpAddressRequest;
var ListSimIpAddressResponse = /** @class */ (function (_super) {
    __extends(ListSimIpAddressResponse, _super);
    function ListSimIpAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSimIpAddressResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSimIpAddressListSimIpAddressResponse)
    ], ListSimIpAddressResponse.prototype, "listSimIpAddressResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSimIpAddressResponse.prototype, "statusCode", void 0);
    return ListSimIpAddressResponse;
}(utils_1.SpeakeasyBase));
exports.ListSimIpAddressResponse = ListSimIpAddressResponse;
