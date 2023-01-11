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
exports.GetTargetsAllSeverityTrendResponse = exports.GetTargetsAllSeverityTrend200ApplicationJson = exports.GetTargetsAllSeverityTrend200ApplicationJsonResults = exports.GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium = exports.GetTargetsAllSeverityTrend200ApplicationJsonResultsLow = exports.GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh = /** @class */ (function (_super) {
    __extends(GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh, _super);
    function GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=0" }),
        __metadata("design:type", Date)
    ], GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh.prototype, "zero", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=1" }),
        __metadata("design:type", Number)
    ], GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh.prototype, "one", void 0);
    return GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh;
}(utils_1.SpeakeasyBase));
exports.GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh = GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh;
var GetTargetsAllSeverityTrend200ApplicationJsonResultsLow = /** @class */ (function (_super) {
    __extends(GetTargetsAllSeverityTrend200ApplicationJsonResultsLow, _super);
    function GetTargetsAllSeverityTrend200ApplicationJsonResultsLow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=0" }),
        __metadata("design:type", Date)
    ], GetTargetsAllSeverityTrend200ApplicationJsonResultsLow.prototype, "zero", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=1" }),
        __metadata("design:type", Number)
    ], GetTargetsAllSeverityTrend200ApplicationJsonResultsLow.prototype, "one", void 0);
    return GetTargetsAllSeverityTrend200ApplicationJsonResultsLow;
}(utils_1.SpeakeasyBase));
exports.GetTargetsAllSeverityTrend200ApplicationJsonResultsLow = GetTargetsAllSeverityTrend200ApplicationJsonResultsLow;
var GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium = /** @class */ (function (_super) {
    __extends(GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium, _super);
    function GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=0" }),
        __metadata("design:type", Date)
    ], GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium.prototype, "zero", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=1" }),
        __metadata("design:type", Number)
    ], GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium.prototype, "one", void 0);
    return GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium;
}(utils_1.SpeakeasyBase));
exports.GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium = GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium;
var GetTargetsAllSeverityTrend200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetTargetsAllSeverityTrend200ApplicationJsonResults, _super);
    function GetTargetsAllSeverityTrend200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=high", elemType: GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh }),
        __metadata("design:type", Array)
    ], GetTargetsAllSeverityTrend200ApplicationJsonResults.prototype, "high", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=low", elemType: GetTargetsAllSeverityTrend200ApplicationJsonResultsLow }),
        __metadata("design:type", Array)
    ], GetTargetsAllSeverityTrend200ApplicationJsonResults.prototype, "low", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=medium", elemType: GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium }),
        __metadata("design:type", Array)
    ], GetTargetsAllSeverityTrend200ApplicationJsonResults.prototype, "medium", void 0);
    return GetTargetsAllSeverityTrend200ApplicationJsonResults;
}(utils_1.SpeakeasyBase));
exports.GetTargetsAllSeverityTrend200ApplicationJsonResults = GetTargetsAllSeverityTrend200ApplicationJsonResults;
var GetTargetsAllSeverityTrend200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsAllSeverityTrend200ApplicationJson, _super);
    function GetTargetsAllSeverityTrend200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results" }),
        __metadata("design:type", GetTargetsAllSeverityTrend200ApplicationJsonResults)
    ], GetTargetsAllSeverityTrend200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=step" }),
        __metadata("design:type", Number)
    ], GetTargetsAllSeverityTrend200ApplicationJson.prototype, "step", void 0);
    return GetTargetsAllSeverityTrend200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsAllSeverityTrend200ApplicationJson = GetTargetsAllSeverityTrend200ApplicationJson;
var GetTargetsAllSeverityTrendResponse = /** @class */ (function (_super) {
    __extends(GetTargetsAllSeverityTrendResponse, _super);
    function GetTargetsAllSeverityTrendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsAllSeverityTrendResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsAllSeverityTrendResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsAllSeverityTrend200ApplicationJson)
    ], GetTargetsAllSeverityTrendResponse.prototype, "getTargetsAllSeverityTrend200ApplicationJSONObject", void 0);
    return GetTargetsAllSeverityTrendResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsAllSeverityTrendResponse = GetTargetsAllSeverityTrendResponse;
