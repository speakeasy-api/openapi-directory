package shared

type CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum string

const (
	CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationUnspecified  CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum = "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED"
	CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationAsia         CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum = "INTERCONNECT_CONNECTION_LOCATION_ASIA"
	CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationEurope       CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum = "INTERCONNECT_CONNECTION_LOCATION_EUROPE"
	CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationNorthAmerica CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum = "INTERCONNECT_CONNECTION_LOCATION_NORTH_AMERICA"
	CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationSouthAmerica CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum = "INTERCONNECT_CONNECTION_LOCATION_SOUTH_AMERICA"
	CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnumInterconnectConnectionLocationAustralia    CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum = "INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA"
)

// CloudInterconnectEgressWorkload
// The interconnect egress only includes the Interconnect Egress. Please use the standard egress traffic interface to specify your standard egress usage.
type CloudInterconnectEgressWorkload struct {
	EgressRate                     *Usage                                                             `json:"egressRate,omitempty"`
	InterconnectConnectionLocation *CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum `json:"interconnectConnectionLocation,omitempty"`
}
