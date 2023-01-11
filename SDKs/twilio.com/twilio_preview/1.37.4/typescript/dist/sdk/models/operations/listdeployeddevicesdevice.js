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
exports.ListDeployedDevicesDeviceResponse = exports.ListDeployedDevicesDeviceRequest = exports.ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse = exports.ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta = exports.ListDeployedDevicesDeviceSecurity = exports.ListDeployedDevicesDeviceQueryParams = exports.ListDeployedDevicesDevicePathParams = exports.ListDeployedDevicesDeviceServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListDeployedDevicesDeviceServerList = [
    "https://preview.twilio.com",
];
var ListDeployedDevicesDevicePathParams = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDevicePathParams, _super);
    function ListDeployedDevicesDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDevicePathParams.prototype, "fleetSid", void 0);
    return ListDeployedDevicesDevicePathParams;
}(utils_1.SpeakeasyBase));
exports.ListDeployedDevicesDevicePathParams = ListDeployedDevicesDevicePathParams;
var ListDeployedDevicesDeviceQueryParams = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceQueryParams, _super);
    function ListDeployedDevicesDeviceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DeploymentSid" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceQueryParams.prototype, "deploymentSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeviceQueryParams.prototype, "pageSize", void 0);
    return ListDeployedDevicesDeviceQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDeployedDevicesDeviceQueryParams = ListDeployedDevicesDeviceQueryParams;
var ListDeployedDevicesDeviceSecurity = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceSecurity, _super);
    function ListDeployedDevicesDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDeployedDevicesDeviceSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDeployedDevicesDeviceSecurity;
}(utils_1.SpeakeasyBase));
exports.ListDeployedDevicesDeviceSecurity = ListDeployedDevicesDeviceSecurity;
var ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta, _super);
    function ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta.prototype, "url", void 0);
    return ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta = ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta;
var ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse, _super);
    function ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=devices", elemType: shared.PreviewDeployedDevicesFleetDevice }),
        __metadata("design:type", Array)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse.prototype, "devices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta)
    ], ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse.prototype, "meta", void 0);
    return ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse;
}(utils_1.SpeakeasyBase));
exports.ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse = ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse;
var ListDeployedDevicesDeviceRequest = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceRequest, _super);
    function ListDeployedDevicesDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDeployedDevicesDevicePathParams)
    ], ListDeployedDevicesDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDeployedDevicesDeviceQueryParams)
    ], ListDeployedDevicesDeviceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDeployedDevicesDeviceSecurity)
    ], ListDeployedDevicesDeviceRequest.prototype, "security", void 0);
    return ListDeployedDevicesDeviceRequest;
}(utils_1.SpeakeasyBase));
exports.ListDeployedDevicesDeviceRequest = ListDeployedDevicesDeviceRequest;
var ListDeployedDevicesDeviceResponse = /** @class */ (function (_super) {
    __extends(ListDeployedDevicesDeviceResponse, _super);
    function ListDeployedDevicesDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDeployedDevicesDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse)
    ], ListDeployedDevicesDeviceResponse.prototype, "listDeployedDevicesDeviceResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDeployedDevicesDeviceResponse.prototype, "statusCode", void 0);
    return ListDeployedDevicesDeviceResponse;
}(utils_1.SpeakeasyBase));
exports.ListDeployedDevicesDeviceResponse = ListDeployedDevicesDeviceResponse;
