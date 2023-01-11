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
exports.GetExtractOntologySubgraphResourceResponse = exports.GetExtractOntologySubgraphResourceRequest = exports.GetExtractOntologySubgraphResourceQueryParams = exports.GetExtractOntologySubgraphResourcePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetExtractOntologySubgraphResourcePathParams = /** @class */ (function (_super) {
    __extends(GetExtractOntologySubgraphResourcePathParams, _super);
    function GetExtractOntologySubgraphResourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=node" }),
        __metadata("design:type", String)
    ], GetExtractOntologySubgraphResourcePathParams.prototype, "node", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ontology" }),
        __metadata("design:type", String)
    ], GetExtractOntologySubgraphResourcePathParams.prototype, "ontology", void 0);
    return GetExtractOntologySubgraphResourcePathParams;
}(utils_1.SpeakeasyBase));
exports.GetExtractOntologySubgraphResourcePathParams = GetExtractOntologySubgraphResourcePathParams;
var GetExtractOntologySubgraphResourceQueryParams = /** @class */ (function (_super) {
    __extends(GetExtractOntologySubgraphResourceQueryParams, _super);
    function GetExtractOntologySubgraphResourceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cnode" }),
        __metadata("design:type", Array)
    ], GetExtractOntologySubgraphResourceQueryParams.prototype, "cnode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_ancestors" }),
        __metadata("design:type", Boolean)
    ], GetExtractOntologySubgraphResourceQueryParams.prototype, "includeAncestors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_descendants" }),
        __metadata("design:type", Boolean)
    ], GetExtractOntologySubgraphResourceQueryParams.prototype, "includeDescendants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_meta" }),
        __metadata("design:type", Boolean)
    ], GetExtractOntologySubgraphResourceQueryParams.prototype, "includeMeta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=relation" }),
        __metadata("design:type", Array)
    ], GetExtractOntologySubgraphResourceQueryParams.prototype, "relation", void 0);
    return GetExtractOntologySubgraphResourceQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetExtractOntologySubgraphResourceQueryParams = GetExtractOntologySubgraphResourceQueryParams;
var GetExtractOntologySubgraphResourceRequest = /** @class */ (function (_super) {
    __extends(GetExtractOntologySubgraphResourceRequest, _super);
    function GetExtractOntologySubgraphResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetExtractOntologySubgraphResourcePathParams)
    ], GetExtractOntologySubgraphResourceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetExtractOntologySubgraphResourceQueryParams)
    ], GetExtractOntologySubgraphResourceRequest.prototype, "queryParams", void 0);
    return GetExtractOntologySubgraphResourceRequest;
}(utils_1.SpeakeasyBase));
exports.GetExtractOntologySubgraphResourceRequest = GetExtractOntologySubgraphResourceRequest;
var GetExtractOntologySubgraphResourceResponse = /** @class */ (function (_super) {
    __extends(GetExtractOntologySubgraphResourceResponse, _super);
    function GetExtractOntologySubgraphResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetExtractOntologySubgraphResourceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetExtractOntologySubgraphResourceResponse.prototype, "statusCode", void 0);
    return GetExtractOntologySubgraphResourceResponse;
}(utils_1.SpeakeasyBase));
exports.GetExtractOntologySubgraphResourceResponse = GetExtractOntologySubgraphResourceResponse;
