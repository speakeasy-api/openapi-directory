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
exports.GetCountryResponse = exports.GetCountryRequest = exports.GetCountryQueryParams = exports.GetCountrySortEnum = exports.GetCountryOrderEnum = exports.GetCountryPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetCountryPathParams = /** @class */ (function (_super) {
    __extends(GetCountryPathParams, _super);
    function GetCountryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=countryKey" }),
        __metadata("design:type", String)
    ], GetCountryPathParams.prototype, "countryKey", void 0);
    return GetCountryPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCountryPathParams = GetCountryPathParams;
var GetCountryOrderEnum;
(function (GetCountryOrderEnum) {
    GetCountryOrderEnum["Ascending"] = "ascending";
    GetCountryOrderEnum["Descending"] = "descending";
})(GetCountryOrderEnum = exports.GetCountryOrderEnum || (exports.GetCountryOrderEnum = {}));
var GetCountrySortEnum;
(function (GetCountrySortEnum) {
    GetCountrySortEnum["Key"] = "key";
    GetCountrySortEnum["Label"] = "label";
})(GetCountrySortEnum = exports.GetCountrySortEnum || (exports.GetCountrySortEnum = {}));
var GetCountryQueryParams = /** @class */ (function (_super) {
    __extends(GetCountryQueryParams, _super);
    function GetCountryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=marketId" }),
        __metadata("design:type", String)
    ], GetCountryQueryParams.prototype, "marketId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetCountryQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCountryQueryParams.prototype, "sort", void 0);
    return GetCountryQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCountryQueryParams = GetCountryQueryParams;
var GetCountryRequest = /** @class */ (function (_super) {
    __extends(GetCountryRequest, _super);
    function GetCountryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCountryPathParams)
    ], GetCountryRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCountryQueryParams)
    ], GetCountryRequest.prototype, "queryParams", void 0);
    return GetCountryRequest;
}(utils_1.SpeakeasyBase));
exports.GetCountryRequest = GetCountryRequest;
var GetCountryResponse = /** @class */ (function (_super) {
    __extends(GetCountryResponse, _super);
    function GetCountryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], GetCountryResponse.prototype, "arrayOfCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCountryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCountryResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCountryResponse.prototype, "errorLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCountryResponse.prototype, "statusCode", void 0);
    return GetCountryResponse;
}(utils_1.SpeakeasyBase));
exports.GetCountryResponse = GetCountryResponse;
