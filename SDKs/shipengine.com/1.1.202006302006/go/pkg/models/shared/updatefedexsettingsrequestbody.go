package shared

// UpdateFedexSettingsRequestBody
// A Fedex account settings request body
type UpdateFedexSettingsRequestBody struct {
	IsPrimaryAccount     *bool                            `json:"is_primary_account,omitempty"`
	Nickname             *string                          `json:"nickname,omitempty"`
	PickupType           *FedexPickupTypeEnum             `json:"pickup_type,omitempty"`
	SmartPostEndorsement *AncillaryServiceEndorsementEnum `json:"smart_post_endorsement,omitempty"`
	SmartPostHub         *SmartPostHubEnum                `json:"smart_post_hub,omitempty"`
}
