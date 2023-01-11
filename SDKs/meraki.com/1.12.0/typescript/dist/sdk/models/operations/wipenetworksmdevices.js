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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WipeNetworkSmDevicesResponse = exports.WipeNetworkSmDevicesRequest = exports.WipeNetworkSmDevicesRequestBody = exports.WipeNetworkSmDevicesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var WipeNetworkSmDevicesPathParams = /** @class */ (function (_super) {
    __extends(WipeNetworkSmDevicesPathParams, _super);
    function WipeNetworkSmDevicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], WipeNetworkSmDevicesPathParams.prototype, "networkId", void 0);
    return WipeNetworkSmDevicesPathParams;
}(utils_1.SpeakeasyBase));
exports.WipeNetworkSmDevicesPathParams = WipeNetworkSmDevicesPathParams;
var WipeNetworkSmDevicesRequestBody = /** @class */ (function (_super) {
    __extends(WipeNetworkSmDevicesRequestBody, _super);
    function WipeNetworkSmDevicesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WipeNetworkSmDevicesRequestBody.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pin" }),
        __metadata("design:type", Number)
    ], WipeNetworkSmDevicesRequestBody.prototype, "pin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], WipeNetworkSmDevicesRequestBody.prototype, "serial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wifiMac" }),
        __metadata("design:type", String)
    ], WipeNetworkSmDevicesRequestBody.prototype, "wifiMac", void 0);
    return WipeNetworkSmDevicesRequestBody;
}(utils_1.SpeakeasyBase));
exports.WipeNetworkSmDevicesRequestBody = WipeNetworkSmDevicesRequestBody;
var WipeNetworkSmDevicesRequest = /** @class */ (function (_super) {
    __extends(WipeNetworkSmDevicesRequest, _super);
    function WipeNetworkSmDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WipeNetworkSmDevicesPathParams)
    ], WipeNetworkSmDevicesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", WipeNetworkSmDevicesRequestBody)
    ], WipeNetworkSmDevicesRequest.prototype, "request", void 0);
    return WipeNetworkSmDevicesRequest;
}(utils_1.SpeakeasyBase));
exports.WipeNetworkSmDevicesRequest = WipeNetworkSmDevicesRequest;
var WipeNetworkSmDevicesResponse = /** @class */ (function (_super) {
    __extends(WipeNetworkSmDevicesResponse, _super);
    function WipeNetworkSmDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WipeNetworkSmDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WipeNetworkSmDevicesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], WipeNetworkSmDevicesResponse.prototype, "wipeNetworkSmDevices200ApplicationJSONObject", void 0);
    return WipeNetworkSmDevicesResponse;
}(utils_1.SpeakeasyBase));
exports.WipeNetworkSmDevicesResponse = WipeNetworkSmDevicesResponse;
