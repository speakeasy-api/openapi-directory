import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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
export class Species extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attached" })
  attached?: string[];

  @SpeakeasyMetadata({ data: "json, name=chemical_symbols" })
  chemicalSymbols: string[];

  @SpeakeasyMetadata({ data: "json, name=concentration" })
  concentration: number[];

  @SpeakeasyMetadata({ data: "json, name=mass" })
  mass?: number[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nattached" })
  nattached?: number[];

  @SpeakeasyMetadata({ data: "json, name=original_name" })
  originalName?: string;
}
