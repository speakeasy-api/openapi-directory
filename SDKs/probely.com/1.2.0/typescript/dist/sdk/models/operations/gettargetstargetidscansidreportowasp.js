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
exports.GetTargetsTargetIdScansIdReportOwaspResponse = exports.GetTargetsTargetIdScansIdReportOwaspRequest = exports.GetTargetsTargetIdScansIdReportOwasp404ApplicationJson = exports.GetTargetsTargetIdScansIdReportOwasp401ApplicationJson = exports.GetTargetsTargetIdScansIdReportOwaspPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsTargetIdScansIdReportOwaspPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportOwaspPathParams, _super);
    function GetTargetsTargetIdScansIdReportOwaspPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportOwaspPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportOwaspPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdScansIdReportOwaspPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportOwaspPathParams = GetTargetsTargetIdScansIdReportOwaspPathParams;
var GetTargetsTargetIdScansIdReportOwasp401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportOwasp401ApplicationJson, _super);
    function GetTargetsTargetIdScansIdReportOwasp401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportOwasp401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansIdReportOwasp401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportOwasp401ApplicationJson = GetTargetsTargetIdScansIdReportOwasp401ApplicationJson;
var GetTargetsTargetIdScansIdReportOwasp404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportOwasp404ApplicationJson, _super);
    function GetTargetsTargetIdScansIdReportOwasp404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportOwasp404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansIdReportOwasp404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportOwasp404ApplicationJson = GetTargetsTargetIdScansIdReportOwasp404ApplicationJson;
var GetTargetsTargetIdScansIdReportOwaspRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportOwaspRequest, _super);
    function GetTargetsTargetIdScansIdReportOwaspRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdReportOwaspPathParams)
    ], GetTargetsTargetIdScansIdReportOwaspRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdScansIdReportOwaspRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportOwaspRequest = GetTargetsTargetIdScansIdReportOwaspRequest;
var GetTargetsTargetIdScansIdReportOwaspResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportOwaspResponse, _super);
    function GetTargetsTargetIdScansIdReportOwaspResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportOwaspResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScansIdReportOwaspResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetTargetsTargetIdScansIdReportOwaspResponse.prototype, "getTargetsTargetIdScansIdReportOwasp200ApplicationPdfBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdReportOwasp401ApplicationJson)
    ], GetTargetsTargetIdScansIdReportOwaspResponse.prototype, "getTargetsTargetIdScansIdReportOwasp401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdReportOwasp404ApplicationJson)
    ], GetTargetsTargetIdScansIdReportOwaspResponse.prototype, "getTargetsTargetIdScansIdReportOwasp404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdScansIdReportOwaspResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportOwaspResponse = GetTargetsTargetIdScansIdReportOwaspResponse;
