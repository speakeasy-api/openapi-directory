package shared

// GoogleCloudChannelV1ChangeRenewalSettingsRequestInput
// Request message for CloudChannelService.ChangeRenewalSettings.
type GoogleCloudChannelV1ChangeRenewalSettingsRequestInput struct {
	RenewalSettings *GoogleCloudChannelV1RenewalSettingsInput `json:"renewalSettings,omitempty"`
	RequestID       *string                                   `json:"requestId,omitempty"`
}
