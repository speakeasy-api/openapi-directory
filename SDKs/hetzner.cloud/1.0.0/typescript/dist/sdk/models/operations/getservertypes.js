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
exports.GetServerTypesResponse = exports.GetServerTypesRequest = exports.GetServerTypes200ApplicationJson = exports.GetServerTypes200ApplicationJsonServerTypes = exports.GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum = exports.GetServerTypes200ApplicationJsonServerTypesPrices = exports.GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly = exports.GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly = exports.GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum = exports.GetServerTypesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetServerTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetServerTypesQueryParams, _super);
    function GetServerTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetServerTypesQueryParams.prototype, "name", void 0);
    return GetServerTypesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetServerTypesQueryParams = GetServerTypesQueryParams;
var GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum;
(function (GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum) {
    GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum["Shared"] = "shared";
    GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum["Dedicated"] = "dedicated";
})(GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum = exports.GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum || (exports.GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum = {}));
// GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly
/**
 * Hourly costs for a Server type in this Location
**/
var GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly = /** @class */ (function (_super) {
    __extends(GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly, _super);
    function GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly.prototype, "net", void 0);
    return GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly;
}(utils_1.SpeakeasyBase));
exports.GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly = GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly;
// GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly
/**
 * Monthly costs for a Server type in this Location
**/
var GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly = /** @class */ (function (_super) {
    __extends(GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly, _super);
    function GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly.prototype, "net", void 0);
    return GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly;
}(utils_1.SpeakeasyBase));
exports.GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly = GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly;
var GetServerTypes200ApplicationJsonServerTypesPrices = /** @class */ (function (_super) {
    __extends(GetServerTypes200ApplicationJsonServerTypesPrices, _super);
    function GetServerTypes200ApplicationJsonServerTypesPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetServerTypes200ApplicationJsonServerTypesPrices.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price_hourly" }),
        __metadata("design:type", GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly)
    ], GetServerTypes200ApplicationJsonServerTypesPrices.prototype, "priceHourly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly)
    ], GetServerTypes200ApplicationJsonServerTypesPrices.prototype, "priceMonthly", void 0);
    return GetServerTypes200ApplicationJsonServerTypesPrices;
}(utils_1.SpeakeasyBase));
exports.GetServerTypes200ApplicationJsonServerTypesPrices = GetServerTypes200ApplicationJsonServerTypesPrices;
var GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum;
(function (GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum) {
    GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum["Local"] = "local";
    GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum["Network"] = "network";
})(GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum = exports.GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum || (exports.GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum = {}));
var GetServerTypes200ApplicationJsonServerTypes = /** @class */ (function (_super) {
    __extends(GetServerTypes200ApplicationJsonServerTypes, _super);
    function GetServerTypes200ApplicationJsonServerTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cores" }),
        __metadata("design:type", Number)
    ], GetServerTypes200ApplicationJsonServerTypes.prototype, "cores", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpu_type" }),
        __metadata("design:type", String)
    ], GetServerTypes200ApplicationJsonServerTypes.prototype, "cpuType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deprecated" }),
        __metadata("design:type", Boolean)
    ], GetServerTypes200ApplicationJsonServerTypes.prototype, "deprecated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServerTypes200ApplicationJsonServerTypes.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], GetServerTypes200ApplicationJsonServerTypes.prototype, "disk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServerTypes200ApplicationJsonServerTypes.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], GetServerTypes200ApplicationJsonServerTypes.prototype, "memory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServerTypes200ApplicationJsonServerTypes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prices", elemType: GetServerTypes200ApplicationJsonServerTypesPrices }),
        __metadata("design:type", Array)
    ], GetServerTypes200ApplicationJsonServerTypes.prototype, "prices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storage_type" }),
        __metadata("design:type", String)
    ], GetServerTypes200ApplicationJsonServerTypes.prototype, "storageType", void 0);
    return GetServerTypes200ApplicationJsonServerTypes;
}(utils_1.SpeakeasyBase));
exports.GetServerTypes200ApplicationJsonServerTypes = GetServerTypes200ApplicationJsonServerTypes;
var GetServerTypes200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetServerTypes200ApplicationJson, _super);
    function GetServerTypes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=server_types", elemType: GetServerTypes200ApplicationJsonServerTypes }),
        __metadata("design:type", Array)
    ], GetServerTypes200ApplicationJson.prototype, "serverTypes", void 0);
    return GetServerTypes200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetServerTypes200ApplicationJson = GetServerTypes200ApplicationJson;
var GetServerTypesRequest = /** @class */ (function (_super) {
    __extends(GetServerTypesRequest, _super);
    function GetServerTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetServerTypesQueryParams)
    ], GetServerTypesRequest.prototype, "queryParams", void 0);
    return GetServerTypesRequest;
}(utils_1.SpeakeasyBase));
exports.GetServerTypesRequest = GetServerTypesRequest;
var GetServerTypesResponse = /** @class */ (function (_super) {
    __extends(GetServerTypesResponse, _super);
    function GetServerTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetServerTypesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetServerTypesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetServerTypes200ApplicationJson)
    ], GetServerTypesResponse.prototype, "getServerTypes200ApplicationJSONObject", void 0);
    return GetServerTypesResponse;
}(utils_1.SpeakeasyBase));
exports.GetServerTypesResponse = GetServerTypesResponse;
