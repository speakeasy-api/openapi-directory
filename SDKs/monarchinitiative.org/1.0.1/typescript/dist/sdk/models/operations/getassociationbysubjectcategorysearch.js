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
exports.GetAssociationBySubjectCategorySearchResponse = exports.GetAssociationBySubjectCategorySearchRequest = exports.GetAssociationBySubjectCategorySearchQueryParams = exports.GetAssociationBySubjectCategorySearchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAssociationBySubjectCategorySearchPathParams = /** @class */ (function (_super) {
    __extends(GetAssociationBySubjectCategorySearchPathParams, _super);
    function GetAssociationBySubjectCategorySearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=subject_category" }),
        __metadata("design:type", String)
    ], GetAssociationBySubjectCategorySearchPathParams.prototype, "subjectCategory", void 0);
    return GetAssociationBySubjectCategorySearchPathParams;
}(utils_1.SpeakeasyBase));
exports.GetAssociationBySubjectCategorySearchPathParams = GetAssociationBySubjectCategorySearchPathParams;
var GetAssociationBySubjectCategorySearchQueryParams = /** @class */ (function (_super) {
    __extends(GetAssociationBySubjectCategorySearchQueryParams, _super);
    function GetAssociationBySubjectCategorySearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=evidence" }),
        __metadata("design:type", String)
    ], GetAssociationBySubjectCategorySearchQueryParams.prototype, "evidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" }),
        __metadata("design:type", Boolean)
    ], GetAssociationBySubjectCategorySearchQueryParams.prototype, "excludeAutomaticAssertions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=object_taxon" }),
        __metadata("design:type", String)
    ], GetAssociationBySubjectCategorySearchQueryParams.prototype, "objectTaxon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=relation" }),
        __metadata("design:type", String)
    ], GetAssociationBySubjectCategorySearchQueryParams.prototype, "relation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetAssociationBySubjectCategorySearchQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetAssociationBySubjectCategorySearchQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subject_taxon" }),
        __metadata("design:type", String)
    ], GetAssociationBySubjectCategorySearchQueryParams.prototype, "subjectTaxon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unselect_evidence" }),
        __metadata("design:type", Boolean)
    ], GetAssociationBySubjectCategorySearchQueryParams.prototype, "unselectEvidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=use_compact_associations" }),
        __metadata("design:type", Boolean)
    ], GetAssociationBySubjectCategorySearchQueryParams.prototype, "useCompactAssociations", void 0);
    return GetAssociationBySubjectCategorySearchQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAssociationBySubjectCategorySearchQueryParams = GetAssociationBySubjectCategorySearchQueryParams;
var GetAssociationBySubjectCategorySearchRequest = /** @class */ (function (_super) {
    __extends(GetAssociationBySubjectCategorySearchRequest, _super);
    function GetAssociationBySubjectCategorySearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAssociationBySubjectCategorySearchPathParams)
    ], GetAssociationBySubjectCategorySearchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAssociationBySubjectCategorySearchQueryParams)
    ], GetAssociationBySubjectCategorySearchRequest.prototype, "queryParams", void 0);
    return GetAssociationBySubjectCategorySearchRequest;
}(utils_1.SpeakeasyBase));
exports.GetAssociationBySubjectCategorySearchRequest = GetAssociationBySubjectCategorySearchRequest;
var GetAssociationBySubjectCategorySearchResponse = /** @class */ (function (_super) {
    __extends(GetAssociationBySubjectCategorySearchResponse, _super);
    function GetAssociationBySubjectCategorySearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.AssociationResults }),
        __metadata("design:type", Array)
    ], GetAssociationBySubjectCategorySearchResponse.prototype, "associationResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAssociationBySubjectCategorySearchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAssociationBySubjectCategorySearchResponse.prototype, "statusCode", void 0);
    return GetAssociationBySubjectCategorySearchResponse;
}(utils_1.SpeakeasyBase));
exports.GetAssociationBySubjectCategorySearchResponse = GetAssociationBySubjectCategorySearchResponse;
