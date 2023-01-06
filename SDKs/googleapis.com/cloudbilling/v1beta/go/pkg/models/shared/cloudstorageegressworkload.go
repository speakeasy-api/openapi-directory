package shared

type CloudStorageEgressWorkloadDestinationContinentEnum string

const (
	CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentUnspecified  CloudStorageEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_UNSPECIFIED"
	CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentAsiaPacific  CloudStorageEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_ASIA_PACIFIC"
	CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentAutralia     CloudStorageEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_AUTRALIA"
	CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentEurope       CloudStorageEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_EUROPE"
	CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentNorthAmerica CloudStorageEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_NORTH_AMERICA"
	CloudStorageEgressWorkloadDestinationContinentEnumDestinationContinentSouthAmerica CloudStorageEgressWorkloadDestinationContinentEnum = "DESTINATION_CONTINENT_SOUTH_AMERICA"
)

type CloudStorageEgressWorkloadSourceContinentEnum string

const (
	CloudStorageEgressWorkloadSourceContinentEnumSourceContinentUnspecified  CloudStorageEgressWorkloadSourceContinentEnum = "SOURCE_CONTINENT_UNSPECIFIED"
	CloudStorageEgressWorkloadSourceContinentEnumSourceContinentAsiaPacific  CloudStorageEgressWorkloadSourceContinentEnum = "SOURCE_CONTINENT_ASIA_PACIFIC"
	CloudStorageEgressWorkloadSourceContinentEnumSourceContinentAustralia    CloudStorageEgressWorkloadSourceContinentEnum = "SOURCE_CONTINENT_AUSTRALIA"
	CloudStorageEgressWorkloadSourceContinentEnumSourceContinentEurope       CloudStorageEgressWorkloadSourceContinentEnum = "SOURCE_CONTINENT_EUROPE"
	CloudStorageEgressWorkloadSourceContinentEnumSourceContinentNorthAmerica CloudStorageEgressWorkloadSourceContinentEnum = "SOURCE_CONTINENT_NORTH_AMERICA"
	CloudStorageEgressWorkloadSourceContinentEnumSourceContinentSouthAmerica CloudStorageEgressWorkloadSourceContinentEnum = "SOURCE_CONTINENT_SOUTH_AMERICA"
)

// CloudStorageEgressWorkload
// Specification of a network type. Network egress within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network egress within Google Cloud and the general network usage.
type CloudStorageEgressWorkload struct {
	DestinationContinent *CloudStorageEgressWorkloadDestinationContinentEnum `json:"destinationContinent,omitempty"`
	EgressRate           *Usage                                              `json:"egressRate,omitempty"`
	SourceContinent      *CloudStorageEgressWorkloadSourceContinentEnum      `json:"sourceContinent,omitempty"`
}
