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
exports.GetOntologyTermSubgraphResponse = exports.GetOntologyTermSubgraphRequest = exports.GetOntologyTermSubgraphQueryParams = exports.GetOntologyTermSubgraphPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetOntologyTermSubgraphPathParams = /** @class */ (function (_super) {
    __extends(GetOntologyTermSubgraphPathParams, _super);
    function GetOntologyTermSubgraphPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetOntologyTermSubgraphPathParams.prototype, "id", void 0);
    return GetOntologyTermSubgraphPathParams;
}(utils_1.SpeakeasyBase));
exports.GetOntologyTermSubgraphPathParams = GetOntologyTermSubgraphPathParams;
var GetOntologyTermSubgraphQueryParams = /** @class */ (function (_super) {
    __extends(GetOntologyTermSubgraphQueryParams, _super);
    function GetOntologyTermSubgraphQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cnode" }),
        __metadata("design:type", Array)
    ], GetOntologyTermSubgraphQueryParams.prototype, "cnode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_ancestors" }),
        __metadata("design:type", Boolean)
    ], GetOntologyTermSubgraphQueryParams.prototype, "includeAncestors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_descendants" }),
        __metadata("design:type", Boolean)
    ], GetOntologyTermSubgraphQueryParams.prototype, "includeDescendants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_meta" }),
        __metadata("design:type", Boolean)
    ], GetOntologyTermSubgraphQueryParams.prototype, "includeMeta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=relation" }),
        __metadata("design:type", Array)
    ], GetOntologyTermSubgraphQueryParams.prototype, "relation", void 0);
    return GetOntologyTermSubgraphQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOntologyTermSubgraphQueryParams = GetOntologyTermSubgraphQueryParams;
var GetOntologyTermSubgraphRequest = /** @class */ (function (_super) {
    __extends(GetOntologyTermSubgraphRequest, _super);
    function GetOntologyTermSubgraphRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOntologyTermSubgraphPathParams)
    ], GetOntologyTermSubgraphRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOntologyTermSubgraphQueryParams)
    ], GetOntologyTermSubgraphRequest.prototype, "queryParams", void 0);
    return GetOntologyTermSubgraphRequest;
}(utils_1.SpeakeasyBase));
exports.GetOntologyTermSubgraphRequest = GetOntologyTermSubgraphRequest;
var GetOntologyTermSubgraphResponse = /** @class */ (function (_super) {
    __extends(GetOntologyTermSubgraphResponse, _super);
    function GetOntologyTermSubgraphResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOntologyTermSubgraphResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOntologyTermSubgraphResponse.prototype, "statusCode", void 0);
    return GetOntologyTermSubgraphResponse;
}(utils_1.SpeakeasyBase));
exports.GetOntologyTermSubgraphResponse = GetOntologyTermSubgraphResponse;
