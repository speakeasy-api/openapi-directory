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
exports.GetAnatomyGeneByTaxonAssociationsResponse = exports.GetAnatomyGeneByTaxonAssociationsRequest = exports.GetAnatomyGeneByTaxonAssociationsQueryParams = exports.GetAnatomyGeneByTaxonAssociationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetAnatomyGeneByTaxonAssociationsPathParams = /** @class */ (function (_super) {
    __extends(GetAnatomyGeneByTaxonAssociationsPathParams, _super);
    function GetAnatomyGeneByTaxonAssociationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetAnatomyGeneByTaxonAssociationsPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=taxid" }),
        __metadata("design:type", String)
    ], GetAnatomyGeneByTaxonAssociationsPathParams.prototype, "taxid", void 0);
    return GetAnatomyGeneByTaxonAssociationsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetAnatomyGeneByTaxonAssociationsPathParams = GetAnatomyGeneByTaxonAssociationsPathParams;
var GetAnatomyGeneByTaxonAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetAnatomyGeneByTaxonAssociationsQueryParams, _super);
    function GetAnatomyGeneByTaxonAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direct" }),
        __metadata("design:type", Boolean)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "direct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direct_taxon" }),
        __metadata("design:type", Boolean)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "directTaxon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=evidence" }),
        __metadata("design:type", String)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "evidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" }),
        __metadata("design:type", Boolean)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "excludeAutomaticAssertions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet" }),
        __metadata("design:type", Boolean)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "facet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet_fields" }),
        __metadata("design:type", Array)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "facetFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fetch_objects" }),
        __metadata("design:type", Boolean)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "fetchObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=relation" }),
        __metadata("design:type", String)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "relation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slim" }),
        __metadata("design:type", Array)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "slim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=taxon" }),
        __metadata("design:type", Array)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "taxon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unselect_evidence" }),
        __metadata("design:type", Boolean)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "unselectEvidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=use_compact_associations" }),
        __metadata("design:type", Boolean)
    ], GetAnatomyGeneByTaxonAssociationsQueryParams.prototype, "useCompactAssociations", void 0);
    return GetAnatomyGeneByTaxonAssociationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAnatomyGeneByTaxonAssociationsQueryParams = GetAnatomyGeneByTaxonAssociationsQueryParams;
var GetAnatomyGeneByTaxonAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetAnatomyGeneByTaxonAssociationsRequest, _super);
    function GetAnatomyGeneByTaxonAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAnatomyGeneByTaxonAssociationsPathParams)
    ], GetAnatomyGeneByTaxonAssociationsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAnatomyGeneByTaxonAssociationsQueryParams)
    ], GetAnatomyGeneByTaxonAssociationsRequest.prototype, "queryParams", void 0);
    return GetAnatomyGeneByTaxonAssociationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAnatomyGeneByTaxonAssociationsRequest = GetAnatomyGeneByTaxonAssociationsRequest;
var GetAnatomyGeneByTaxonAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetAnatomyGeneByTaxonAssociationsResponse, _super);
    function GetAnatomyGeneByTaxonAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAnatomyGeneByTaxonAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAnatomyGeneByTaxonAssociationsResponse.prototype, "statusCode", void 0);
    return GetAnatomyGeneByTaxonAssociationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAnatomyGeneByTaxonAssociationsResponse = GetAnatomyGeneByTaxonAssociationsResponse;
