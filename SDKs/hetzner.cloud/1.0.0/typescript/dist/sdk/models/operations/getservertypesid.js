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
exports.GetServerTypesIdResponse = exports.GetServerTypesIdRequest = exports.GetServerTypesId200ApplicationJson = exports.GetServerTypesId200ApplicationJsonServerType = exports.GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum = exports.GetServerTypesId200ApplicationJsonServerTypePrices = exports.GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly = exports.GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly = exports.GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum = exports.GetServerTypesIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetServerTypesIdPathParams = /** @class */ (function (_super) {
    __extends(GetServerTypesIdPathParams, _super);
    function GetServerTypesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetServerTypesIdPathParams.prototype, "id", void 0);
    return GetServerTypesIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetServerTypesIdPathParams = GetServerTypesIdPathParams;
var GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum;
(function (GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum) {
    GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum["Shared"] = "shared";
    GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum["Dedicated"] = "dedicated";
})(GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum = exports.GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum || (exports.GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum = {}));
// GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly
/**
 * Hourly costs for a Server type in this Location
**/
var GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly = /** @class */ (function (_super) {
    __extends(GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly, _super);
    function GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly.prototype, "net", void 0);
    return GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly;
}(utils_1.SpeakeasyBase));
exports.GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly = GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly;
// GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly
/**
 * Monthly costs for a Server type in this Location
**/
var GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly = /** @class */ (function (_super) {
    __extends(GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly, _super);
    function GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly.prototype, "net", void 0);
    return GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly;
}(utils_1.SpeakeasyBase));
exports.GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly = GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly;
var GetServerTypesId200ApplicationJsonServerTypePrices = /** @class */ (function (_super) {
    __extends(GetServerTypesId200ApplicationJsonServerTypePrices, _super);
    function GetServerTypesId200ApplicationJsonServerTypePrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetServerTypesId200ApplicationJsonServerTypePrices.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price_hourly" }),
        __metadata("design:type", GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly)
    ], GetServerTypesId200ApplicationJsonServerTypePrices.prototype, "priceHourly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly)
    ], GetServerTypesId200ApplicationJsonServerTypePrices.prototype, "priceMonthly", void 0);
    return GetServerTypesId200ApplicationJsonServerTypePrices;
}(utils_1.SpeakeasyBase));
exports.GetServerTypesId200ApplicationJsonServerTypePrices = GetServerTypesId200ApplicationJsonServerTypePrices;
var GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum;
(function (GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum) {
    GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum["Local"] = "local";
    GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum["Network"] = "network";
})(GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum = exports.GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum || (exports.GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum = {}));
var GetServerTypesId200ApplicationJsonServerType = /** @class */ (function (_super) {
    __extends(GetServerTypesId200ApplicationJsonServerType, _super);
    function GetServerTypesId200ApplicationJsonServerType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cores" }),
        __metadata("design:type", Number)
    ], GetServerTypesId200ApplicationJsonServerType.prototype, "cores", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpu_type" }),
        __metadata("design:type", String)
    ], GetServerTypesId200ApplicationJsonServerType.prototype, "cpuType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deprecated" }),
        __metadata("design:type", Boolean)
    ], GetServerTypesId200ApplicationJsonServerType.prototype, "deprecated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServerTypesId200ApplicationJsonServerType.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], GetServerTypesId200ApplicationJsonServerType.prototype, "disk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServerTypesId200ApplicationJsonServerType.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], GetServerTypesId200ApplicationJsonServerType.prototype, "memory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServerTypesId200ApplicationJsonServerType.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prices", elemType: GetServerTypesId200ApplicationJsonServerTypePrices }),
        __metadata("design:type", Array)
    ], GetServerTypesId200ApplicationJsonServerType.prototype, "prices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storage_type" }),
        __metadata("design:type", String)
    ], GetServerTypesId200ApplicationJsonServerType.prototype, "storageType", void 0);
    return GetServerTypesId200ApplicationJsonServerType;
}(utils_1.SpeakeasyBase));
exports.GetServerTypesId200ApplicationJsonServerType = GetServerTypesId200ApplicationJsonServerType;
var GetServerTypesId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetServerTypesId200ApplicationJson, _super);
    function GetServerTypesId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=server_type" }),
        __metadata("design:type", GetServerTypesId200ApplicationJsonServerType)
    ], GetServerTypesId200ApplicationJson.prototype, "serverType", void 0);
    return GetServerTypesId200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetServerTypesId200ApplicationJson = GetServerTypesId200ApplicationJson;
var GetServerTypesIdRequest = /** @class */ (function (_super) {
    __extends(GetServerTypesIdRequest, _super);
    function GetServerTypesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetServerTypesIdPathParams)
    ], GetServerTypesIdRequest.prototype, "pathParams", void 0);
    return GetServerTypesIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetServerTypesIdRequest = GetServerTypesIdRequest;
var GetServerTypesIdResponse = /** @class */ (function (_super) {
    __extends(GetServerTypesIdResponse, _super);
    function GetServerTypesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetServerTypesIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetServerTypesIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetServerTypesId200ApplicationJson)
    ], GetServerTypesIdResponse.prototype, "getServerTypesId200ApplicationJSONObject", void 0);
    return GetServerTypesIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetServerTypesIdResponse = GetServerTypesIdResponse;
