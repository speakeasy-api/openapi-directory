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
exports.GetPhenotypeGeneByTaxonAssociationsResponse = exports.GetPhenotypeGeneByTaxonAssociationsRequest = exports.GetPhenotypeGeneByTaxonAssociationsQueryParams = exports.GetPhenotypeGeneByTaxonAssociationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetPhenotypeGeneByTaxonAssociationsPathParams = /** @class */ (function (_super) {
    __extends(GetPhenotypeGeneByTaxonAssociationsPathParams, _super);
    function GetPhenotypeGeneByTaxonAssociationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPhenotypeGeneByTaxonAssociationsPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=taxid" }),
        __metadata("design:type", String)
    ], GetPhenotypeGeneByTaxonAssociationsPathParams.prototype, "taxid", void 0);
    return GetPhenotypeGeneByTaxonAssociationsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPhenotypeGeneByTaxonAssociationsPathParams = GetPhenotypeGeneByTaxonAssociationsPathParams;
var GetPhenotypeGeneByTaxonAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetPhenotypeGeneByTaxonAssociationsQueryParams, _super);
    function GetPhenotypeGeneByTaxonAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direct" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeGeneByTaxonAssociationsQueryParams.prototype, "direct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=evidence" }),
        __metadata("design:type", String)
    ], GetPhenotypeGeneByTaxonAssociationsQueryParams.prototype, "evidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeGeneByTaxonAssociationsQueryParams.prototype, "excludeAutomaticAssertions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeGeneByTaxonAssociationsQueryParams.prototype, "facet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet_fields" }),
        __metadata("design:type", Array)
    ], GetPhenotypeGeneByTaxonAssociationsQueryParams.prototype, "facetFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fetch_objects" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeGeneByTaxonAssociationsQueryParams.prototype, "fetchObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetPhenotypeGeneByTaxonAssociationsQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slim" }),
        __metadata("design:type", Array)
    ], GetPhenotypeGeneByTaxonAssociationsQueryParams.prototype, "slim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetPhenotypeGeneByTaxonAssociationsQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unselect_evidence" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeGeneByTaxonAssociationsQueryParams.prototype, "unselectEvidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=use_compact_associations" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeGeneByTaxonAssociationsQueryParams.prototype, "useCompactAssociations", void 0);
    return GetPhenotypeGeneByTaxonAssociationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPhenotypeGeneByTaxonAssociationsQueryParams = GetPhenotypeGeneByTaxonAssociationsQueryParams;
var GetPhenotypeGeneByTaxonAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetPhenotypeGeneByTaxonAssociationsRequest, _super);
    function GetPhenotypeGeneByTaxonAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPhenotypeGeneByTaxonAssociationsPathParams)
    ], GetPhenotypeGeneByTaxonAssociationsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPhenotypeGeneByTaxonAssociationsQueryParams)
    ], GetPhenotypeGeneByTaxonAssociationsRequest.prototype, "queryParams", void 0);
    return GetPhenotypeGeneByTaxonAssociationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetPhenotypeGeneByTaxonAssociationsRequest = GetPhenotypeGeneByTaxonAssociationsRequest;
var GetPhenotypeGeneByTaxonAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetPhenotypeGeneByTaxonAssociationsResponse, _super);
    function GetPhenotypeGeneByTaxonAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPhenotypeGeneByTaxonAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPhenotypeGeneByTaxonAssociationsResponse.prototype, "statusCode", void 0);
    return GetPhenotypeGeneByTaxonAssociationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetPhenotypeGeneByTaxonAssociationsResponse = GetPhenotypeGeneByTaxonAssociationsResponse;
