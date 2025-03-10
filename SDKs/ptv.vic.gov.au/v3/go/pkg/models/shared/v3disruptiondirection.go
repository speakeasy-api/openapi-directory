// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type V3DisruptionDirection struct {
	// Direction of travel identifier
	DirectionID *int `json:"direction_id,omitempty"`
	// Name of direction of travel
	DirectionName *string `json:"direction_name,omitempty"`
	// Route and direction of travel combination identifier
	RouteDirectionID *int `json:"route_direction_id,omitempty"`
	// Time of service to which disruption applies, in 24 hour clock format (HH:MM:SS) AEDT/AEST; returns null if disruption applies to multiple (or no) services
	ServiceTime *string `json:"service_time,omitempty"`
}
