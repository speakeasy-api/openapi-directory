import { SpeakeasyBase } from "../../../internal/utils";
import { Assembly } from "./assembly";
import { Species } from "./species";
/**
 * This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions.
**/
export declare class StructureResourceAttributes extends SpeakeasyBase {
    assemblies?: Assembly[];
    cartesianSitePositions: number[][];
    chemicalFormulaAnonymous: string;
    chemicalFormulaDescriptive: string;
    chemicalFormulaHill?: string;
    chemicalFormulaReduced: string;
    dimensionTypes: number[];
    elements: string[];
    elementsRatios: number[];
    immutableId?: string;
    lastModified: Date;
    latticeVectors: number[][];
    nelements: number;
    nperiodicDimensions: number;
    nsites: number;
    species: Species[];
    speciesAtSites: string[];
    structureFeatures: any[];
}
