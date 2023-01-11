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
exports.GetNetworkSmDeviceDesktopLogsResponse = exports.GetNetworkSmDeviceDesktopLogsRequest = exports.GetNetworkSmDeviceDesktopLogsQueryParams = exports.GetNetworkSmDeviceDesktopLogsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkSmDeviceDesktopLogsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceDesktopLogsPathParams, _super);
    function GetNetworkSmDeviceDesktopLogsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceDesktopLogsPathParams.prototype, "deviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceDesktopLogsPathParams.prototype, "networkId", void 0);
    return GetNetworkSmDeviceDesktopLogsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkSmDeviceDesktopLogsPathParams = GetNetworkSmDeviceDesktopLogsPathParams;
var GetNetworkSmDeviceDesktopLogsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceDesktopLogsQueryParams, _super);
    function GetNetworkSmDeviceDesktopLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceDesktopLogsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkSmDeviceDesktopLogsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceDesktopLogsQueryParams.prototype, "startingAfter", void 0);
    return GetNetworkSmDeviceDesktopLogsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkSmDeviceDesktopLogsQueryParams = GetNetworkSmDeviceDesktopLogsQueryParams;
var GetNetworkSmDeviceDesktopLogsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceDesktopLogsRequest, _super);
    function GetNetworkSmDeviceDesktopLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkSmDeviceDesktopLogsPathParams)
    ], GetNetworkSmDeviceDesktopLogsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkSmDeviceDesktopLogsQueryParams)
    ], GetNetworkSmDeviceDesktopLogsRequest.prototype, "queryParams", void 0);
    return GetNetworkSmDeviceDesktopLogsRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkSmDeviceDesktopLogsRequest = GetNetworkSmDeviceDesktopLogsRequest;
var GetNetworkSmDeviceDesktopLogsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceDesktopLogsResponse, _super);
    function GetNetworkSmDeviceDesktopLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceDesktopLogsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkSmDeviceDesktopLogsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkSmDeviceDesktopLogsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkSmDeviceDesktopLogsResponse.prototype, "getNetworkSmDeviceDesktopLogs200ApplicationJSONObject", void 0);
    return GetNetworkSmDeviceDesktopLogsResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkSmDeviceDesktopLogsResponse = GetNetworkSmDeviceDesktopLogsResponse;
