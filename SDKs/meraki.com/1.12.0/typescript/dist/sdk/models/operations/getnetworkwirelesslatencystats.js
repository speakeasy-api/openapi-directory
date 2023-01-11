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
exports.GetNetworkWirelessLatencyStatsResponse = exports.GetNetworkWirelessLatencyStatsRequest = exports.GetNetworkWirelessLatencyStatsQueryParams = exports.GetNetworkWirelessLatencyStatsBandEnum = exports.GetNetworkWirelessLatencyStatsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkWirelessLatencyStatsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessLatencyStatsPathParams, _super);
    function GetNetworkWirelessLatencyStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyStatsPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessLatencyStatsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessLatencyStatsPathParams = GetNetworkWirelessLatencyStatsPathParams;
var GetNetworkWirelessLatencyStatsBandEnum;
(function (GetNetworkWirelessLatencyStatsBandEnum) {
    GetNetworkWirelessLatencyStatsBandEnum["Two4"] = "2.4";
    GetNetworkWirelessLatencyStatsBandEnum["Five"] = "5";
})(GetNetworkWirelessLatencyStatsBandEnum = exports.GetNetworkWirelessLatencyStatsBandEnum || (exports.GetNetworkWirelessLatencyStatsBandEnum = {}));
var GetNetworkWirelessLatencyStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessLatencyStatsQueryParams, _super);
    function GetNetworkWirelessLatencyStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyStatsQueryParams.prototype, "apTag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyStatsQueryParams.prototype, "band", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyStatsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessLatencyStatsQueryParams.prototype, "ssid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyStatsQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyStatsQueryParams.prototype, "t1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessLatencyStatsQueryParams.prototype, "timespan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vlan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessLatencyStatsQueryParams.prototype, "vlan", void 0);
    return GetNetworkWirelessLatencyStatsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessLatencyStatsQueryParams = GetNetworkWirelessLatencyStatsQueryParams;
var GetNetworkWirelessLatencyStatsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessLatencyStatsRequest, _super);
    function GetNetworkWirelessLatencyStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkWirelessLatencyStatsPathParams)
    ], GetNetworkWirelessLatencyStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkWirelessLatencyStatsQueryParams)
    ], GetNetworkWirelessLatencyStatsRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessLatencyStatsRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessLatencyStatsRequest = GetNetworkWirelessLatencyStatsRequest;
var GetNetworkWirelessLatencyStatsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessLatencyStatsResponse, _super);
    function GetNetworkWirelessLatencyStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyStatsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessLatencyStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkWirelessLatencyStatsResponse.prototype, "getNetworkWirelessLatencyStats200ApplicationJSONObject", void 0);
    return GetNetworkWirelessLatencyStatsResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessLatencyStatsResponse = GetNetworkWirelessLatencyStatsResponse;
