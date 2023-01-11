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
exports.GetTargetsAllAverageFixTimeResponse = exports.GetTargetsAllAverageFixTime200ApplicationJson = exports.GetTargetsAllAverageFixTime200ApplicationJsonResults = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsAllAverageFixTime200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetTargetsAllAverageFixTime200ApplicationJsonResults, _super);
    function GetTargetsAllAverageFixTime200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=high" }),
        __metadata("design:type", Number)
    ], GetTargetsAllAverageFixTime200ApplicationJsonResults.prototype, "high", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=low" }),
        __metadata("design:type", Number)
    ], GetTargetsAllAverageFixTime200ApplicationJsonResults.prototype, "low", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=medium" }),
        __metadata("design:type", Number)
    ], GetTargetsAllAverageFixTime200ApplicationJsonResults.prototype, "medium", void 0);
    return GetTargetsAllAverageFixTime200ApplicationJsonResults;
}(utils_1.SpeakeasyBase));
exports.GetTargetsAllAverageFixTime200ApplicationJsonResults = GetTargetsAllAverageFixTime200ApplicationJsonResults;
var GetTargetsAllAverageFixTime200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsAllAverageFixTime200ApplicationJson, _super);
    function GetTargetsAllAverageFixTime200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results" }),
        __metadata("design:type", GetTargetsAllAverageFixTime200ApplicationJsonResults)
    ], GetTargetsAllAverageFixTime200ApplicationJson.prototype, "results", void 0);
    return GetTargetsAllAverageFixTime200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsAllAverageFixTime200ApplicationJson = GetTargetsAllAverageFixTime200ApplicationJson;
var GetTargetsAllAverageFixTimeResponse = /** @class */ (function (_super) {
    __extends(GetTargetsAllAverageFixTimeResponse, _super);
    function GetTargetsAllAverageFixTimeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsAllAverageFixTimeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsAllAverageFixTimeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsAllAverageFixTime200ApplicationJson)
    ], GetTargetsAllAverageFixTimeResponse.prototype, "getTargetsAllAverageFixTime200ApplicationJSONObject", void 0);
    return GetTargetsAllAverageFixTimeResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsAllAverageFixTimeResponse = GetTargetsAllAverageFixTimeResponse;
