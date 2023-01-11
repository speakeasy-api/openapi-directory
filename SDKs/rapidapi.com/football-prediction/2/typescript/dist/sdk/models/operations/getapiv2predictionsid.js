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
exports.GetApiV2PredictionsIdResponse = exports.GetApiV2PredictionsIdRequest = exports.GetApiV2PredictionsId404ApplicationJson = exports.GetApiV2PredictionsId200ApplicationJson = exports.GetApiV2PredictionsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetApiV2PredictionsIdPathParams = /** @class */ (function (_super) {
    __extends(GetApiV2PredictionsIdPathParams, _super);
    function GetApiV2PredictionsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetApiV2PredictionsIdPathParams.prototype, "id", void 0);
    return GetApiV2PredictionsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetApiV2PredictionsIdPathParams = GetApiV2PredictionsIdPathParams;
var GetApiV2PredictionsId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV2PredictionsId200ApplicationJson, _super);
    function GetApiV2PredictionsId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetApiV2PredictionsId200ApplicationJson.prototype, "data", void 0);
    return GetApiV2PredictionsId200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetApiV2PredictionsId200ApplicationJson = GetApiV2PredictionsId200ApplicationJson;
var GetApiV2PredictionsId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV2PredictionsId404ApplicationJson, _super);
    function GetApiV2PredictionsId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", Object)
    ], GetApiV2PredictionsId404ApplicationJson.prototype, "errors", void 0);
    return GetApiV2PredictionsId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetApiV2PredictionsId404ApplicationJson = GetApiV2PredictionsId404ApplicationJson;
var GetApiV2PredictionsIdRequest = /** @class */ (function (_super) {
    __extends(GetApiV2PredictionsIdRequest, _super);
    function GetApiV2PredictionsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetApiV2PredictionsIdPathParams)
    ], GetApiV2PredictionsIdRequest.prototype, "pathParams", void 0);
    return GetApiV2PredictionsIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetApiV2PredictionsIdRequest = GetApiV2PredictionsIdRequest;
var GetApiV2PredictionsIdResponse = /** @class */ (function (_super) {
    __extends(GetApiV2PredictionsIdResponse, _super);
    function GetApiV2PredictionsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetApiV2PredictionsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetApiV2PredictionsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetApiV2PredictionsId200ApplicationJson)
    ], GetApiV2PredictionsIdResponse.prototype, "getApiV2PredictionsId200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetApiV2PredictionsId404ApplicationJson)
    ], GetApiV2PredictionsIdResponse.prototype, "getApiV2PredictionsId404ApplicationJSONObject", void 0);
    return GetApiV2PredictionsIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetApiV2PredictionsIdResponse = GetApiV2PredictionsIdResponse;
