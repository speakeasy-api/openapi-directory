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
exports.GetCountriesResponse = exports.GetCountriesRequest = exports.GetCountriesQueryParams = exports.GetCountriesSortEnum = exports.GetCountriesOrderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetCountriesOrderEnum;
(function (GetCountriesOrderEnum) {
    GetCountriesOrderEnum["Ascending"] = "ascending";
    GetCountriesOrderEnum["Descending"] = "descending";
})(GetCountriesOrderEnum = exports.GetCountriesOrderEnum || (exports.GetCountriesOrderEnum = {}));
var GetCountriesSortEnum;
(function (GetCountriesSortEnum) {
    GetCountriesSortEnum["Key"] = "key";
    GetCountriesSortEnum["Label"] = "label";
})(GetCountriesSortEnum = exports.GetCountriesSortEnum || (exports.GetCountriesSortEnum = {}));
var GetCountriesQueryParams = /** @class */ (function (_super) {
    __extends(GetCountriesQueryParams, _super);
    function GetCountriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=marketId" }),
        __metadata("design:type", String)
    ], GetCountriesQueryParams.prototype, "marketId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetCountriesQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=regionName" }),
        __metadata("design:type", String)
    ], GetCountriesQueryParams.prototype, "regionName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=regionTypeId" }),
        __metadata("design:type", Number)
    ], GetCountriesQueryParams.prototype, "regionTypeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCountriesQueryParams.prototype, "sort", void 0);
    return GetCountriesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCountriesQueryParams = GetCountriesQueryParams;
var GetCountriesRequest = /** @class */ (function (_super) {
    __extends(GetCountriesRequest, _super);
    function GetCountriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCountriesQueryParams)
    ], GetCountriesRequest.prototype, "queryParams", void 0);
    return GetCountriesRequest;
}(utils_1.SpeakeasyBase));
exports.GetCountriesRequest = GetCountriesRequest;
var GetCountriesResponse = /** @class */ (function (_super) {
    __extends(GetCountriesResponse, _super);
    function GetCountriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], GetCountriesResponse.prototype, "arrayOfCountrySummary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCountriesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCountriesResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCountriesResponse.prototype, "errorLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCountriesResponse.prototype, "statusCode", void 0);
    return GetCountriesResponse;
}(utils_1.SpeakeasyBase));
exports.GetCountriesResponse = GetCountriesResponse;
