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
exports.GetNetworkClientsResponse = exports.GetNetworkClientsRequest = exports.GetNetworkClientsQueryParams = exports.GetNetworkClientsStatusesEnum = exports.GetNetworkClientsRecentDeviceConnectionsEnum = exports.GetNetworkClientsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkClientsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkClientsPathParams, _super);
    function GetNetworkClientsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkClientsPathParams.prototype, "networkId", void 0);
    return GetNetworkClientsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientsPathParams = GetNetworkClientsPathParams;
var GetNetworkClientsRecentDeviceConnectionsEnum;
(function (GetNetworkClientsRecentDeviceConnectionsEnum) {
    GetNetworkClientsRecentDeviceConnectionsEnum["Wired"] = "Wired";
    GetNetworkClientsRecentDeviceConnectionsEnum["Wireless"] = "Wireless";
})(GetNetworkClientsRecentDeviceConnectionsEnum = exports.GetNetworkClientsRecentDeviceConnectionsEnum || (exports.GetNetworkClientsRecentDeviceConnectionsEnum = {}));
var GetNetworkClientsStatusesEnum;
(function (GetNetworkClientsStatusesEnum) {
    GetNetworkClientsStatusesEnum["Online"] = "Online";
    GetNetworkClientsStatusesEnum["Offline"] = "Offline";
})(GetNetworkClientsStatusesEnum = exports.GetNetworkClientsStatusesEnum || (exports.GetNetworkClientsStatusesEnum = {}));
var GetNetworkClientsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkClientsQueryParams, _super);
    function GetNetworkClientsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], GetNetworkClientsQueryParams.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkClientsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ip" }),
        __metadata("design:type", String)
    ], GetNetworkClientsQueryParams.prototype, "ip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ip6" }),
        __metadata("design:type", String)
    ], GetNetworkClientsQueryParams.prototype, "ip6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ip6Local" }),
        __metadata("design:type", String)
    ], GetNetworkClientsQueryParams.prototype, "ip6Local", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=mac" }),
        __metadata("design:type", String)
    ], GetNetworkClientsQueryParams.prototype, "mac", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=os" }),
        __metadata("design:type", String)
    ], GetNetworkClientsQueryParams.prototype, "os", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkClientsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=recentDeviceConnections" }),
        __metadata("design:type", Array)
    ], GetNetworkClientsQueryParams.prototype, "recentDeviceConnections", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkClientsQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=statuses" }),
        __metadata("design:type", Array)
    ], GetNetworkClientsQueryParams.prototype, "statuses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkClientsQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkClientsQueryParams.prototype, "timespan", void 0);
    return GetNetworkClientsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientsQueryParams = GetNetworkClientsQueryParams;
var GetNetworkClientsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkClientsRequest, _super);
    function GetNetworkClientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkClientsPathParams)
    ], GetNetworkClientsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkClientsQueryParams)
    ], GetNetworkClientsRequest.prototype, "queryParams", void 0);
    return GetNetworkClientsRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientsRequest = GetNetworkClientsRequest;
var GetNetworkClientsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkClientsResponse, _super);
    function GetNetworkClientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkClientsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkClientsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkClientsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkClientsResponse.prototype, "getNetworkClients200ApplicationJSONObject", void 0);
    return GetNetworkClientsResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkClientsResponse = GetNetworkClientsResponse;
