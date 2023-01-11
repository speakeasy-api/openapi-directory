package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Species
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
public class Species {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attached")
    public String[] attached;
    public Species withAttached(String[] attached) {
        this.attached = attached;
        return this;
    }
    @JsonProperty("chemical_symbols")
    public String[] chemicalSymbols;
    public Species withChemicalSymbols(String[] chemicalSymbols) {
        this.chemicalSymbols = chemicalSymbols;
        return this;
    }
    @JsonProperty("concentration")
    public Double[] concentration;
    public Species withConcentration(Double[] concentration) {
        this.concentration = concentration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mass")
    public Double[] mass;
    public Species withMass(Double[] mass) {
        this.mass = mass;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Species withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nattached")
    public Long[] nattached;
    public Species withNattached(Long[] nattached) {
        this.nattached = nattached;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_name")
    public String originalName;
    public Species withOriginalName(String originalName) {
        this.originalName = originalName;
        return this;
    }
}