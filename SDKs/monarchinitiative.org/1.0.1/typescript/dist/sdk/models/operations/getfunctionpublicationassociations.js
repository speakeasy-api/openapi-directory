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
exports.GetFunctionPublicationAssociationsResponse = exports.GetFunctionPublicationAssociationsRequest = exports.GetFunctionPublicationAssociationsQueryParams = exports.GetFunctionPublicationAssociationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetFunctionPublicationAssociationsPathParams = /** @class */ (function (_super) {
    __extends(GetFunctionPublicationAssociationsPathParams, _super);
    function GetFunctionPublicationAssociationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetFunctionPublicationAssociationsPathParams.prototype, "id", void 0);
    return GetFunctionPublicationAssociationsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetFunctionPublicationAssociationsPathParams = GetFunctionPublicationAssociationsPathParams;
var GetFunctionPublicationAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetFunctionPublicationAssociationsQueryParams, _super);
    function GetFunctionPublicationAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=evidence" }),
        __metadata("design:type", Array)
    ], GetFunctionPublicationAssociationsQueryParams.prototype, "evidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetFunctionPublicationAssociationsQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetFunctionPublicationAssociationsQueryParams.prototype, "start", void 0);
    return GetFunctionPublicationAssociationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetFunctionPublicationAssociationsQueryParams = GetFunctionPublicationAssociationsQueryParams;
var GetFunctionPublicationAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetFunctionPublicationAssociationsRequest, _super);
    function GetFunctionPublicationAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFunctionPublicationAssociationsPathParams)
    ], GetFunctionPublicationAssociationsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFunctionPublicationAssociationsQueryParams)
    ], GetFunctionPublicationAssociationsRequest.prototype, "queryParams", void 0);
    return GetFunctionPublicationAssociationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetFunctionPublicationAssociationsRequest = GetFunctionPublicationAssociationsRequest;
var GetFunctionPublicationAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetFunctionPublicationAssociationsResponse, _super);
    function GetFunctionPublicationAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFunctionPublicationAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFunctionPublicationAssociationsResponse.prototype, "statusCode", void 0);
    return GetFunctionPublicationAssociationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetFunctionPublicationAssociationsResponse = GetFunctionPublicationAssociationsResponse;
