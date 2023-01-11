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
exports.GenerateNetworkReportResponse = void 0;
var utils_1 = require("../../../internal/utils");
var reportfooter_1 = require("./reportfooter");
var reportheader_1 = require("./reportheader");
var reportrow_1 = require("./reportrow");
// GenerateNetworkReportResponse
/**
 * The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "dateRange": { "startDate": {"year": 2018, "month": 9, "day": 1}, "endDate": {"year": 2018, "month": 9, "day": 1} }, "localizationSettings": { "currencyCode": "USD", "languageCode": "en-US" } } }, { "row": { "dimensionValues": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", displayLabel: "My app name!" } }, "metricValues": { "ESTIMATED_EARNINGS": {"microsValue": 6500000} } } }, { "footer": {"matchingRowCount": 1} }]
**/
var GenerateNetworkReportResponse = /** @class */ (function (_super) {
    __extends(GenerateNetworkReportResponse, _super);
    function GenerateNetworkReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=footer" }),
        __metadata("design:type", reportfooter_1.ReportFooter)
    ], GenerateNetworkReportResponse.prototype, "footer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=header" }),
        __metadata("design:type", reportheader_1.ReportHeader)
    ], GenerateNetworkReportResponse.prototype, "header", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=row" }),
        __metadata("design:type", reportrow_1.ReportRow)
    ], GenerateNetworkReportResponse.prototype, "row", void 0);
    return GenerateNetworkReportResponse;
}(utils_1.SpeakeasyBase));
exports.GenerateNetworkReportResponse = GenerateNetworkReportResponse;
