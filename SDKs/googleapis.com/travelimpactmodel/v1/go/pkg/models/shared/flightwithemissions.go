// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// FlightWithEmissions - Direct flight with emission estimates.
type FlightWithEmissions struct {
	// Grouped emissions per seating class results.
	EmissionsGramsPerPax *EmissionsGramsPerPax `json:"emissionsGramsPerPax,omitempty"`
	// All details related to a single request item for a direct flight emission estimates.
	Flight *Flight `json:"flight,omitempty"`
}
