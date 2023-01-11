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
exports.GetIntersectionsIntersectionIdOutputFormatResponse = exports.GetIntersectionsIntersectionIdOutputFormatRequest = exports.GetIntersectionsIntersectionIdOutputFormatQueryParams = exports.GetIntersectionsIntersectionIdOutputFormatPathParams = exports.GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum;
(function (GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum) {
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Json"] = "json";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum = exports.GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum || (exports.GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum = {}));
var GetIntersectionsIntersectionIdOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetIntersectionsIntersectionIdOutputFormatPathParams, _super);
    function GetIntersectionsIntersectionIdOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=intersectionID" }),
        __metadata("design:type", String)
    ], GetIntersectionsIntersectionIdOutputFormatPathParams.prototype, "intersectionID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetIntersectionsIntersectionIdOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetIntersectionsIntersectionIdOutputFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetIntersectionsIntersectionIdOutputFormatPathParams = GetIntersectionsIntersectionIdOutputFormatPathParams;
var GetIntersectionsIntersectionIdOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetIntersectionsIntersectionIdOutputFormatQueryParams, _super);
    function GetIntersectionsIntersectionIdOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetIntersectionsIntersectionIdOutputFormatQueryParams.prototype, "outputSRS", void 0);
    return GetIntersectionsIntersectionIdOutputFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetIntersectionsIntersectionIdOutputFormatQueryParams = GetIntersectionsIntersectionIdOutputFormatQueryParams;
var GetIntersectionsIntersectionIdOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetIntersectionsIntersectionIdOutputFormatRequest, _super);
    function GetIntersectionsIntersectionIdOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntersectionsIntersectionIdOutputFormatPathParams)
    ], GetIntersectionsIntersectionIdOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntersectionsIntersectionIdOutputFormatQueryParams)
    ], GetIntersectionsIntersectionIdOutputFormatRequest.prototype, "queryParams", void 0);
    return GetIntersectionsIntersectionIdOutputFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetIntersectionsIntersectionIdOutputFormatRequest = GetIntersectionsIntersectionIdOutputFormatRequest;
var GetIntersectionsIntersectionIdOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetIntersectionsIntersectionIdOutputFormatResponse, _super);
    function GetIntersectionsIntersectionIdOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetIntersectionsIntersectionIdOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetIntersectionsIntersectionIdOutputFormatResponse.prototype, "statusCode", void 0);
    return GetIntersectionsIntersectionIdOutputFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetIntersectionsIntersectionIdOutputFormatResponse = GetIntersectionsIntersectionIdOutputFormatResponse;
