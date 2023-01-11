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
exports.GetTargetsTargetIdSeverityTrendResponse = exports.GetTargetsTargetIdSeverityTrendRequest = exports.GetTargetsTargetIdSeverityTrend200ApplicationJson = exports.GetTargetsTargetIdSeverityTrend200ApplicationJsonResults = exports.GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium = exports.GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow = exports.GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh = exports.GetTargetsTargetIdSeverityTrendPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsTargetIdSeverityTrendPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdSeverityTrendPathParams, _super);
    function GetTargetsTargetIdSeverityTrendPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdSeverityTrendPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdSeverityTrendPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdSeverityTrendPathParams = GetTargetsTargetIdSeverityTrendPathParams;
var GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh, _super);
    function GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=0" }),
        __metadata("design:type", Date)
    ], GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh.prototype, "zero", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=1" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh.prototype, "one", void 0);
    return GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh = GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh;
var GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow, _super);
    function GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=0" }),
        __metadata("design:type", Date)
    ], GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow.prototype, "zero", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=1" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow.prototype, "one", void 0);
    return GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow = GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow;
var GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium, _super);
    function GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=0" }),
        __metadata("design:type", Date)
    ], GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium.prototype, "zero", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=1" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium.prototype, "one", void 0);
    return GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium = GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium;
var GetTargetsTargetIdSeverityTrend200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdSeverityTrend200ApplicationJsonResults, _super);
    function GetTargetsTargetIdSeverityTrend200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=high", elemType: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdSeverityTrend200ApplicationJsonResults.prototype, "high", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=low", elemType: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdSeverityTrend200ApplicationJsonResults.prototype, "low", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=medium", elemType: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdSeverityTrend200ApplicationJsonResults.prototype, "medium", void 0);
    return GetTargetsTargetIdSeverityTrend200ApplicationJsonResults;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdSeverityTrend200ApplicationJsonResults = GetTargetsTargetIdSeverityTrend200ApplicationJsonResults;
var GetTargetsTargetIdSeverityTrend200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdSeverityTrend200ApplicationJson, _super);
    function GetTargetsTargetIdSeverityTrend200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results" }),
        __metadata("design:type", GetTargetsTargetIdSeverityTrend200ApplicationJsonResults)
    ], GetTargetsTargetIdSeverityTrend200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=step" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdSeverityTrend200ApplicationJson.prototype, "step", void 0);
    return GetTargetsTargetIdSeverityTrend200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdSeverityTrend200ApplicationJson = GetTargetsTargetIdSeverityTrend200ApplicationJson;
var GetTargetsTargetIdSeverityTrendRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdSeverityTrendRequest, _super);
    function GetTargetsTargetIdSeverityTrendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdSeverityTrendPathParams)
    ], GetTargetsTargetIdSeverityTrendRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdSeverityTrendRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdSeverityTrendRequest = GetTargetsTargetIdSeverityTrendRequest;
var GetTargetsTargetIdSeverityTrendResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdSeverityTrendResponse, _super);
    function GetTargetsTargetIdSeverityTrendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdSeverityTrendResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdSeverityTrendResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdSeverityTrend200ApplicationJson)
    ], GetTargetsTargetIdSeverityTrendResponse.prototype, "getTargetsTargetIdSeverityTrend200ApplicationJSONObject", void 0);
    return GetTargetsTargetIdSeverityTrendResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdSeverityTrendResponse = GetTargetsTargetIdSeverityTrendResponse;
