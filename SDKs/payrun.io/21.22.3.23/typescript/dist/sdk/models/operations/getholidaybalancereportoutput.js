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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetHolidayBalanceReportOutputResponse = exports.GetHolidayBalanceReportOutputRequest = exports.GetHolidayBalanceReportOutputHeaders = exports.GetHolidayBalanceReportOutputQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetHolidayBalanceReportOutputQueryParams = /** @class */ (function (_super) {
    __extends(GetHolidayBalanceReportOutputQueryParams, _super);
    function GetHolidayBalanceReportOutputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EmployeeCodes" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputQueryParams.prototype, "employeeCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=HolidayYearEnd" }),
        __metadata("design:type", Date)
    ], GetHolidayBalanceReportOutputQueryParams.prototype, "holidayYearEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxIndex" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputQueryParams.prototype, "maxIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=StartIndex" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputQueryParams.prototype, "startIndex", void 0);
    return GetHolidayBalanceReportOutputQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetHolidayBalanceReportOutputQueryParams = GetHolidayBalanceReportOutputQueryParams;
var GetHolidayBalanceReportOutputHeaders = /** @class */ (function (_super) {
    __extends(GetHolidayBalanceReportOutputHeaders, _super);
    function GetHolidayBalanceReportOutputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputHeaders.prototype, "authorization", void 0);
    return GetHolidayBalanceReportOutputHeaders;
}(utils_1.SpeakeasyBase));
exports.GetHolidayBalanceReportOutputHeaders = GetHolidayBalanceReportOutputHeaders;
var GetHolidayBalanceReportOutputRequest = /** @class */ (function (_super) {
    __extends(GetHolidayBalanceReportOutputRequest, _super);
    function GetHolidayBalanceReportOutputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetHolidayBalanceReportOutputQueryParams)
    ], GetHolidayBalanceReportOutputRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetHolidayBalanceReportOutputHeaders)
    ], GetHolidayBalanceReportOutputRequest.prototype, "headers", void 0);
    return GetHolidayBalanceReportOutputRequest;
}(utils_1.SpeakeasyBase));
exports.GetHolidayBalanceReportOutputRequest = GetHolidayBalanceReportOutputRequest;
var GetHolidayBalanceReportOutputResponse = /** @class */ (function (_super) {
    __extends(GetHolidayBalanceReportOutputResponse, _super);
    function GetHolidayBalanceReportOutputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorModel)
    ], GetHolidayBalanceReportOutputResponse.prototype, "errorModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetHolidayBalanceReportOutputResponse.prototype, "getHolidayBalanceReportOutput200ApplicationJSONBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetHolidayBalanceReportOutputResponse.prototype, "statusCode", void 0);
    return GetHolidayBalanceReportOutputResponse;
}(utils_1.SpeakeasyBase));
exports.GetHolidayBalanceReportOutputResponse = GetHolidayBalanceReportOutputResponse;
