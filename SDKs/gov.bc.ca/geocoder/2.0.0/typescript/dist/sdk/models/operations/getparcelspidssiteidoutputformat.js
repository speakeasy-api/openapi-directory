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
exports.GetParcelsPidsSiteIdOutputFormatResponse = exports.GetParcelsPidsSiteIdOutputFormatRequest = exports.GetParcelsPidsSiteIdOutputFormatPathParams = exports.GetParcelsPidsSiteIdOutputFormatOutputFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetParcelsPidsSiteIdOutputFormatOutputFormatEnum;
(function (GetParcelsPidsSiteIdOutputFormatOutputFormatEnum) {
    GetParcelsPidsSiteIdOutputFormatOutputFormatEnum["Json"] = "json";
    GetParcelsPidsSiteIdOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetParcelsPidsSiteIdOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetParcelsPidsSiteIdOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetParcelsPidsSiteIdOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetParcelsPidsSiteIdOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetParcelsPidsSiteIdOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetParcelsPidsSiteIdOutputFormatOutputFormatEnum = exports.GetParcelsPidsSiteIdOutputFormatOutputFormatEnum || (exports.GetParcelsPidsSiteIdOutputFormatOutputFormatEnum = {}));
var GetParcelsPidsSiteIdOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetParcelsPidsSiteIdOutputFormatPathParams, _super);
    function GetParcelsPidsSiteIdOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetParcelsPidsSiteIdOutputFormatPathParams.prototype, "outputFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=siteID" }),
        __metadata("design:type", String)
    ], GetParcelsPidsSiteIdOutputFormatPathParams.prototype, "siteID", void 0);
    return GetParcelsPidsSiteIdOutputFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetParcelsPidsSiteIdOutputFormatPathParams = GetParcelsPidsSiteIdOutputFormatPathParams;
var GetParcelsPidsSiteIdOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetParcelsPidsSiteIdOutputFormatRequest, _super);
    function GetParcelsPidsSiteIdOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetParcelsPidsSiteIdOutputFormatPathParams)
    ], GetParcelsPidsSiteIdOutputFormatRequest.prototype, "pathParams", void 0);
    return GetParcelsPidsSiteIdOutputFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetParcelsPidsSiteIdOutputFormatRequest = GetParcelsPidsSiteIdOutputFormatRequest;
var GetParcelsPidsSiteIdOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetParcelsPidsSiteIdOutputFormatResponse, _super);
    function GetParcelsPidsSiteIdOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetParcelsPidsSiteIdOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetParcelsPidsSiteIdOutputFormatResponse.prototype, "statusCode", void 0);
    return GetParcelsPidsSiteIdOutputFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetParcelsPidsSiteIdOutputFormatResponse = GetParcelsPidsSiteIdOutputFormatResponse;
