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
exports.GetSetupV1LocationsResponse = exports.GetSetupV1LocationsRequest = exports.GetSetupV1LocationsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetSetupV1LocationsQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsQueryParams, _super);
    function GetSetupV1LocationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=deleted" }),
        __metadata("design:type", Boolean)
    ], GetSetupV1LocationsQueryParams.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1LocationsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetSetupV1LocationsQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1LocationsQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=serviceId" }),
        __metadata("design:type", String)
    ], GetSetupV1LocationsQueryParams.prototype, "serviceId", void 0);
    return GetSetupV1LocationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSetupV1LocationsQueryParams = GetSetupV1LocationsQueryParams;
var GetSetupV1LocationsRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsRequest, _super);
    function GetSetupV1LocationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSetupV1LocationsQueryParams)
    ], GetSetupV1LocationsRequest.prototype, "queryParams", void 0);
    return GetSetupV1LocationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetSetupV1LocationsRequest = GetSetupV1LocationsRequest;
var GetSetupV1LocationsResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsResponse, _super);
    function GetSetupV1LocationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSetupV1LocationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSetupV1LocationsResponse.prototype, "locationListViewModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSetupV1LocationsResponse.prototype, "statusCode", void 0);
    return GetSetupV1LocationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetSetupV1LocationsResponse = GetSetupV1LocationsResponse;
