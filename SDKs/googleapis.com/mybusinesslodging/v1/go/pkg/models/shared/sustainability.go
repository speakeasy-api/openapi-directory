package shared

// Sustainability
// Sustainability practices implemented at the hotel.
type Sustainability struct {
	EnergyEfficiency             *EnergyEfficiency             `json:"energyEfficiency,omitempty"`
	SustainabilityCertifications *SustainabilityCertifications `json:"sustainabilityCertifications,omitempty"`
	SustainableSourcing          *SustainableSourcing          `json:"sustainableSourcing,omitempty"`
	WasteReduction               *WasteReduction               `json:"wasteReduction,omitempty"`
	WaterConservation            *WaterConservation            `json:"waterConservation,omitempty"`
}

// SustainabilityInput
// Sustainability practices implemented at the hotel.
type SustainabilityInput struct {
	EnergyEfficiency             *EnergyEfficiencyInput        `json:"energyEfficiency,omitempty"`
	SustainabilityCertifications *SustainabilityCertifications `json:"sustainabilityCertifications,omitempty"`
	SustainableSourcing          *SustainableSourcing          `json:"sustainableSourcing,omitempty"`
	WasteReduction               *WasteReduction               `json:"wasteReduction,omitempty"`
	WaterConservation            *WaterConservation            `json:"waterConservation,omitempty"`
}
