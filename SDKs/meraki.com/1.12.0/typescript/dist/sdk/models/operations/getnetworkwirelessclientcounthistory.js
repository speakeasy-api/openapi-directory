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
exports.GetNetworkWirelessClientCountHistoryResponse = exports.GetNetworkWirelessClientCountHistoryRequest = exports.GetNetworkWirelessClientCountHistoryQueryParams = exports.GetNetworkWirelessClientCountHistoryBandEnum = exports.GetNetworkWirelessClientCountHistoryPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkWirelessClientCountHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientCountHistoryPathParams, _super);
    function GetNetworkWirelessClientCountHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientCountHistoryPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessClientCountHistoryPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientCountHistoryPathParams = GetNetworkWirelessClientCountHistoryPathParams;
var GetNetworkWirelessClientCountHistoryBandEnum;
(function (GetNetworkWirelessClientCountHistoryBandEnum) {
    GetNetworkWirelessClientCountHistoryBandEnum["Two4"] = "2.4";
    GetNetworkWirelessClientCountHistoryBandEnum["Five"] = "5";
})(GetNetworkWirelessClientCountHistoryBandEnum = exports.GetNetworkWirelessClientCountHistoryBandEnum || (exports.GetNetworkWirelessClientCountHistoryBandEnum = {}));
var GetNetworkWirelessClientCountHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientCountHistoryQueryParams, _super);
    function GetNetworkWirelessClientCountHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientCountHistoryQueryParams.prototype, "apTag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=autoResolution" }),
        __metadata("design:type", Boolean)
    ], GetNetworkWirelessClientCountHistoryQueryParams.prototype, "autoResolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientCountHistoryQueryParams.prototype, "band", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=clientId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientCountHistoryQueryParams.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=deviceSerial" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientCountHistoryQueryParams.prototype, "deviceSerial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientCountHistoryQueryParams.prototype, "resolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientCountHistoryQueryParams.prototype, "ssid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientCountHistoryQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientCountHistoryQueryParams.prototype, "t1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientCountHistoryQueryParams.prototype, "timespan", void 0);
    return GetNetworkWirelessClientCountHistoryQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientCountHistoryQueryParams = GetNetworkWirelessClientCountHistoryQueryParams;
var GetNetworkWirelessClientCountHistoryRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientCountHistoryRequest, _super);
    function GetNetworkWirelessClientCountHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkWirelessClientCountHistoryPathParams)
    ], GetNetworkWirelessClientCountHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkWirelessClientCountHistoryQueryParams)
    ], GetNetworkWirelessClientCountHistoryRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessClientCountHistoryRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientCountHistoryRequest = GetNetworkWirelessClientCountHistoryRequest;
var GetNetworkWirelessClientCountHistoryResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientCountHistoryResponse, _super);
    function GetNetworkWirelessClientCountHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientCountHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientCountHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkWirelessClientCountHistoryResponse.prototype, "getNetworkWirelessClientCountHistory200ApplicationJSONObject", void 0);
    return GetNetworkWirelessClientCountHistoryResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientCountHistoryResponse = GetNetworkWirelessClientCountHistoryResponse;
