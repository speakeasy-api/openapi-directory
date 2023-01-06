package shared

type PremiumTierEgressWorkloadDestinationContinentEnum string

const (
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentUnspecified    PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_UNSPECIFIED"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentAsiaPacific    PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_ASIA_PACIFIC"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentAfrica         PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_AFRICA"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentNorthAmerica   PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_NORTH_AMERICA"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentAutralia       PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_AUTRALIA"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentCentralAmerica PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_CENTRAL_AMERICA"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentChina          PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_CHINA"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentEasternEurope  PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_EASTERN_EUROPE"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentWesternEurope  PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_WESTERN_EUROPE"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentEmea           PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_EMEA"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentIndia          PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_INDIA"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentMiddleEast     PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_MIDDLE_EAST"
	PremiumTierEgressWorkloadDestinationContinentEnumDestinationContinentSouthAmerica   PremiumTierEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_SOUTH_AMERICA"
)

// PremiumTierEgressWorkload
// Specify Premium Tier Internet egress networking.
type PremiumTierEgressWorkload struct {
	DestinationContinent *PremiumTierEgressWorkloadDestinationContinentEnum `json:"destinationContinent,omitempty"`
	EgressRate           *Usage                                             `json:"egressRate,omitempty"`
	SourceRegion         *string                                            `json:"sourceRegion,omitempty"`
}
