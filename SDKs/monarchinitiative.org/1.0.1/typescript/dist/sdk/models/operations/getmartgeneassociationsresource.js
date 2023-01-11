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
exports.GetMartGeneAssociationsResourceResponse = exports.GetMartGeneAssociationsResourceRequest = exports.GetMartGeneAssociationsResourceQueryParams = exports.GetMartGeneAssociationsResourcePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetMartGeneAssociationsResourcePathParams = /** @class */ (function (_super) {
    __extends(GetMartGeneAssociationsResourcePathParams, _super);
    function GetMartGeneAssociationsResourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=object_category" }),
        __metadata("design:type", String)
    ], GetMartGeneAssociationsResourcePathParams.prototype, "objectCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=taxon" }),
        __metadata("design:type", String)
    ], GetMartGeneAssociationsResourcePathParams.prototype, "taxon", void 0);
    return GetMartGeneAssociationsResourcePathParams;
}(utils_1.SpeakeasyBase));
exports.GetMartGeneAssociationsResourcePathParams = GetMartGeneAssociationsResourcePathParams;
var GetMartGeneAssociationsResourceQueryParams = /** @class */ (function (_super) {
    __extends(GetMartGeneAssociationsResourceQueryParams, _super);
    function GetMartGeneAssociationsResourceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slim" }),
        __metadata("design:type", Array)
    ], GetMartGeneAssociationsResourceQueryParams.prototype, "slim", void 0);
    return GetMartGeneAssociationsResourceQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetMartGeneAssociationsResourceQueryParams = GetMartGeneAssociationsResourceQueryParams;
var GetMartGeneAssociationsResourceRequest = /** @class */ (function (_super) {
    __extends(GetMartGeneAssociationsResourceRequest, _super);
    function GetMartGeneAssociationsResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMartGeneAssociationsResourcePathParams)
    ], GetMartGeneAssociationsResourceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMartGeneAssociationsResourceQueryParams)
    ], GetMartGeneAssociationsResourceRequest.prototype, "queryParams", void 0);
    return GetMartGeneAssociationsResourceRequest;
}(utils_1.SpeakeasyBase));
exports.GetMartGeneAssociationsResourceRequest = GetMartGeneAssociationsResourceRequest;
var GetMartGeneAssociationsResourceResponse = /** @class */ (function (_super) {
    __extends(GetMartGeneAssociationsResourceResponse, _super);
    function GetMartGeneAssociationsResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMartGeneAssociationsResourceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMartGeneAssociationsResourceResponse.prototype, "statusCode", void 0);
    return GetMartGeneAssociationsResourceResponse;
}(utils_1.SpeakeasyBase));
exports.GetMartGeneAssociationsResourceResponse = GetMartGeneAssociationsResourceResponse;
