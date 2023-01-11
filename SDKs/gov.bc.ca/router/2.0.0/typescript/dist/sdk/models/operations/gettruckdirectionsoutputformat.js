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
exports.GetTruckDirectionsOutputFormatResponse = exports.GetTruckDirectionsOutputFormatRequest = exports.GetTruckDirectionsOutputFormatQueryParams = exports.GetTruckDirectionsOutputFormatDistanceUnitEnum = exports.GetTruckDirectionsOutputFormatCriteriaEnum = exports.GetTruckDirectionsOutputFormatPathParams = exports.GetTruckDirectionsOutputFormatOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetTruckDirectionsOutputFormatOutputFormatEnum;
(function (GetTruckDirectionsOutputFormatOutputFormatEnum) {
    GetTruckDirectionsOutputFormatOutputFormatEnum["Json"] = "json";
    GetTruckDirectionsOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetTruckDirectionsOutputFormatOutputFormatEnum["Html"] = "html";
})(GetTruckDirectionsOutputFormatOutputFormatEnum = exports.GetTruckDirectionsOutputFormatOutputFormatEnum || (exports.GetTruckDirectionsOutputFormatOutputFormatEnum = {}));
var GetTruckDirectionsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetTruckDirectionsOutputFormatPathParams, _super);
    function GetTruckDirectionsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetTruckDirectionsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetTruckDirectionsOutputFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTruckDirectionsOutputFormatPathParams = GetTruckDirectionsOutputFormatPathParams;
var GetTruckDirectionsOutputFormatCriteriaEnum;
(function (GetTruckDirectionsOutputFormatCriteriaEnum) {
    GetTruckDirectionsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetTruckDirectionsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetTruckDirectionsOutputFormatCriteriaEnum = exports.GetTruckDirectionsOutputFormatCriteriaEnum || (exports.GetTruckDirectionsOutputFormatCriteriaEnum = {}));
var GetTruckDirectionsOutputFormatDistanceUnitEnum;
(function (GetTruckDirectionsOutputFormatDistanceUnitEnum) {
    GetTruckDirectionsOutputFormatDistanceUnitEnum["Km"] = "km";
    GetTruckDirectionsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetTruckDirectionsOutputFormatDistanceUnitEnum = exports.GetTruckDirectionsOutputFormatDistanceUnitEnum || (exports.GetTruckDirectionsOutputFormatDistanceUnitEnum = {}));
var GetTruckDirectionsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetTruckDirectionsOutputFormatQueryParams, _super);
    function GetTruckDirectionsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetTruckDirectionsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetTruckDirectionsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetTruckDirectionsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetTruckDirectionsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetTruckDirectionsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetTruckDirectionsOutputFormatQueryParams.prototype, "outputSRS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], GetTruckDirectionsOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], GetTruckDirectionsOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetTruckDirectionsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return GetTruckDirectionsOutputFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTruckDirectionsOutputFormatQueryParams = GetTruckDirectionsOutputFormatQueryParams;
var GetTruckDirectionsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetTruckDirectionsOutputFormatRequest, _super);
    function GetTruckDirectionsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTruckDirectionsOutputFormatPathParams)
    ], GetTruckDirectionsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTruckDirectionsOutputFormatQueryParams)
    ], GetTruckDirectionsOutputFormatRequest.prototype, "queryParams", void 0);
    return GetTruckDirectionsOutputFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetTruckDirectionsOutputFormatRequest = GetTruckDirectionsOutputFormatRequest;
var GetTruckDirectionsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetTruckDirectionsOutputFormatResponse, _super);
    function GetTruckDirectionsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTruckDirectionsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTruckDirectionsOutputFormatResponse.prototype, "statusCode", void 0);
    return GetTruckDirectionsOutputFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetTruckDirectionsOutputFormatResponse = GetTruckDirectionsOutputFormatResponse;
