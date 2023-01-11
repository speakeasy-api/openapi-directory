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
exports.GetFunctionTaxonAssociationsResponse = exports.GetFunctionTaxonAssociationsRequest = exports.GetFunctionTaxonAssociationsQueryParams = exports.GetFunctionTaxonAssociationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetFunctionTaxonAssociationsPathParams = /** @class */ (function (_super) {
    __extends(GetFunctionTaxonAssociationsPathParams, _super);
    function GetFunctionTaxonAssociationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetFunctionTaxonAssociationsPathParams.prototype, "id", void 0);
    return GetFunctionTaxonAssociationsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetFunctionTaxonAssociationsPathParams = GetFunctionTaxonAssociationsPathParams;
var GetFunctionTaxonAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetFunctionTaxonAssociationsQueryParams, _super);
    function GetFunctionTaxonAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=evidence" }),
        __metadata("design:type", Array)
    ], GetFunctionTaxonAssociationsQueryParams.prototype, "evidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetFunctionTaxonAssociationsQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetFunctionTaxonAssociationsQueryParams.prototype, "start", void 0);
    return GetFunctionTaxonAssociationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetFunctionTaxonAssociationsQueryParams = GetFunctionTaxonAssociationsQueryParams;
var GetFunctionTaxonAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetFunctionTaxonAssociationsRequest, _super);
    function GetFunctionTaxonAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFunctionTaxonAssociationsPathParams)
    ], GetFunctionTaxonAssociationsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFunctionTaxonAssociationsQueryParams)
    ], GetFunctionTaxonAssociationsRequest.prototype, "queryParams", void 0);
    return GetFunctionTaxonAssociationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetFunctionTaxonAssociationsRequest = GetFunctionTaxonAssociationsRequest;
var GetFunctionTaxonAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetFunctionTaxonAssociationsResponse, _super);
    function GetFunctionTaxonAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFunctionTaxonAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFunctionTaxonAssociationsResponse.prototype, "statusCode", void 0);
    return GetFunctionTaxonAssociationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetFunctionTaxonAssociationsResponse = GetFunctionTaxonAssociationsResponse;
