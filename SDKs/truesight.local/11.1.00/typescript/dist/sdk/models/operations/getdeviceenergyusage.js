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
exports.GetDeviceEnergyUsageResponse = exports.GetDeviceEnergyUsageRequest = exports.GetDeviceEnergyUsageQueryParams = exports.GetDeviceEnergyUsageRollPeriodEnum = exports.GetDeviceEnergyUsageBasisEnum = exports.GetDeviceEnergyUsagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeviceEnergyUsagePathParams = /** @class */ (function (_super) {
    __extends(GetDeviceEnergyUsagePathParams, _super);
    function GetDeviceEnergyUsagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", Number)
    ], GetDeviceEnergyUsagePathParams.prototype, "deviceId", void 0);
    return GetDeviceEnergyUsagePathParams;
}(utils_1.SpeakeasyBase));
exports.GetDeviceEnergyUsagePathParams = GetDeviceEnergyUsagePathParams;
var GetDeviceEnergyUsageBasisEnum;
(function (GetDeviceEnergyUsageBasisEnum) {
    GetDeviceEnergyUsageBasisEnum["Monthly"] = "MONTHLY";
    GetDeviceEnergyUsageBasisEnum["Daily"] = "DAILY";
    GetDeviceEnergyUsageBasisEnum["Hourly"] = "HOURLY";
})(GetDeviceEnergyUsageBasisEnum = exports.GetDeviceEnergyUsageBasisEnum || (exports.GetDeviceEnergyUsageBasisEnum = {}));
var GetDeviceEnergyUsageRollPeriodEnum;
(function (GetDeviceEnergyUsageRollPeriodEnum) {
    GetDeviceEnergyUsageRollPeriodEnum["OneDay"] = "ONE_DAY";
    GetDeviceEnergyUsageRollPeriodEnum["OneWeek"] = "ONE_WEEK";
    GetDeviceEnergyUsageRollPeriodEnum["OneMonth"] = "ONE_MONTH";
    GetDeviceEnergyUsageRollPeriodEnum["SixMonths"] = "SIX_MONTHS";
    GetDeviceEnergyUsageRollPeriodEnum["OneYear"] = "ONE_YEAR";
})(GetDeviceEnergyUsageRollPeriodEnum = exports.GetDeviceEnergyUsageRollPeriodEnum || (exports.GetDeviceEnergyUsageRollPeriodEnum = {}));
var GetDeviceEnergyUsageQueryParams = /** @class */ (function (_super) {
    __extends(GetDeviceEnergyUsageQueryParams, _super);
    function GetDeviceEnergyUsageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=basis" }),
        __metadata("design:type", String)
    ], GetDeviceEnergyUsageQueryParams.prototype, "basis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rollPeriod" }),
        __metadata("design:type", String)
    ], GetDeviceEnergyUsageQueryParams.prototype, "rollPeriod", void 0);
    return GetDeviceEnergyUsageQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeviceEnergyUsageQueryParams = GetDeviceEnergyUsageQueryParams;
var GetDeviceEnergyUsageRequest = /** @class */ (function (_super) {
    __extends(GetDeviceEnergyUsageRequest, _super);
    function GetDeviceEnergyUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeviceEnergyUsagePathParams)
    ], GetDeviceEnergyUsageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeviceEnergyUsageQueryParams)
    ], GetDeviceEnergyUsageRequest.prototype, "queryParams", void 0);
    return GetDeviceEnergyUsageRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeviceEnergyUsageRequest = GetDeviceEnergyUsageRequest;
var GetDeviceEnergyUsageResponse = /** @class */ (function (_super) {
    __extends(GetDeviceEnergyUsageResponse, _super);
    function GetDeviceEnergyUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDeviceEnergyUsageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeviceEnergyUsageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeviceEnergyUsageResponse.prototype, "statusCode", void 0);
    return GetDeviceEnergyUsageResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeviceEnergyUsageResponse = GetDeviceEnergyUsageResponse;
