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
exports.GetSubstanceTreatsAssociationsResponse = exports.GetSubstanceTreatsAssociationsRequest = exports.GetSubstanceTreatsAssociationsQueryParams = exports.GetSubstanceTreatsAssociationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetSubstanceTreatsAssociationsPathParams = /** @class */ (function (_super) {
    __extends(GetSubstanceTreatsAssociationsPathParams, _super);
    function GetSubstanceTreatsAssociationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSubstanceTreatsAssociationsPathParams.prototype, "id", void 0);
    return GetSubstanceTreatsAssociationsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSubstanceTreatsAssociationsPathParams = GetSubstanceTreatsAssociationsPathParams;
var GetSubstanceTreatsAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetSubstanceTreatsAssociationsQueryParams, _super);
    function GetSubstanceTreatsAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direct" }),
        __metadata("design:type", Boolean)
    ], GetSubstanceTreatsAssociationsQueryParams.prototype, "direct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=evidence" }),
        __metadata("design:type", String)
    ], GetSubstanceTreatsAssociationsQueryParams.prototype, "evidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" }),
        __metadata("design:type", Boolean)
    ], GetSubstanceTreatsAssociationsQueryParams.prototype, "excludeAutomaticAssertions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet" }),
        __metadata("design:type", Boolean)
    ], GetSubstanceTreatsAssociationsQueryParams.prototype, "facet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet_fields" }),
        __metadata("design:type", Array)
    ], GetSubstanceTreatsAssociationsQueryParams.prototype, "facetFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fetch_objects" }),
        __metadata("design:type", Boolean)
    ], GetSubstanceTreatsAssociationsQueryParams.prototype, "fetchObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetSubstanceTreatsAssociationsQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slim" }),
        __metadata("design:type", Array)
    ], GetSubstanceTreatsAssociationsQueryParams.prototype, "slim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetSubstanceTreatsAssociationsQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unselect_evidence" }),
        __metadata("design:type", Boolean)
    ], GetSubstanceTreatsAssociationsQueryParams.prototype, "unselectEvidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=use_compact_associations" }),
        __metadata("design:type", Boolean)
    ], GetSubstanceTreatsAssociationsQueryParams.prototype, "useCompactAssociations", void 0);
    return GetSubstanceTreatsAssociationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSubstanceTreatsAssociationsQueryParams = GetSubstanceTreatsAssociationsQueryParams;
var GetSubstanceTreatsAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetSubstanceTreatsAssociationsRequest, _super);
    function GetSubstanceTreatsAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubstanceTreatsAssociationsPathParams)
    ], GetSubstanceTreatsAssociationsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubstanceTreatsAssociationsQueryParams)
    ], GetSubstanceTreatsAssociationsRequest.prototype, "queryParams", void 0);
    return GetSubstanceTreatsAssociationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetSubstanceTreatsAssociationsRequest = GetSubstanceTreatsAssociationsRequest;
var GetSubstanceTreatsAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetSubstanceTreatsAssociationsResponse, _super);
    function GetSubstanceTreatsAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSubstanceTreatsAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSubstanceTreatsAssociationsResponse.prototype, "statusCode", void 0);
    return GetSubstanceTreatsAssociationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetSubstanceTreatsAssociationsResponse = GetSubstanceTreatsAssociationsResponse;
