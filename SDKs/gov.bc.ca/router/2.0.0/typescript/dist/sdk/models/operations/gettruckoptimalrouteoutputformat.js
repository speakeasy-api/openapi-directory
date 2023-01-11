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
exports.GetTruckOptimalRouteOutputFormatResponse = exports.GetTruckOptimalRouteOutputFormatRequest = exports.GetTruckOptimalRouteOutputFormatQueryParams = exports.GetTruckOptimalRouteOutputFormatDistanceUnitEnum = exports.GetTruckOptimalRouteOutputFormatCriteriaEnum = exports.GetTruckOptimalRouteOutputFormatPathParams = exports.GetTruckOptimalRouteOutputFormatOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetTruckOptimalRouteOutputFormatOutputFormatEnum;
(function (GetTruckOptimalRouteOutputFormatOutputFormatEnum) {
    GetTruckOptimalRouteOutputFormatOutputFormatEnum["Json"] = "json";
    GetTruckOptimalRouteOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetTruckOptimalRouteOutputFormatOutputFormatEnum["Html"] = "html";
})(GetTruckOptimalRouteOutputFormatOutputFormatEnum = exports.GetTruckOptimalRouteOutputFormatOutputFormatEnum || (exports.GetTruckOptimalRouteOutputFormatOutputFormatEnum = {}));
var GetTruckOptimalRouteOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetTruckOptimalRouteOutputFormatPathParams, _super);
    function GetTruckOptimalRouteOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetTruckOptimalRouteOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetTruckOptimalRouteOutputFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTruckOptimalRouteOutputFormatPathParams = GetTruckOptimalRouteOutputFormatPathParams;
var GetTruckOptimalRouteOutputFormatCriteriaEnum;
(function (GetTruckOptimalRouteOutputFormatCriteriaEnum) {
    GetTruckOptimalRouteOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetTruckOptimalRouteOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetTruckOptimalRouteOutputFormatCriteriaEnum = exports.GetTruckOptimalRouteOutputFormatCriteriaEnum || (exports.GetTruckOptimalRouteOutputFormatCriteriaEnum = {}));
var GetTruckOptimalRouteOutputFormatDistanceUnitEnum;
(function (GetTruckOptimalRouteOutputFormatDistanceUnitEnum) {
    GetTruckOptimalRouteOutputFormatDistanceUnitEnum["Km"] = "km";
    GetTruckOptimalRouteOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetTruckOptimalRouteOutputFormatDistanceUnitEnum = exports.GetTruckOptimalRouteOutputFormatDistanceUnitEnum || (exports.GetTruckOptimalRouteOutputFormatDistanceUnitEnum = {}));
var GetTruckOptimalRouteOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetTruckOptimalRouteOutputFormatQueryParams, _super);
    function GetTruckOptimalRouteOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetTruckOptimalRouteOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetTruckOptimalRouteOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetTruckOptimalRouteOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetTruckOptimalRouteOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetTruckOptimalRouteOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetTruckOptimalRouteOutputFormatQueryParams.prototype, "outputSRS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], GetTruckOptimalRouteOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], GetTruckOptimalRouteOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetTruckOptimalRouteOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return GetTruckOptimalRouteOutputFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTruckOptimalRouteOutputFormatQueryParams = GetTruckOptimalRouteOutputFormatQueryParams;
var GetTruckOptimalRouteOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetTruckOptimalRouteOutputFormatRequest, _super);
    function GetTruckOptimalRouteOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTruckOptimalRouteOutputFormatPathParams)
    ], GetTruckOptimalRouteOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTruckOptimalRouteOutputFormatQueryParams)
    ], GetTruckOptimalRouteOutputFormatRequest.prototype, "queryParams", void 0);
    return GetTruckOptimalRouteOutputFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetTruckOptimalRouteOutputFormatRequest = GetTruckOptimalRouteOutputFormatRequest;
var GetTruckOptimalRouteOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetTruckOptimalRouteOutputFormatResponse, _super);
    function GetTruckOptimalRouteOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTruckOptimalRouteOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTruckOptimalRouteOutputFormatResponse.prototype, "statusCode", void 0);
    return GetTruckOptimalRouteOutputFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetTruckOptimalRouteOutputFormatResponse = GetTruckOptimalRouteOutputFormatResponse;
