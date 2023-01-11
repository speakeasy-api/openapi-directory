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
exports.GetDeviceCameraAnalyticsZoneHistoryResponse = exports.GetDeviceCameraAnalyticsZoneHistoryRequest = exports.GetDeviceCameraAnalyticsZoneHistoryQueryParams = exports.GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum = exports.GetDeviceCameraAnalyticsZoneHistoryPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeviceCameraAnalyticsZoneHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsZoneHistoryPathParams, _super);
    function GetDeviceCameraAnalyticsZoneHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsZoneHistoryPathParams.prototype, "serial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=zoneId" }),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsZoneHistoryPathParams.prototype, "zoneId", void 0);
    return GetDeviceCameraAnalyticsZoneHistoryPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDeviceCameraAnalyticsZoneHistoryPathParams = GetDeviceCameraAnalyticsZoneHistoryPathParams;
var GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum;
(function (GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum) {
    GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum["Person"] = "person";
    GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum["Vehicle"] = "vehicle";
})(GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum = exports.GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum || (exports.GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum = {}));
var GetDeviceCameraAnalyticsZoneHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsZoneHistoryQueryParams, _super);
    function GetDeviceCameraAnalyticsZoneHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=objectType" }),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsZoneHistoryQueryParams.prototype, "objectType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", Number)
    ], GetDeviceCameraAnalyticsZoneHistoryQueryParams.prototype, "resolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsZoneHistoryQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsZoneHistoryQueryParams.prototype, "t1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetDeviceCameraAnalyticsZoneHistoryQueryParams.prototype, "timespan", void 0);
    return GetDeviceCameraAnalyticsZoneHistoryQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeviceCameraAnalyticsZoneHistoryQueryParams = GetDeviceCameraAnalyticsZoneHistoryQueryParams;
var GetDeviceCameraAnalyticsZoneHistoryRequest = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsZoneHistoryRequest, _super);
    function GetDeviceCameraAnalyticsZoneHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeviceCameraAnalyticsZoneHistoryPathParams)
    ], GetDeviceCameraAnalyticsZoneHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeviceCameraAnalyticsZoneHistoryQueryParams)
    ], GetDeviceCameraAnalyticsZoneHistoryRequest.prototype, "queryParams", void 0);
    return GetDeviceCameraAnalyticsZoneHistoryRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeviceCameraAnalyticsZoneHistoryRequest = GetDeviceCameraAnalyticsZoneHistoryRequest;
var GetDeviceCameraAnalyticsZoneHistoryResponse = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsZoneHistoryResponse, _super);
    function GetDeviceCameraAnalyticsZoneHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsZoneHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeviceCameraAnalyticsZoneHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDeviceCameraAnalyticsZoneHistoryResponse.prototype, "getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObject", void 0);
    return GetDeviceCameraAnalyticsZoneHistoryResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeviceCameraAnalyticsZoneHistoryResponse = GetDeviceCameraAnalyticsZoneHistoryResponse;
