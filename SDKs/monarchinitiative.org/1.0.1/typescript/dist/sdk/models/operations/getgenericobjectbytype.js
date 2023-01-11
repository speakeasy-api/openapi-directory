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
exports.GetGenericObjectByTypeResponse = exports.GetGenericObjectByTypeRequest = exports.GetGenericObjectByTypeQueryParams = exports.GetGenericObjectByTypePathParams = exports.GetGenericObjectByTypeTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetGenericObjectByTypeTypeEnum;
(function (GetGenericObjectByTypeTypeEnum) {
    GetGenericObjectByTypeTypeEnum["Gene"] = "gene";
    GetGenericObjectByTypeTypeEnum["Variant"] = "variant";
    GetGenericObjectByTypeTypeEnum["Genotype"] = "genotype";
    GetGenericObjectByTypeTypeEnum["Phenotype"] = "phenotype";
    GetGenericObjectByTypeTypeEnum["Disease"] = "disease";
    GetGenericObjectByTypeTypeEnum["Goterm"] = "goterm";
    GetGenericObjectByTypeTypeEnum["Pathway"] = "pathway";
    GetGenericObjectByTypeTypeEnum["Anatomy"] = "anatomy";
    GetGenericObjectByTypeTypeEnum["Substance"] = "substance";
    GetGenericObjectByTypeTypeEnum["Individual"] = "individual";
    GetGenericObjectByTypeTypeEnum["Publication"] = "publication";
    GetGenericObjectByTypeTypeEnum["Model"] = "model";
    GetGenericObjectByTypeTypeEnum["Case"] = "case";
})(GetGenericObjectByTypeTypeEnum = exports.GetGenericObjectByTypeTypeEnum || (exports.GetGenericObjectByTypeTypeEnum = {}));
var GetGenericObjectByTypePathParams = /** @class */ (function (_super) {
    __extends(GetGenericObjectByTypePathParams, _super);
    function GetGenericObjectByTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetGenericObjectByTypePathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], GetGenericObjectByTypePathParams.prototype, "type", void 0);
    return GetGenericObjectByTypePathParams;
}(utils_1.SpeakeasyBase));
exports.GetGenericObjectByTypePathParams = GetGenericObjectByTypePathParams;
var GetGenericObjectByTypeQueryParams = /** @class */ (function (_super) {
    __extends(GetGenericObjectByTypeQueryParams, _super);
    function GetGenericObjectByTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direct" }),
        __metadata("design:type", Boolean)
    ], GetGenericObjectByTypeQueryParams.prototype, "direct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=distinct_counts" }),
        __metadata("design:type", Boolean)
    ], GetGenericObjectByTypeQueryParams.prototype, "distinctCounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=evidence" }),
        __metadata("design:type", String)
    ], GetGenericObjectByTypeQueryParams.prototype, "evidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" }),
        __metadata("design:type", Boolean)
    ], GetGenericObjectByTypeQueryParams.prototype, "excludeAutomaticAssertions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet" }),
        __metadata("design:type", Boolean)
    ], GetGenericObjectByTypeQueryParams.prototype, "facet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet_fields" }),
        __metadata("design:type", Array)
    ], GetGenericObjectByTypeQueryParams.prototype, "facetFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fetch_objects" }),
        __metadata("design:type", Boolean)
    ], GetGenericObjectByTypeQueryParams.prototype, "fetchObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=get_association_counts" }),
        __metadata("design:type", Boolean)
    ], GetGenericObjectByTypeQueryParams.prototype, "getAssociationCounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetGenericObjectByTypeQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slim" }),
        __metadata("design:type", Array)
    ], GetGenericObjectByTypeQueryParams.prototype, "slim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetGenericObjectByTypeQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unselect_evidence" }),
        __metadata("design:type", Boolean)
    ], GetGenericObjectByTypeQueryParams.prototype, "unselectEvidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=use_compact_associations" }),
        __metadata("design:type", Boolean)
    ], GetGenericObjectByTypeQueryParams.prototype, "useCompactAssociations", void 0);
    return GetGenericObjectByTypeQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGenericObjectByTypeQueryParams = GetGenericObjectByTypeQueryParams;
var GetGenericObjectByTypeRequest = /** @class */ (function (_super) {
    __extends(GetGenericObjectByTypeRequest, _super);
    function GetGenericObjectByTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGenericObjectByTypePathParams)
    ], GetGenericObjectByTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGenericObjectByTypeQueryParams)
    ], GetGenericObjectByTypeRequest.prototype, "queryParams", void 0);
    return GetGenericObjectByTypeRequest;
}(utils_1.SpeakeasyBase));
exports.GetGenericObjectByTypeRequest = GetGenericObjectByTypeRequest;
var GetGenericObjectByTypeResponse = /** @class */ (function (_super) {
    __extends(GetGenericObjectByTypeResponse, _super);
    function GetGenericObjectByTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGenericObjectByTypeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGenericObjectByTypeResponse.prototype, "statusCode", void 0);
    return GetGenericObjectByTypeResponse;
}(utils_1.SpeakeasyBase));
exports.GetGenericObjectByTypeResponse = GetGenericObjectByTypeResponse;
