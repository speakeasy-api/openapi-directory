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
exports.GetTargetsTargetIdAverageFixTimeResponse = exports.GetTargetsTargetIdAverageFixTimeRequest = exports.GetTargetsTargetIdAverageFixTime200ApplicationJson = exports.GetTargetsTargetIdAverageFixTime200ApplicationJsonResults = exports.GetTargetsTargetIdAverageFixTimePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsTargetIdAverageFixTimePathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAverageFixTimePathParams, _super);
    function GetTargetsTargetIdAverageFixTimePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAverageFixTimePathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdAverageFixTimePathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAverageFixTimePathParams = GetTargetsTargetIdAverageFixTimePathParams;
var GetTargetsTargetIdAverageFixTime200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAverageFixTime200ApplicationJsonResults, _super);
    function GetTargetsTargetIdAverageFixTime200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=high" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAverageFixTime200ApplicationJsonResults.prototype, "high", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=low" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAverageFixTime200ApplicationJsonResults.prototype, "low", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=medium" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAverageFixTime200ApplicationJsonResults.prototype, "medium", void 0);
    return GetTargetsTargetIdAverageFixTime200ApplicationJsonResults;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAverageFixTime200ApplicationJsonResults = GetTargetsTargetIdAverageFixTime200ApplicationJsonResults;
var GetTargetsTargetIdAverageFixTime200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAverageFixTime200ApplicationJson, _super);
    function GetTargetsTargetIdAverageFixTime200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results" }),
        __metadata("design:type", GetTargetsTargetIdAverageFixTime200ApplicationJsonResults)
    ], GetTargetsTargetIdAverageFixTime200ApplicationJson.prototype, "results", void 0);
    return GetTargetsTargetIdAverageFixTime200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAverageFixTime200ApplicationJson = GetTargetsTargetIdAverageFixTime200ApplicationJson;
var GetTargetsTargetIdAverageFixTimeRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAverageFixTimeRequest, _super);
    function GetTargetsTargetIdAverageFixTimeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdAverageFixTimePathParams)
    ], GetTargetsTargetIdAverageFixTimeRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdAverageFixTimeRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAverageFixTimeRequest = GetTargetsTargetIdAverageFixTimeRequest;
var GetTargetsTargetIdAverageFixTimeResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAverageFixTimeResponse, _super);
    function GetTargetsTargetIdAverageFixTimeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAverageFixTimeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAverageFixTimeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdAverageFixTime200ApplicationJson)
    ], GetTargetsTargetIdAverageFixTimeResponse.prototype, "getTargetsTargetIdAverageFixTime200ApplicationJSONObject", void 0);
    return GetTargetsTargetIdAverageFixTimeResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAverageFixTimeResponse = GetTargetsTargetIdAverageFixTimeResponse;
