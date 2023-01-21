package shared

// ListGiftCardActivitiesResponse
// A response that contains one or more `GiftCardActivity`. The response might contain a set of `Error` objects
// if the request resulted in errors.
type ListGiftCardActivitiesResponse struct {
	Cursor             *string            `json:"cursor,omitempty"`
	Errors             []Error            `json:"errors,omitempty"`
	GiftCardActivities []GiftCardActivity `json:"gift_card_activities,omitempty"`
}
