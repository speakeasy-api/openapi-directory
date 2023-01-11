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
exports.ListDeviceResponse = exports.ListDeviceRequest = exports.ListDeviceListDeviceResponse = exports.ListDeviceListDeviceResponseMeta = exports.ListDeviceSecurity = exports.ListDeviceQueryParams = exports.ListDeviceServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListDeviceServerList = [
    "https://microvisor.twilio.com",
];
var ListDeviceQueryParams = /** @class */ (function (_super) {
    __extends(ListDeviceQueryParams, _super);
    function ListDeviceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDeviceQueryParams.prototype, "pageSize", void 0);
    return ListDeviceQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDeviceQueryParams = ListDeviceQueryParams;
var ListDeviceSecurity = /** @class */ (function (_super) {
    __extends(ListDeviceSecurity, _super);
    function ListDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDeviceSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDeviceSecurity;
}(utils_1.SpeakeasyBase));
exports.ListDeviceSecurity = ListDeviceSecurity;
var ListDeviceListDeviceResponseMeta = /** @class */ (function (_super) {
    __extends(ListDeviceListDeviceResponseMeta, _super);
    function ListDeviceListDeviceResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDeviceListDeviceResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeviceListDeviceResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDeviceListDeviceResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDeviceListDeviceResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDeviceListDeviceResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDeviceListDeviceResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDeviceListDeviceResponseMeta.prototype, "url", void 0);
    return ListDeviceListDeviceResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListDeviceListDeviceResponseMeta = ListDeviceListDeviceResponseMeta;
var ListDeviceListDeviceResponse = /** @class */ (function (_super) {
    __extends(ListDeviceListDeviceResponse, _super);
    function ListDeviceListDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=devices", elemType: shared.MicrovisorV1Device }),
        __metadata("design:type", Array)
    ], ListDeviceListDeviceResponse.prototype, "devices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListDeviceListDeviceResponseMeta)
    ], ListDeviceListDeviceResponse.prototype, "meta", void 0);
    return ListDeviceListDeviceResponse;
}(utils_1.SpeakeasyBase));
exports.ListDeviceListDeviceResponse = ListDeviceListDeviceResponse;
var ListDeviceRequest = /** @class */ (function (_super) {
    __extends(ListDeviceRequest, _super);
    function ListDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDeviceRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDeviceQueryParams)
    ], ListDeviceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDeviceSecurity)
    ], ListDeviceRequest.prototype, "security", void 0);
    return ListDeviceRequest;
}(utils_1.SpeakeasyBase));
exports.ListDeviceRequest = ListDeviceRequest;
var ListDeviceResponse = /** @class */ (function (_super) {
    __extends(ListDeviceResponse, _super);
    function ListDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDeviceListDeviceResponse)
    ], ListDeviceResponse.prototype, "listDeviceResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDeviceResponse.prototype, "statusCode", void 0);
    return ListDeviceResponse;
}(utils_1.SpeakeasyBase));
exports.ListDeviceResponse = ListDeviceResponse;
