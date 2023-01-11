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
exports.GetTargetsTargetIdRiskTrendResponse = exports.GetTargetsTargetIdRiskTrendRequest = exports.GetTargetsTargetIdRiskTrend200ApplicationJson = exports.GetTargetsTargetIdRiskTrendPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsTargetIdRiskTrendPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdRiskTrendPathParams, _super);
    function GetTargetsTargetIdRiskTrendPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdRiskTrendPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdRiskTrendPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdRiskTrendPathParams = GetTargetsTargetIdRiskTrendPathParams;
var GetTargetsTargetIdRiskTrend200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdRiskTrend200ApplicationJson, _super);
    function GetTargetsTargetIdRiskTrend200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=0" }),
        __metadata("design:type", Date)
    ], GetTargetsTargetIdRiskTrend200ApplicationJson.prototype, "zero", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=1" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdRiskTrend200ApplicationJson.prototype, "one", void 0);
    return GetTargetsTargetIdRiskTrend200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdRiskTrend200ApplicationJson = GetTargetsTargetIdRiskTrend200ApplicationJson;
var GetTargetsTargetIdRiskTrendRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdRiskTrendRequest, _super);
    function GetTargetsTargetIdRiskTrendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdRiskTrendPathParams)
    ], GetTargetsTargetIdRiskTrendRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdRiskTrendRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdRiskTrendRequest = GetTargetsTargetIdRiskTrendRequest;
var GetTargetsTargetIdRiskTrendResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdRiskTrendResponse, _super);
    function GetTargetsTargetIdRiskTrendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdRiskTrendResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdRiskTrendResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: GetTargetsTargetIdRiskTrend200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdRiskTrendResponse.prototype, "getTargetsTargetIdRiskTrend200ApplicationJSONObjects", void 0);
    return GetTargetsTargetIdRiskTrendResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdRiskTrendResponse = GetTargetsTargetIdRiskTrendResponse;
