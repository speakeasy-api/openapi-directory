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
exports.Species = void 0;
var utils_1 = require("../../../internal/utils");
// Species
/**
 * A list describing the species of the sites of this structure.
 *
 * Species can represent pure chemical elements, virtual-crystal atoms representing a
 * statistical occupation of a given site by multiple chemical elements, and/or a
 * location to which there are attached atoms, i.e., atoms whose precise location are
 * unknown beyond that they are attached to that position (frequently used to indicate
 * hydrogen atoms attached to another element, e.g., a carbon with three attached
 * hydrogens might represent a methyl group, -CH3).
 *
 * - **Examples**:
 *     - `[ {"name": "Ti", "chemical_symbols": ["Ti"], "concentration": [1.0]} ]`: any site with this species is occupied by a Ti atom.
 *     - `[ {"name": "Ti", "chemical_symbols": ["Ti", "vacancy"], "concentration": [0.9, 0.1]} ]`: any site with this species is occupied by a Ti atom with 90 % probability, and has a vacancy with 10 % probability.
 *     - `[ {"name": "BaCa", "chemical_symbols": ["vacancy", "Ba", "Ca"], "concentration": [0.05, 0.45, 0.5], "mass": [0.0, 137.327, 40.078]} ]`: any site with this species is occupied by a Ba atom with 45 % probability, a Ca atom with 50 % probability, and by a vacancy with 5 % probability. The mass of this site is (on average) 88.5 a.m.u.
 *     - `[ {"name": "C12", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [12.0]} ]`: any site with this species is occupied by a carbon isotope with mass 12.
 *     - `[ {"name": "C13", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [13.0]} ]`: any site with this species is occupied by a carbon isotope with mass 13.
 *     - `[ {"name": "CH3", "chemical_symbols": ["C"], "concentration": [1.0], "attached": ["H"], "nattached": [3]} ]`: any site with this species is occupied by a methyl group, -CH3, which is represented without specifying precise positions of the hydrogen atoms.
**/
var Species = /** @class */ (function (_super) {
    __extends(Species, _super);
    function Species() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attached" }),
        __metadata("design:type", Array)
    ], Species.prototype, "attached", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chemical_symbols" }),
        __metadata("design:type", Array)
    ], Species.prototype, "chemicalSymbols", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=concentration" }),
        __metadata("design:type", Array)
    ], Species.prototype, "concentration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mass" }),
        __metadata("design:type", Array)
    ], Species.prototype, "mass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Species.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nattached" }),
        __metadata("design:type", Array)
    ], Species.prototype, "nattached", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_name" }),
        __metadata("design:type", String)
    ], Species.prototype, "originalName", void 0);
    return Species;
}(utils_1.SpeakeasyBase));
exports.Species = Species;
