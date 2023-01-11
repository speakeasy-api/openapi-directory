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
exports.GetNetworkWirelessClientConnectivityEventsResponse = exports.GetNetworkWirelessClientConnectivityEventsRequest = exports.GetNetworkWirelessClientConnectivityEventsQueryParams = exports.GetNetworkWirelessClientConnectivityEventsTypesEnum = exports.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum = exports.GetNetworkWirelessClientConnectivityEventsBandEnum = exports.GetNetworkWirelessClientConnectivityEventsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkWirelessClientConnectivityEventsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientConnectivityEventsPathParams, _super);
    function GetNetworkWirelessClientConnectivityEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectivityEventsPathParams.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectivityEventsPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessClientConnectivityEventsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientConnectivityEventsPathParams = GetNetworkWirelessClientConnectivityEventsPathParams;
var GetNetworkWirelessClientConnectivityEventsBandEnum;
(function (GetNetworkWirelessClientConnectivityEventsBandEnum) {
    GetNetworkWirelessClientConnectivityEventsBandEnum["Two4"] = "2.4";
    GetNetworkWirelessClientConnectivityEventsBandEnum["Five"] = "5";
})(GetNetworkWirelessClientConnectivityEventsBandEnum = exports.GetNetworkWirelessClientConnectivityEventsBandEnum || (exports.GetNetworkWirelessClientConnectivityEventsBandEnum = {}));
var GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum;
(function (GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum) {
    GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum["Good"] = "good";
    GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum["Info"] = "info";
    GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum["Warn"] = "warn";
    GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum["Bad"] = "bad";
})(GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum = exports.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum || (exports.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum = {}));
var GetNetworkWirelessClientConnectivityEventsTypesEnum;
(function (GetNetworkWirelessClientConnectivityEventsTypesEnum) {
    GetNetworkWirelessClientConnectivityEventsTypesEnum["Assoc"] = "assoc";
    GetNetworkWirelessClientConnectivityEventsTypesEnum["Disassoc"] = "disassoc";
    GetNetworkWirelessClientConnectivityEventsTypesEnum["Auth"] = "auth";
    GetNetworkWirelessClientConnectivityEventsTypesEnum["Deauth"] = "deauth";
    GetNetworkWirelessClientConnectivityEventsTypesEnum["Dns"] = "dns";
    GetNetworkWirelessClientConnectivityEventsTypesEnum["Dhcp"] = "dhcp";
    GetNetworkWirelessClientConnectivityEventsTypesEnum["Roam"] = "roam";
    GetNetworkWirelessClientConnectivityEventsTypesEnum["Connection"] = "connection";
    GetNetworkWirelessClientConnectivityEventsTypesEnum["Sticky"] = "sticky";
})(GetNetworkWirelessClientConnectivityEventsTypesEnum = exports.GetNetworkWirelessClientConnectivityEventsTypesEnum || (exports.GetNetworkWirelessClientConnectivityEventsTypesEnum = {}));
var GetNetworkWirelessClientConnectivityEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientConnectivityEventsQueryParams, _super);
    function GetNetworkWirelessClientConnectivityEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectivityEventsQueryParams.prototype, "band", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=deviceSerial" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectivityEventsQueryParams.prototype, "deviceSerial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectivityEventsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=includedSeverities" }),
        __metadata("design:type", Array)
    ], GetNetworkWirelessClientConnectivityEventsQueryParams.prototype, "includedSeverities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientConnectivityEventsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ssidNumber" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientConnectivityEventsQueryParams.prototype, "ssidNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectivityEventsQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectivityEventsQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectivityEventsQueryParams.prototype, "t1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientConnectivityEventsQueryParams.prototype, "timespan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=types" }),
        __metadata("design:type", Array)
    ], GetNetworkWirelessClientConnectivityEventsQueryParams.prototype, "types", void 0);
    return GetNetworkWirelessClientConnectivityEventsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientConnectivityEventsQueryParams = GetNetworkWirelessClientConnectivityEventsQueryParams;
var GetNetworkWirelessClientConnectivityEventsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientConnectivityEventsRequest, _super);
    function GetNetworkWirelessClientConnectivityEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkWirelessClientConnectivityEventsPathParams)
    ], GetNetworkWirelessClientConnectivityEventsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkWirelessClientConnectivityEventsQueryParams)
    ], GetNetworkWirelessClientConnectivityEventsRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessClientConnectivityEventsRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientConnectivityEventsRequest = GetNetworkWirelessClientConnectivityEventsRequest;
var GetNetworkWirelessClientConnectivityEventsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientConnectivityEventsResponse, _super);
    function GetNetworkWirelessClientConnectivityEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientConnectivityEventsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkWirelessClientConnectivityEventsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientConnectivityEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkWirelessClientConnectivityEventsResponse.prototype, "getNetworkWirelessClientConnectivityEvents200ApplicationJSONObject", void 0);
    return GetNetworkWirelessClientConnectivityEventsResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessClientConnectivityEventsResponse = GetNetworkWirelessClientConnectivityEventsResponse;
