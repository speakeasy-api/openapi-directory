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
exports.GetTargetsTargetIdFindingsReportResponse = exports.GetTargetsTargetIdFindingsReportRequest = exports.GetTargetsTargetIdFindingsReport404ApplicationJson = exports.GetTargetsTargetIdFindingsReport401ApplicationJson = exports.GetTargetsTargetIdFindingsReport400ApplicationJson = exports.GetTargetsTargetIdFindingsReportQueryParams = exports.GetTargetsTargetIdFindingsReportPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsTargetIdFindingsReportPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindingsReportPathParams, _super);
    function GetTargetsTargetIdFindingsReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsReportPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdFindingsReportPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindingsReportPathParams = GetTargetsTargetIdFindingsReportPathParams;
var GetTargetsTargetIdFindingsReportQueryParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindingsReportQueryParams, _super);
    function GetTargetsTargetIdFindingsReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsReportQueryParams.prototype, "token", void 0);
    return GetTargetsTargetIdFindingsReportQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindingsReportQueryParams = GetTargetsTargetIdFindingsReportQueryParams;
var GetTargetsTargetIdFindingsReport400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindingsReport400ApplicationJson, _super);
    function GetTargetsTargetIdFindingsReport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsReport400ApplicationJson.prototype, "error", void 0);
    return GetTargetsTargetIdFindingsReport400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindingsReport400ApplicationJson = GetTargetsTargetIdFindingsReport400ApplicationJson;
var GetTargetsTargetIdFindingsReport401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindingsReport401ApplicationJson, _super);
    function GetTargetsTargetIdFindingsReport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsReport401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdFindingsReport401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindingsReport401ApplicationJson = GetTargetsTargetIdFindingsReport401ApplicationJson;
var GetTargetsTargetIdFindingsReport404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindingsReport404ApplicationJson, _super);
    function GetTargetsTargetIdFindingsReport404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsReport404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdFindingsReport404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindingsReport404ApplicationJson = GetTargetsTargetIdFindingsReport404ApplicationJson;
var GetTargetsTargetIdFindingsReportRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindingsReportRequest, _super);
    function GetTargetsTargetIdFindingsReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdFindingsReportPathParams)
    ], GetTargetsTargetIdFindingsReportRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdFindingsReportQueryParams)
    ], GetTargetsTargetIdFindingsReportRequest.prototype, "queryParams", void 0);
    return GetTargetsTargetIdFindingsReportRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindingsReportRequest = GetTargetsTargetIdFindingsReportRequest;
var GetTargetsTargetIdFindingsReportResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdFindingsReportResponse, _super);
    function GetTargetsTargetIdFindingsReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdFindingsReportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdFindingsReportResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetTargetsTargetIdFindingsReportResponse.prototype, "getTargetsTargetIdFindingsReport200ApplicationPdfBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdFindingsReport400ApplicationJson)
    ], GetTargetsTargetIdFindingsReportResponse.prototype, "getTargetsTargetIdFindingsReport400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdFindingsReport401ApplicationJson)
    ], GetTargetsTargetIdFindingsReportResponse.prototype, "getTargetsTargetIdFindingsReport401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdFindingsReport404ApplicationJson)
    ], GetTargetsTargetIdFindingsReportResponse.prototype, "getTargetsTargetIdFindingsReport404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdFindingsReportResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdFindingsReportResponse = GetTargetsTargetIdFindingsReportResponse;
