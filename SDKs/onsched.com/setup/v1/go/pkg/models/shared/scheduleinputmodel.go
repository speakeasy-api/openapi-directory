// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ScheduleInputModel struct {
	Availability    *AvailabilityInputModel `json:"availability,omitempty"`
	BookingsPerSlot *int                    `json:"bookingsPerSlot,omitempty"`
	Interval        *int                    `json:"interval,omitempty"`
	LocationID      *string                 `json:"locationId,omitempty"`
	Name            *string                 `json:"name,omitempty"`
	ResourceGroupID *string                 `json:"resourceGroupId,omitempty"`
	Type            *string                 `json:"type,omitempty"`
}
