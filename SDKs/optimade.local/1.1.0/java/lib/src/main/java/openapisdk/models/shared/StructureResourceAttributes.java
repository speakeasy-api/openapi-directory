package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * StructureResourceAttributes
 * This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions.
**/
public class StructureResourceAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assemblies")
    public Assembly[] assemblies;
    public StructureResourceAttributes withAssemblies(Assembly[] assemblies) {
        this.assemblies = assemblies;
        return this;
    }
    @JsonProperty("cartesian_site_positions")
    public Double[][] cartesianSitePositions;
    public StructureResourceAttributes withCartesianSitePositions(Double[][] cartesianSitePositions) {
        this.cartesianSitePositions = cartesianSitePositions;
        return this;
    }
    @JsonProperty("chemical_formula_anonymous")
    public String chemicalFormulaAnonymous;
    public StructureResourceAttributes withChemicalFormulaAnonymous(String chemicalFormulaAnonymous) {
        this.chemicalFormulaAnonymous = chemicalFormulaAnonymous;
        return this;
    }
    @JsonProperty("chemical_formula_descriptive")
    public String chemicalFormulaDescriptive;
    public StructureResourceAttributes withChemicalFormulaDescriptive(String chemicalFormulaDescriptive) {
        this.chemicalFormulaDescriptive = chemicalFormulaDescriptive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chemical_formula_hill")
    public String chemicalFormulaHill;
    public StructureResourceAttributes withChemicalFormulaHill(String chemicalFormulaHill) {
        this.chemicalFormulaHill = chemicalFormulaHill;
        return this;
    }
    @JsonProperty("chemical_formula_reduced")
    public String chemicalFormulaReduced;
    public StructureResourceAttributes withChemicalFormulaReduced(String chemicalFormulaReduced) {
        this.chemicalFormulaReduced = chemicalFormulaReduced;
        return this;
    }
    @JsonProperty("dimension_types")
    public Long[] dimensionTypes;
    public StructureResourceAttributes withDimensionTypes(Long[] dimensionTypes) {
        this.dimensionTypes = dimensionTypes;
        return this;
    }
    @JsonProperty("elements")
    public String[] elements;
    public StructureResourceAttributes withElements(String[] elements) {
        this.elements = elements;
        return this;
    }
    @JsonProperty("elements_ratios")
    public Double[] elementsRatios;
    public StructureResourceAttributes withElementsRatios(Double[] elementsRatios) {
        this.elementsRatios = elementsRatios;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("immutable_id")
    public String immutableId;
    public StructureResourceAttributes withImmutableId(String immutableId) {
        this.immutableId = immutableId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("last_modified")
    public OffsetDateTime lastModified;
    public StructureResourceAttributes withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonProperty("lattice_vectors")
    public Double[][] latticeVectors;
    public StructureResourceAttributes withLatticeVectors(Double[][] latticeVectors) {
        this.latticeVectors = latticeVectors;
        return this;
    }
    @JsonProperty("nelements")
    public Long nelements;
    public StructureResourceAttributes withNelements(Long nelements) {
        this.nelements = nelements;
        return this;
    }
    @JsonProperty("nperiodic_dimensions")
    public Long nperiodicDimensions;
    public StructureResourceAttributes withNperiodicDimensions(Long nperiodicDimensions) {
        this.nperiodicDimensions = nperiodicDimensions;
        return this;
    }
    @JsonProperty("nsites")
    public Long nsites;
    public StructureResourceAttributes withNsites(Long nsites) {
        this.nsites = nsites;
        return this;
    }
    @JsonProperty("species")
    public Species[] species;
    public StructureResourceAttributes withSpecies(Species[] species) {
        this.species = species;
        return this;
    }
    @JsonProperty("species_at_sites")
    public String[] speciesAtSites;
    public StructureResourceAttributes withSpeciesAtSites(String[] speciesAtSites) {
        this.speciesAtSites = speciesAtSites;
        return this;
    }
    @JsonProperty("structure_features")
    public Object[] structureFeatures;
    public StructureResourceAttributes withStructureFeatures(Object[] structureFeatures) {
        this.structureFeatures = structureFeatures;
        return this;
    }
}