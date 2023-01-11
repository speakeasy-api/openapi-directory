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
exports.GetTargetsTargetIdScansIdReportResponse = exports.GetTargetsTargetIdScansIdReportRequest = exports.GetTargetsTargetIdScansIdReport404ApplicationJson = exports.GetTargetsTargetIdScansIdReport401ApplicationJson = exports.GetTargetsTargetIdScansIdReportPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsTargetIdScansIdReportPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportPathParams, _super);
    function GetTargetsTargetIdScansIdReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdScansIdReportPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportPathParams = GetTargetsTargetIdScansIdReportPathParams;
var GetTargetsTargetIdScansIdReport401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReport401ApplicationJson, _super);
    function GetTargetsTargetIdScansIdReport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReport401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansIdReport401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReport401ApplicationJson = GetTargetsTargetIdScansIdReport401ApplicationJson;
var GetTargetsTargetIdScansIdReport404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReport404ApplicationJson, _super);
    function GetTargetsTargetIdScansIdReport404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReport404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansIdReport404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReport404ApplicationJson = GetTargetsTargetIdScansIdReport404ApplicationJson;
var GetTargetsTargetIdScansIdReportRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportRequest, _super);
    function GetTargetsTargetIdScansIdReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdReportPathParams)
    ], GetTargetsTargetIdScansIdReportRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdScansIdReportRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportRequest = GetTargetsTargetIdScansIdReportRequest;
var GetTargetsTargetIdScansIdReportResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportResponse, _super);
    function GetTargetsTargetIdScansIdReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScansIdReportResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetTargetsTargetIdScansIdReportResponse.prototype, "getTargetsTargetIdScansIdReport200ApplicationPdfBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdReport401ApplicationJson)
    ], GetTargetsTargetIdScansIdReportResponse.prototype, "getTargetsTargetIdScansIdReport401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdReport404ApplicationJson)
    ], GetTargetsTargetIdScansIdReportResponse.prototype, "getTargetsTargetIdScansIdReport404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdScansIdReportResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportResponse = GetTargetsTargetIdScansIdReportResponse;
