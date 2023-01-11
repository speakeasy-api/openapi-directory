import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assembly } from "./assembly";
import { Species } from "./species";



// StructureResourceAttributes
/** 
 * This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions.
**/
export class StructureResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assemblies", elemType: Assembly })
  assemblies?: Assembly[];

  @SpeakeasyMetadata({ data: "json, name=cartesian_site_positions" })
  cartesianSitePositions: number[][];

  @SpeakeasyMetadata({ data: "json, name=chemical_formula_anonymous" })
  chemicalFormulaAnonymous: string;

  @SpeakeasyMetadata({ data: "json, name=chemical_formula_descriptive" })
  chemicalFormulaDescriptive: string;

  @SpeakeasyMetadata({ data: "json, name=chemical_formula_hill" })
  chemicalFormulaHill?: string;

  @SpeakeasyMetadata({ data: "json, name=chemical_formula_reduced" })
  chemicalFormulaReduced: string;

  @SpeakeasyMetadata({ data: "json, name=dimension_types" })
  dimensionTypes: number[];

  @SpeakeasyMetadata({ data: "json, name=elements" })
  elements: string[];

  @SpeakeasyMetadata({ data: "json, name=elements_ratios" })
  elementsRatios: number[];

  @SpeakeasyMetadata({ data: "json, name=immutable_id" })
  immutableId?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified: Date;

  @SpeakeasyMetadata({ data: "json, name=lattice_vectors" })
  latticeVectors: number[][];

  @SpeakeasyMetadata({ data: "json, name=nelements" })
  nelements: number;

  @SpeakeasyMetadata({ data: "json, name=nperiodic_dimensions" })
  nperiodicDimensions: number;

  @SpeakeasyMetadata({ data: "json, name=nsites" })
  nsites: number;

  @SpeakeasyMetadata({ data: "json, name=species", elemType: Species })
  species: Species[];

  @SpeakeasyMetadata({ data: "json, name=species_at_sites" })
  speciesAtSites: string[];

  @SpeakeasyMetadata({ data: "json, name=structure_features" })
  structureFeatures: any[];
}
