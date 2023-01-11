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
exports.GetPhenotypeAnatomyAssociationsResponse = exports.GetPhenotypeAnatomyAssociationsRequest = exports.GetPhenotypeAnatomyAssociationsQueryParams = exports.GetPhenotypeAnatomyAssociationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPhenotypeAnatomyAssociationsPathParams = /** @class */ (function (_super) {
    __extends(GetPhenotypeAnatomyAssociationsPathParams, _super);
    function GetPhenotypeAnatomyAssociationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPhenotypeAnatomyAssociationsPathParams.prototype, "id", void 0);
    return GetPhenotypeAnatomyAssociationsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPhenotypeAnatomyAssociationsPathParams = GetPhenotypeAnatomyAssociationsPathParams;
var GetPhenotypeAnatomyAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(GetPhenotypeAnatomyAssociationsQueryParams, _super);
    function GetPhenotypeAnatomyAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direct" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeAnatomyAssociationsQueryParams.prototype, "direct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=evidence" }),
        __metadata("design:type", String)
    ], GetPhenotypeAnatomyAssociationsQueryParams.prototype, "evidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeAnatomyAssociationsQueryParams.prototype, "excludeAutomaticAssertions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeAnatomyAssociationsQueryParams.prototype, "facet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet_fields" }),
        __metadata("design:type", Array)
    ], GetPhenotypeAnatomyAssociationsQueryParams.prototype, "facetFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fetch_objects" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeAnatomyAssociationsQueryParams.prototype, "fetchObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetPhenotypeAnatomyAssociationsQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slim" }),
        __metadata("design:type", Array)
    ], GetPhenotypeAnatomyAssociationsQueryParams.prototype, "slim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetPhenotypeAnatomyAssociationsQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unselect_evidence" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeAnatomyAssociationsQueryParams.prototype, "unselectEvidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=use_compact_associations" }),
        __metadata("design:type", Boolean)
    ], GetPhenotypeAnatomyAssociationsQueryParams.prototype, "useCompactAssociations", void 0);
    return GetPhenotypeAnatomyAssociationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPhenotypeAnatomyAssociationsQueryParams = GetPhenotypeAnatomyAssociationsQueryParams;
var GetPhenotypeAnatomyAssociationsRequest = /** @class */ (function (_super) {
    __extends(GetPhenotypeAnatomyAssociationsRequest, _super);
    function GetPhenotypeAnatomyAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPhenotypeAnatomyAssociationsPathParams)
    ], GetPhenotypeAnatomyAssociationsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPhenotypeAnatomyAssociationsQueryParams)
    ], GetPhenotypeAnatomyAssociationsRequest.prototype, "queryParams", void 0);
    return GetPhenotypeAnatomyAssociationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetPhenotypeAnatomyAssociationsRequest = GetPhenotypeAnatomyAssociationsRequest;
var GetPhenotypeAnatomyAssociationsResponse = /** @class */ (function (_super) {
    __extends(GetPhenotypeAnatomyAssociationsResponse, _super);
    function GetPhenotypeAnatomyAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPhenotypeAnatomyAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.NamedObject }),
        __metadata("design:type", Array)
    ], GetPhenotypeAnatomyAssociationsResponse.prototype, "namedObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPhenotypeAnatomyAssociationsResponse.prototype, "statusCode", void 0);
    return GetPhenotypeAnatomyAssociationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetPhenotypeAnatomyAssociationsResponse = GetPhenotypeAnatomyAssociationsResponse;
