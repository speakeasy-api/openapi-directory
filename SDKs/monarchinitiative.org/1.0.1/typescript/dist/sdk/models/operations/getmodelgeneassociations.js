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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetModelGeneAssociationsResponse = exports.GetModelGeneAssociationsRequest = exports.GetModelGeneAssociationsQueryParams = exports.GetModelGeneAssociationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetModelGeneAssociationsPathParams = /** @class */ (function (_super) {
    __extends(GetModelGeneAssociationsPathParams, _super);
    function GetModelGeneAssociationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetModelGeneAssociationsPathParams.prototype, "id", void 0);
    return GetModelGeneAssociationsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetModelGeneAssociationsPathParams = GetModelGeneAssociationsPathParams;
var GetModelGeneAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetModelGeneAssociationsQueryParams, _super);
    function GetModelGeneAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direct" }),
        __metadata("design:type", Boolean)
    ], GetModelGeneAssociationsQueryParams.prototype, "direct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direct_taxon" }),
        __metadata("design:type", Boolean)
    ], GetModelGeneAssociationsQueryParams.prototype, "directTaxon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=evidence" }),
        __metadata("design:type", String)
    ], GetModelGeneAssociationsQueryParams.prototype, "evidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" }),
        __metadata("design:type", Boolean)
    ], GetModelGeneAssociationsQueryParams.prototype, "excludeAutomaticAssertions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet" }),
        __metadata("design:type", Boolean)
    ], GetModelGeneAssociationsQueryParams.prototype, "facet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet_fields" }),
        __metadata("design:type", Array)
    ], GetModelGeneAssociationsQueryParams.prototype, "facetFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fetch_objects" }),
        __metadata("design:type", Boolean)
    ], GetModelGeneAssociationsQueryParams.prototype, "fetchObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetModelGeneAssociationsQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=relation" }),
        __metadata("design:type", String)
    ], GetModelGeneAssociationsQueryParams.prototype, "relation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetModelGeneAssociationsQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slim" }),
        __metadata("design:type", Array)
    ], GetModelGeneAssociationsQueryParams.prototype, "slim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetModelGeneAssociationsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetModelGeneAssociationsQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=taxon" }),
        __metadata("design:type", Array)
    ], GetModelGeneAssociationsQueryParams.prototype, "taxon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unselect_evidence" }),
        __metadata("design:type", Boolean)
    ], GetModelGeneAssociationsQueryParams.prototype, "unselectEvidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=use_compact_associations" }),
        __metadata("design:type", Boolean)
    ], GetModelGeneAssociationsQueryParams.prototype, "useCompactAssociations", void 0);
    return GetModelGeneAssociationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetModelGeneAssociationsQueryParams = GetModelGeneAssociationsQueryParams;
var GetModelGeneAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetModelGeneAssociationsRequest, _super);
    function GetModelGeneAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetModelGeneAssociationsPathParams)
    ], GetModelGeneAssociationsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetModelGeneAssociationsQueryParams)
    ], GetModelGeneAssociationsRequest.prototype, "queryParams", void 0);
    return GetModelGeneAssociationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetModelGeneAssociationsRequest = GetModelGeneAssociationsRequest;
var GetModelGeneAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetModelGeneAssociationsResponse, _super);
    function GetModelGeneAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AssociationResults)
    ], GetModelGeneAssociationsResponse.prototype, "associationResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetModelGeneAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetModelGeneAssociationsResponse.prototype, "statusCode", void 0);
    return GetModelGeneAssociationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetModelGeneAssociationsResponse = GetModelGeneAssociationsResponse;
