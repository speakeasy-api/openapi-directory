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
exports.BookingAvailabilityTourgradesPricingmatrixResponse = exports.BookingAvailabilityTourgradesPricingmatrixRequest = exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJson = exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData = exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates = exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades = exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix = exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices = exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices = exports.BookingAvailabilityTourgradesPricingmatrixRequestBody = exports.BookingAvailabilityTourgradesPricingmatrixHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var BookingAvailabilityTourgradesPricingmatrixHeaders = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesPricingmatrixHeaders, _super);
    function BookingAvailabilityTourgradesPricingmatrixHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrixHeaders.prototype, "acceptLanguage", void 0);
    return BookingAvailabilityTourgradesPricingmatrixHeaders;
}(utils_1.SpeakeasyBase));
exports.BookingAvailabilityTourgradesPricingmatrixHeaders = BookingAvailabilityTourgradesPricingmatrixHeaders;
var BookingAvailabilityTourgradesPricingmatrixRequestBody = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesPricingmatrixRequestBody, _super);
    function BookingAvailabilityTourgradesPricingmatrixRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrixRequestBody.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=month" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrixRequestBody.prototype, "month", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrixRequestBody.prototype, "productCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrixRequestBody.prototype, "year", void 0);
    return BookingAvailabilityTourgradesPricingmatrixRequestBody;
}(utils_1.SpeakeasyBase));
exports.BookingAvailabilityTourgradesPricingmatrixRequestBody = BookingAvailabilityTourgradesPricingmatrixRequestBody;
var BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices, _super);
    function BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantNetPrice" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices.prototype, "merchantNetPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantNetPriceFormatted" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices.prototype, "merchantNetPriceFormatted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minNoOfTravellersRequiredForPrice" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices.prototype, "minNoOfTravellersRequiredForPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceFormatted" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices.prototype, "priceFormatted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices.prototype, "sortOrder", void 0);
    return BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices;
}(utils_1.SpeakeasyBase));
exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices = BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices;
var BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices, _super);
    function BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandId" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices.prototype, "bandId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumCountRequired" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices.prototype, "maximumCountRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumCountRequired" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices.prototype, "minimumCountRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prices", elemType: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices.prototype, "prices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices.prototype, "sortOrder", void 0);
    return BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices;
}(utils_1.SpeakeasyBase));
exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices = BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices;
var BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix, _super);
    function BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ageBandPrices", elemType: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix.prototype, "ageBandPrices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bookingDate" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix.prototype, "bookingDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pricingUnit" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix.prototype, "pricingUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix.prototype, "sortOrder", void 0);
    return BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix;
}(utils_1.SpeakeasyBase));
exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix = BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix;
var BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades, _super);
    function BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gradeCode" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades.prototype, "gradeCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gradeTitle" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades.prototype, "gradeTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pricingMatrix", elemType: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades.prototype, "pricingMatrix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades.prototype, "sortOrder", void 0);
    return BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades;
}(utils_1.SpeakeasyBase));
exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades = BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades;
var BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates, _super);
    function BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bookingDate" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates.prototype, "bookingDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callForLastMinAvailability" }),
        __metadata("design:type", Boolean)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates.prototype, "callForLastMinAvailability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates.prototype, "sortOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tourGrades", elemType: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates.prototype, "tourGrades", void 0);
    return BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates;
}(utils_1.SpeakeasyBase));
exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates = BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates;
var BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData, _super);
    function BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bookingMonth" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData.prototype, "bookingMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dates", elemType: BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData.prototype, "dates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pricingUnit" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData.prototype, "pricingUnit", void 0);
    return BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData = BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData;
var BookingAvailabilityTourgradesPricingmatrix200ApplicationJson = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesPricingmatrix200ApplicationJson, _super);
    function BookingAvailabilityTourgradesPricingmatrix200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extraInfo" }),
        __metadata("design:type", Object)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extraObject" }),
        __metadata("design:type", Object)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.prototype, "vmid", void 0);
    return BookingAvailabilityTourgradesPricingmatrix200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.BookingAvailabilityTourgradesPricingmatrix200ApplicationJson = BookingAvailabilityTourgradesPricingmatrix200ApplicationJson;
var BookingAvailabilityTourgradesPricingmatrixRequest = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesPricingmatrixRequest, _super);
    function BookingAvailabilityTourgradesPricingmatrixRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BookingAvailabilityTourgradesPricingmatrixHeaders)
    ], BookingAvailabilityTourgradesPricingmatrixRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", BookingAvailabilityTourgradesPricingmatrixRequestBody)
    ], BookingAvailabilityTourgradesPricingmatrixRequest.prototype, "request", void 0);
    return BookingAvailabilityTourgradesPricingmatrixRequest;
}(utils_1.SpeakeasyBase));
exports.BookingAvailabilityTourgradesPricingmatrixRequest = BookingAvailabilityTourgradesPricingmatrixRequest;
var BookingAvailabilityTourgradesPricingmatrixResponse = /** @class */ (function (_super) {
    __extends(BookingAvailabilityTourgradesPricingmatrixResponse, _super);
    function BookingAvailabilityTourgradesPricingmatrixResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], BookingAvailabilityTourgradesPricingmatrixResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], BookingAvailabilityTourgradesPricingmatrixResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BookingAvailabilityTourgradesPricingmatrix200ApplicationJson)
    ], BookingAvailabilityTourgradesPricingmatrixResponse.prototype, "bookingAvailabilityTourgradesPricingmatrix200ApplicationJSONObject", void 0);
    return BookingAvailabilityTourgradesPricingmatrixResponse;
}(utils_1.SpeakeasyBase));
exports.BookingAvailabilityTourgradesPricingmatrixResponse = BookingAvailabilityTourgradesPricingmatrixResponse;
