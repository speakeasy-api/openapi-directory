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
exports.GetNamesInsideResponse = exports.GetNamesInsideRequest = exports.GetNamesInsideQueryParams = exports.GetNamesInsideSortByEnum = exports.GetNamesInsideOutputStyleEnum = exports.GetNamesInsideOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetNamesInsideOutputFormatEnum;
(function (GetNamesInsideOutputFormatEnum) {
    GetNamesInsideOutputFormatEnum["Json"] = "json";
    GetNamesInsideOutputFormatEnum["Xml"] = "xml";
    GetNamesInsideOutputFormatEnum["Kml"] = "kml";
    GetNamesInsideOutputFormatEnum["Csv"] = "csv";
})(GetNamesInsideOutputFormatEnum = exports.GetNamesInsideOutputFormatEnum || (exports.GetNamesInsideOutputFormatEnum = {}));
var GetNamesInsideOutputStyleEnum;
(function (GetNamesInsideOutputStyleEnum) {
    GetNamesInsideOutputStyleEnum["Summary"] = "summary";
    GetNamesInsideOutputStyleEnum["Detail"] = "detail";
})(GetNamesInsideOutputStyleEnum = exports.GetNamesInsideOutputStyleEnum || (exports.GetNamesInsideOutputStyleEnum = {}));
var GetNamesInsideSortByEnum;
(function (GetNamesInsideSortByEnum) {
    GetNamesInsideSortByEnum["Name"] = "name";
    GetNamesInsideSortByEnum["FeatureType"] = "featureType";
    GetNamesInsideSortByEnum["DecisionDate"] = "decisionDate";
})(GetNamesInsideSortByEnum = exports.GetNamesInsideSortByEnum || (exports.GetNamesInsideSortByEnum = {}));
var GetNamesInsideQueryParams = /** @class */ (function (_super) {
    __extends(GetNamesInsideQueryParams, _super);
    function GetNamesInsideQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=bbox" }),
        __metadata("design:type", String)
    ], GetNamesInsideQueryParams.prototype, "bbox", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", Number)
    ], GetNamesInsideQueryParams.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=featureCategory" }),
        __metadata("design:type", String)
    ], GetNamesInsideQueryParams.prototype, "featureCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=featureClass" }),
        __metadata("design:type", String)
    ], GetNamesInsideQueryParams.prototype, "featureClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=featureType" }),
        __metadata("design:type", String)
    ], GetNamesInsideQueryParams.prototype, "featureType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], GetNamesInsideQueryParams.prototype, "itemsPerPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetNamesInsideQueryParams.prototype, "outputFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetNamesInsideQueryParams.prototype, "outputSRS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputStyle" }),
        __metadata("design:type", String)
    ], GetNamesInsideQueryParams.prototype, "outputStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetNamesInsideQueryParams.prototype, "sortBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetNamesInsideQueryParams.prototype, "startIndex", void 0);
    return GetNamesInsideQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNamesInsideQueryParams = GetNamesInsideQueryParams;
var GetNamesInsideRequest = /** @class */ (function (_super) {
    __extends(GetNamesInsideRequest, _super);
    function GetNamesInsideRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNamesInsideQueryParams)
    ], GetNamesInsideRequest.prototype, "queryParams", void 0);
    return GetNamesInsideRequest;
}(utils_1.SpeakeasyBase));
exports.GetNamesInsideRequest = GetNamesInsideRequest;
var GetNamesInsideResponse = /** @class */ (function (_super) {
    __extends(GetNamesInsideResponse, _super);
    function GetNamesInsideResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNamesInsideResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNamesInsideResponse.prototype, "statusCode", void 0);
    return GetNamesInsideResponse;
}(utils_1.SpeakeasyBase));
exports.GetNamesInsideResponse = GetNamesInsideResponse;
