package shared

type GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum string

const (
	GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingUnspecified   GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum = "OFFERING_UNSPECIFIED"
	GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingVasBundle     GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum = "OFFERING_VAS_BUNDLE"
	GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingVasStandalone GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum = "OFFERING_VAS_STANDALONE"
	GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingHardBundle    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum = "OFFERING_HARD_BUNDLE"
	GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingSoftBundle    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum = "OFFERING_SOFT_BUNDLE"
)

type GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum string

const (
	GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelUnspecified      GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum = "CHANNEL_UNSPECIFIED"
	GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelRetail           GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum = "CHANNEL_RETAIL"
	GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelOnlineWeb        GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum = "CHANNEL_ONLINE_WEB"
	GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelOnlineAndroidApp GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum = "CHANNEL_ONLINE_ANDROID_APP"
	GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelOnlineIosApp     GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum = "CHANNEL_ONLINE_IOS_APP"
)

// GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload
// Payload specific to Google One products.
type GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload struct {
	Campaigns    []string                                                                   `json:"campaigns,omitempty"`
	Offering     *GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum     `json:"offering,omitempty"`
	SalesChannel *GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum `json:"salesChannel,omitempty"`
	StoreID      *string                                                                    `json:"storeId,omitempty"`
}
