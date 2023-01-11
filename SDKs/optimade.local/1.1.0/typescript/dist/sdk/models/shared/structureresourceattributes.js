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
exports.StructureResourceAttributes = void 0;
var utils_1 = require("../../../internal/utils");
var assembly_1 = require("./assembly");
var species_1 = require("./species");
// StructureResourceAttributes
/**
 * This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions.
**/
var StructureResourceAttributes = /** @class */ (function (_super) {
    __extends(StructureResourceAttributes, _super);
    function StructureResourceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assemblies", elemType: assembly_1.Assembly }),
        __metadata("design:type", Array)
    ], StructureResourceAttributes.prototype, "assemblies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cartesian_site_positions" }),
        __metadata("design:type", Array)
    ], StructureResourceAttributes.prototype, "cartesianSitePositions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chemical_formula_anonymous" }),
        __metadata("design:type", String)
    ], StructureResourceAttributes.prototype, "chemicalFormulaAnonymous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chemical_formula_descriptive" }),
        __metadata("design:type", String)
    ], StructureResourceAttributes.prototype, "chemicalFormulaDescriptive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chemical_formula_hill" }),
        __metadata("design:type", String)
    ], StructureResourceAttributes.prototype, "chemicalFormulaHill", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chemical_formula_reduced" }),
        __metadata("design:type", String)
    ], StructureResourceAttributes.prototype, "chemicalFormulaReduced", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimension_types" }),
        __metadata("design:type", Array)
    ], StructureResourceAttributes.prototype, "dimensionTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=elements" }),
        __metadata("design:type", Array)
    ], StructureResourceAttributes.prototype, "elements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=elements_ratios" }),
        __metadata("design:type", Array)
    ], StructureResourceAttributes.prototype, "elementsRatios", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=immutable_id" }),
        __metadata("design:type", String)
    ], StructureResourceAttributes.prototype, "immutableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_modified" }),
        __metadata("design:type", Date)
    ], StructureResourceAttributes.prototype, "lastModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lattice_vectors" }),
        __metadata("design:type", Array)
    ], StructureResourceAttributes.prototype, "latticeVectors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nelements" }),
        __metadata("design:type", Number)
    ], StructureResourceAttributes.prototype, "nelements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nperiodic_dimensions" }),
        __metadata("design:type", Number)
    ], StructureResourceAttributes.prototype, "nperiodicDimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nsites" }),
        __metadata("design:type", Number)
    ], StructureResourceAttributes.prototype, "nsites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=species", elemType: species_1.Species }),
        __metadata("design:type", Array)
    ], StructureResourceAttributes.prototype, "species", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=species_at_sites" }),
        __metadata("design:type", Array)
    ], StructureResourceAttributes.prototype, "speciesAtSites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=structure_features" }),
        __metadata("design:type", Array)
    ], StructureResourceAttributes.prototype, "structureFeatures", void 0);
    return StructureResourceAttributes;
}(utils_1.SpeakeasyBase));
exports.StructureResourceAttributes = StructureResourceAttributes;
