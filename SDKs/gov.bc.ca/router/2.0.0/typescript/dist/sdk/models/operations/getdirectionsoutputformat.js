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
exports.GetDirectionsOutputFormatResponse = exports.GetDirectionsOutputFormatRequest = exports.GetDirectionsOutputFormatQueryParams = exports.GetDirectionsOutputFormatDistanceUnitEnum = exports.GetDirectionsOutputFormatCriteriaEnum = exports.GetDirectionsOutputFormatPathParams = exports.GetDirectionsOutputFormatOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDirectionsOutputFormatOutputFormatEnum;
(function (GetDirectionsOutputFormatOutputFormatEnum) {
    GetDirectionsOutputFormatOutputFormatEnum["Json"] = "json";
    GetDirectionsOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetDirectionsOutputFormatOutputFormatEnum["Html"] = "html";
})(GetDirectionsOutputFormatOutputFormatEnum = exports.GetDirectionsOutputFormatOutputFormatEnum || (exports.GetDirectionsOutputFormatOutputFormatEnum = {}));
var GetDirectionsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetDirectionsOutputFormatPathParams, _super);
    function GetDirectionsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetDirectionsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetDirectionsOutputFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDirectionsOutputFormatPathParams = GetDirectionsOutputFormatPathParams;
var GetDirectionsOutputFormatCriteriaEnum;
(function (GetDirectionsOutputFormatCriteriaEnum) {
    GetDirectionsOutputFormatCriteriaEnum["Shortest"] = "shortest";
    GetDirectionsOutputFormatCriteriaEnum["Fastest"] = "fastest";
})(GetDirectionsOutputFormatCriteriaEnum = exports.GetDirectionsOutputFormatCriteriaEnum || (exports.GetDirectionsOutputFormatCriteriaEnum = {}));
var GetDirectionsOutputFormatDistanceUnitEnum;
(function (GetDirectionsOutputFormatDistanceUnitEnum) {
    GetDirectionsOutputFormatDistanceUnitEnum["Km"] = "km";
    GetDirectionsOutputFormatDistanceUnitEnum["Mi"] = "mi";
})(GetDirectionsOutputFormatDistanceUnitEnum = exports.GetDirectionsOutputFormatDistanceUnitEnum || (exports.GetDirectionsOutputFormatDistanceUnitEnum = {}));
var GetDirectionsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetDirectionsOutputFormatQueryParams, _super);
    function GetDirectionsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=correctSide" }),
        __metadata("design:type", Boolean)
    ], GetDirectionsOutputFormatQueryParams.prototype, "correctSide", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=criteria" }),
        __metadata("design:type", String)
    ], GetDirectionsOutputFormatQueryParams.prototype, "criteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=departure" }),
        __metadata("design:type", Date)
    ], GetDirectionsOutputFormatQueryParams.prototype, "departure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=disable" }),
        __metadata("design:type", String)
    ], GetDirectionsOutputFormatQueryParams.prototype, "disable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], GetDirectionsOutputFormatQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetDirectionsOutputFormatQueryParams.prototype, "outputSRS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=points" }),
        __metadata("design:type", String)
    ], GetDirectionsOutputFormatQueryParams.prototype, "points", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=roundTrip" }),
        __metadata("design:type", Boolean)
    ], GetDirectionsOutputFormatQueryParams.prototype, "roundTrip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=routeDescription" }),
        __metadata("design:type", String)
    ], GetDirectionsOutputFormatQueryParams.prototype, "routeDescription", void 0);
    return GetDirectionsOutputFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDirectionsOutputFormatQueryParams = GetDirectionsOutputFormatQueryParams;
var GetDirectionsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetDirectionsOutputFormatRequest, _super);
    function GetDirectionsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDirectionsOutputFormatPathParams)
    ], GetDirectionsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDirectionsOutputFormatQueryParams)
    ], GetDirectionsOutputFormatRequest.prototype, "queryParams", void 0);
    return GetDirectionsOutputFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetDirectionsOutputFormatRequest = GetDirectionsOutputFormatRequest;
var GetDirectionsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetDirectionsOutputFormatResponse, _super);
    function GetDirectionsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDirectionsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDirectionsOutputFormatResponse.prototype, "statusCode", void 0);
    return GetDirectionsOutputFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetDirectionsOutputFormatResponse = GetDirectionsOutputFormatResponse;
