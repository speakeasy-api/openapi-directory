package shared

// OrderFulfillmentPickupDetailsCurbsidePickupDetails
// Specific details for curbside pickup.
type OrderFulfillmentPickupDetailsCurbsidePickupDetails struct {
	BuyerArrivedAt  *string `json:"buyer_arrived_at,omitempty"`
	CurbsideDetails *string `json:"curbside_details,omitempty"`
}
