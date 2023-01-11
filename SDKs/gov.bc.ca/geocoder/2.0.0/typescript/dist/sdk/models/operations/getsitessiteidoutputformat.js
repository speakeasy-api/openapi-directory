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
exports.GetSitesSiteIdOutputFormatResponse = exports.GetSitesSiteIdOutputFormatRequest = exports.GetSitesSiteIdOutputFormatQueryParams = exports.GetSitesSiteIdOutputFormatLocationDescriptorEnum = exports.GetSitesSiteIdOutputFormatPathParams = exports.GetSitesSiteIdOutputFormatOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetSitesSiteIdOutputFormatOutputFormatEnum;
(function (GetSitesSiteIdOutputFormatOutputFormatEnum) {
    GetSitesSiteIdOutputFormatOutputFormatEnum["Json"] = "json";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetSitesSiteIdOutputFormatOutputFormatEnum = exports.GetSitesSiteIdOutputFormatOutputFormatEnum || (exports.GetSitesSiteIdOutputFormatOutputFormatEnum = {}));
var GetSitesSiteIdOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdOutputFormatPathParams, _super);
    function GetSitesSiteIdOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetSitesSiteIdOutputFormatPathParams.prototype, "outputFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=siteID" }),
        __metadata("design:type", String)
    ], GetSitesSiteIdOutputFormatPathParams.prototype, "siteID", void 0);
    return GetSitesSiteIdOutputFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSitesSiteIdOutputFormatPathParams = GetSitesSiteIdOutputFormatPathParams;
var GetSitesSiteIdOutputFormatLocationDescriptorEnum;
(function (GetSitesSiteIdOutputFormatLocationDescriptorEnum) {
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetSitesSiteIdOutputFormatLocationDescriptorEnum = exports.GetSitesSiteIdOutputFormatLocationDescriptorEnum || (exports.GetSitesSiteIdOutputFormatLocationDescriptorEnum = {}));
var GetSitesSiteIdOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdOutputFormatQueryParams, _super);
    function GetSitesSiteIdOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetSitesSiteIdOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetSitesSiteIdOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetSitesSiteIdOutputFormatQueryParams.prototype, "outputSRS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetSitesSiteIdOutputFormatQueryParams.prototype, "setBack", void 0);
    return GetSitesSiteIdOutputFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSitesSiteIdOutputFormatQueryParams = GetSitesSiteIdOutputFormatQueryParams;
var GetSitesSiteIdOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdOutputFormatRequest, _super);
    function GetSitesSiteIdOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSitesSiteIdOutputFormatPathParams)
    ], GetSitesSiteIdOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSitesSiteIdOutputFormatQueryParams)
    ], GetSitesSiteIdOutputFormatRequest.prototype, "queryParams", void 0);
    return GetSitesSiteIdOutputFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetSitesSiteIdOutputFormatRequest = GetSitesSiteIdOutputFormatRequest;
var GetSitesSiteIdOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdOutputFormatResponse, _super);
    function GetSitesSiteIdOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSitesSiteIdOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSitesSiteIdOutputFormatResponse.prototype, "statusCode", void 0);
    return GetSitesSiteIdOutputFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetSitesSiteIdOutputFormatResponse = GetSitesSiteIdOutputFormatResponse;
