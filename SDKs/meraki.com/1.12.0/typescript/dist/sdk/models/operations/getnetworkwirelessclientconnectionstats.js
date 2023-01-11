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
exports.GetNetworkWirelessClientConnectionStatsResponse = exports.GetNetworkWirelessClientConnectionStatsRequest = exports.GetNetworkWirelessClientConnectionStatsQueryParams = exports.GetNetworkWirelessClientConnectionStatsBandEnum = exports.GetNetworkWirelessClientConnectionStatsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkWirelessClientConnectionStatsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientConnectionStatsPathParams, _super);
    function GetNetworkWirelessClientConnectionStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectionStatsPathParams.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectionStatsPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessClientConnectionStatsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientConnectionStatsPathParams = GetNetworkWirelessClientConnectionStatsPathParams;
var GetNetworkWirelessClientConnectionStatsBandEnum;
(function (GetNetworkWirelessClientConnectionStatsBandEnum) {
    GetNetworkWirelessClientConnectionStatsBandEnum["Two4"] = "2.4";
    GetNetworkWirelessClientConnectionStatsBandEnum["Five"] = "5";
})(GetNetworkWirelessClientConnectionStatsBandEnum = exports.GetNetworkWirelessClientConnectionStatsBandEnum || (exports.GetNetworkWirelessClientConnectionStatsBandEnum = {}));
var GetNetworkWirelessClientConnectionStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientConnectionStatsQueryParams, _super);
    function GetNetworkWirelessClientConnectionStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectionStatsQueryParams.prototype, "apTag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectionStatsQueryParams.prototype, "band", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientConnectionStatsQueryParams.prototype, "ssid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectionStatsQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectionStatsQueryParams.prototype, "t1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientConnectionStatsQueryParams.prototype, "timespan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vlan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientConnectionStatsQueryParams.prototype, "vlan", void 0);
    return GetNetworkWirelessClientConnectionStatsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientConnectionStatsQueryParams = GetNetworkWirelessClientConnectionStatsQueryParams;
var GetNetworkWirelessClientConnectionStatsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientConnectionStatsRequest, _super);
    function GetNetworkWirelessClientConnectionStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkWirelessClientConnectionStatsPathParams)
    ], GetNetworkWirelessClientConnectionStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkWirelessClientConnectionStatsQueryParams)
    ], GetNetworkWirelessClientConnectionStatsRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessClientConnectionStatsRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientConnectionStatsRequest = GetNetworkWirelessClientConnectionStatsRequest;
var GetNetworkWirelessClientConnectionStatsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientConnectionStatsResponse, _super);
    function GetNetworkWirelessClientConnectionStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectionStatsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientConnectionStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkWirelessClientConnectionStatsResponse.prototype, "getNetworkWirelessClientConnectionStats200ApplicationJSONObject", void 0);
    return GetNetworkWirelessClientConnectionStatsResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientConnectionStatsResponse = GetNetworkWirelessClientConnectionStatsResponse;
