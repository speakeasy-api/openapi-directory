package shared

import (
	"time"
)

// StructureResourceAttributes
// This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions.
type StructureResourceAttributes struct {
	Assemblies                 []Assembly    `json:"assemblies,omitempty"`
	CartesianSitePositions     [][]float64   `json:"cartesian_site_positions"`
	ChemicalFormulaAnonymous   string        `json:"chemical_formula_anonymous"`
	ChemicalFormulaDescriptive string        `json:"chemical_formula_descriptive"`
	ChemicalFormulaHill        *string       `json:"chemical_formula_hill,omitempty"`
	ChemicalFormulaReduced     string        `json:"chemical_formula_reduced"`
	DimensionTypes             []int64       `json:"dimension_types"`
	Elements                   []string      `json:"elements"`
	ElementsRatios             []float64     `json:"elements_ratios"`
	ImmutableID                *string       `json:"immutable_id,omitempty"`
	LastModified               time.Time     `json:"last_modified"`
	LatticeVectors             [][]float64   `json:"lattice_vectors"`
	Nelements                  int64         `json:"nelements"`
	NperiodicDimensions        int64         `json:"nperiodic_dimensions"`
	Nsites                     int64         `json:"nsites"`
	Species                    []Species     `json:"species"`
	SpeciesAtSites             []string      `json:"species_at_sites"`
	StructureFeatures          []interface{} `json:"structure_features"`
}
