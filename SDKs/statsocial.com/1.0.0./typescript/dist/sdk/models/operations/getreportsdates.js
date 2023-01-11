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
exports.GetReportsDatesResponse = exports.GetReportsDatesRequest = exports.GetReportsDatesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetReportsDatesQueryParams = /** @class */ (function (_super) {
    __extends(GetReportsDatesQueryParams, _super);
    function GetReportsDatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=report_hash" }),
        __metadata("design:type", String)
    ], GetReportsDatesQueryParams.prototype, "reportHash", void 0);
    return GetReportsDatesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetReportsDatesQueryParams = GetReportsDatesQueryParams;
var GetReportsDatesRequest = /** @class */ (function (_super) {
    __extends(GetReportsDatesRequest, _super);
    function GetReportsDatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReportsDatesQueryParams)
    ], GetReportsDatesRequest.prototype, "queryParams", void 0);
    return GetReportsDatesRequest;
}(utils_1.SpeakeasyBase));
exports.GetReportsDatesRequest = GetReportsDatesRequest;
var GetReportsDatesResponse = /** @class */ (function (_super) {
    __extends(GetReportsDatesResponse, _super);
    function GetReportsDatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsDatesResponse.prototype, "fourHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsDatesResponse.prototype, "fourHundredAndOneError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsDatesResponse.prototype, "fourHundredAndThreeError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsDatesResponse.prototype, "fourHundredAndFourError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsDatesResponse.prototype, "fiveHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetReportsDatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetReportsDatesResponse.prototype, "reportDates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetReportsDatesResponse.prototype, "statusCode", void 0);
    return GetReportsDatesResponse;
}(utils_1.SpeakeasyBase));
exports.GetReportsDatesResponse = GetReportsDatesResponse;
