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
exports.GetTargetsTargetIdScansIdEndpointsResponse = exports.GetTargetsTargetIdScansIdEndpointsRequest = exports.GetTargetsTargetIdScansIdEndpoints404ApplicationJson = exports.GetTargetsTargetIdScansIdEndpoints401ApplicationJson = exports.GetTargetsTargetIdScansIdEndpointsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsTargetIdScansIdEndpointsPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdEndpointsPathParams, _super);
    function GetTargetsTargetIdScansIdEndpointsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdEndpointsPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdEndpointsPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdScansIdEndpointsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdEndpointsPathParams = GetTargetsTargetIdScansIdEndpointsPathParams;
var GetTargetsTargetIdScansIdEndpoints401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdEndpoints401ApplicationJson, _super);
    function GetTargetsTargetIdScansIdEndpoints401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdEndpoints401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansIdEndpoints401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdEndpoints401ApplicationJson = GetTargetsTargetIdScansIdEndpoints401ApplicationJson;
var GetTargetsTargetIdScansIdEndpoints404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdEndpoints404ApplicationJson, _super);
    function GetTargetsTargetIdScansIdEndpoints404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdEndpoints404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansIdEndpoints404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdEndpoints404ApplicationJson = GetTargetsTargetIdScansIdEndpoints404ApplicationJson;
var GetTargetsTargetIdScansIdEndpointsRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdEndpointsRequest, _super);
    function GetTargetsTargetIdScansIdEndpointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdEndpointsPathParams)
    ], GetTargetsTargetIdScansIdEndpointsRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdScansIdEndpointsRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdEndpointsRequest = GetTargetsTargetIdScansIdEndpointsRequest;
var GetTargetsTargetIdScansIdEndpointsResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdEndpointsResponse, _super);
    function GetTargetsTargetIdScansIdEndpointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdEndpointsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScansIdEndpointsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetTargetsTargetIdScansIdEndpointsResponse.prototype, "getTargetsTargetIdScansIdEndpoints200ApplicationCsvBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdEndpoints401ApplicationJson)
    ], GetTargetsTargetIdScansIdEndpointsResponse.prototype, "getTargetsTargetIdScansIdEndpoints401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdEndpoints404ApplicationJson)
    ], GetTargetsTargetIdScansIdEndpointsResponse.prototype, "getTargetsTargetIdScansIdEndpoints404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdScansIdEndpointsResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdEndpointsResponse = GetTargetsTargetIdScansIdEndpointsResponse;
