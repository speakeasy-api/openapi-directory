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
exports.GetNamesDecisionsYearResponse = exports.GetNamesDecisionsYearRequest = exports.GetNamesDecisionsYearQueryParams = exports.GetNamesDecisionsYearSortByEnum = exports.GetNamesDecisionsYearOutputStyleEnum = exports.GetNamesDecisionsYearOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetNamesDecisionsYearOutputFormatEnum;
(function (GetNamesDecisionsYearOutputFormatEnum) {
    GetNamesDecisionsYearOutputFormatEnum["Json"] = "json";
    GetNamesDecisionsYearOutputFormatEnum["Xml"] = "xml";
    GetNamesDecisionsYearOutputFormatEnum["Kml"] = "kml";
    GetNamesDecisionsYearOutputFormatEnum["Csv"] = "csv";
})(GetNamesDecisionsYearOutputFormatEnum = exports.GetNamesDecisionsYearOutputFormatEnum || (exports.GetNamesDecisionsYearOutputFormatEnum = {}));
var GetNamesDecisionsYearOutputStyleEnum;
(function (GetNamesDecisionsYearOutputStyleEnum) {
    GetNamesDecisionsYearOutputStyleEnum["Summary"] = "summary";
    GetNamesDecisionsYearOutputStyleEnum["Detail"] = "detail";
})(GetNamesDecisionsYearOutputStyleEnum = exports.GetNamesDecisionsYearOutputStyleEnum || (exports.GetNamesDecisionsYearOutputStyleEnum = {}));
var GetNamesDecisionsYearSortByEnum;
(function (GetNamesDecisionsYearSortByEnum) {
    GetNamesDecisionsYearSortByEnum["Name"] = "name";
    GetNamesDecisionsYearSortByEnum["FeatureType"] = "featureType";
    GetNamesDecisionsYearSortByEnum["DecisionDate"] = "decisionDate";
})(GetNamesDecisionsYearSortByEnum = exports.GetNamesDecisionsYearSortByEnum || (exports.GetNamesDecisionsYearSortByEnum = {}));
var GetNamesDecisionsYearQueryParams = /** @class */ (function (_super) {
    __extends(GetNamesDecisionsYearQueryParams, _super);
    function GetNamesDecisionsYearQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearQueryParams.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=featureCategory" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "featureCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=featureClass" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "featureClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=featureType" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "featureType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearQueryParams.prototype, "itemsPerPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "outputFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearQueryParams.prototype, "outputSRS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputStyle" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "outputStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "sortBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearQueryParams.prototype, "startIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearQueryParams.prototype, "year", void 0);
    return GetNamesDecisionsYearQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNamesDecisionsYearQueryParams = GetNamesDecisionsYearQueryParams;
var GetNamesDecisionsYearRequest = /** @class */ (function (_super) {
    __extends(GetNamesDecisionsYearRequest, _super);
    function GetNamesDecisionsYearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNamesDecisionsYearQueryParams)
    ], GetNamesDecisionsYearRequest.prototype, "queryParams", void 0);
    return GetNamesDecisionsYearRequest;
}(utils_1.SpeakeasyBase));
exports.GetNamesDecisionsYearRequest = GetNamesDecisionsYearRequest;
var GetNamesDecisionsYearResponse = /** @class */ (function (_super) {
    __extends(GetNamesDecisionsYearResponse, _super);
    function GetNamesDecisionsYearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearResponse.prototype, "statusCode", void 0);
    return GetNamesDecisionsYearResponse;
}(utils_1.SpeakeasyBase));
exports.GetNamesDecisionsYearResponse = GetNamesDecisionsYearResponse;
