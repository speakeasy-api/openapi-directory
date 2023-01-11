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
exports.GetTargetsTargetIdScansIdReportPciResponse = exports.GetTargetsTargetIdScansIdReportPciRequest = exports.GetTargetsTargetIdScansIdReportPci404ApplicationJson = exports.GetTargetsTargetIdScansIdReportPci401ApplicationJson = exports.GetTargetsTargetIdScansIdReportPciPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTargetsTargetIdScansIdReportPciPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportPciPathParams, _super);
    function GetTargetsTargetIdScansIdReportPciPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportPciPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportPciPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdScansIdReportPciPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportPciPathParams = GetTargetsTargetIdScansIdReportPciPathParams;
var GetTargetsTargetIdScansIdReportPci401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportPci401ApplicationJson, _super);
    function GetTargetsTargetIdScansIdReportPci401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportPci401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansIdReportPci401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportPci401ApplicationJson = GetTargetsTargetIdScansIdReportPci401ApplicationJson;
var GetTargetsTargetIdScansIdReportPci404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportPci404ApplicationJson, _super);
    function GetTargetsTargetIdScansIdReportPci404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportPci404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScansIdReportPci404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportPci404ApplicationJson = GetTargetsTargetIdScansIdReportPci404ApplicationJson;
var GetTargetsTargetIdScansIdReportPciRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportPciRequest, _super);
    function GetTargetsTargetIdScansIdReportPciRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdReportPciPathParams)
    ], GetTargetsTargetIdScansIdReportPciRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdScansIdReportPciRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportPciRequest = GetTargetsTargetIdScansIdReportPciRequest;
var GetTargetsTargetIdScansIdReportPciResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScansIdReportPciResponse, _super);
    function GetTargetsTargetIdScansIdReportPciResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScansIdReportPciResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScansIdReportPciResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetTargetsTargetIdScansIdReportPciResponse.prototype, "getTargetsTargetIdScansIdReportPci200ApplicationPdfBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdReportPci401ApplicationJson)
    ], GetTargetsTargetIdScansIdReportPciResponse.prototype, "getTargetsTargetIdScansIdReportPci401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScansIdReportPci404ApplicationJson)
    ], GetTargetsTargetIdScansIdReportPciResponse.prototype, "getTargetsTargetIdScansIdReportPci404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdScansIdReportPciResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScansIdReportPciResponse = GetTargetsTargetIdScansIdReportPciResponse;
