package shared

type GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum string

const (
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnumActionTypeUnspecified GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum = "ACTION_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnumCreated               GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum = "CREATED"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnumUpdated               GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum = "UPDATED"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnumDeleted               GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum = "DELETED"
)

type GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum string

const (
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumChangeHistoryResourceTypeUnspecified  GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumAccount                               GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "ACCOUNT"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumProperty                              GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "PROPERTY"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumFirebaseLink                          GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "FIREBASE_LINK"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumGoogleAdsLink                         GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "GOOGLE_ADS_LINK"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumGoogleSignalsSettings                 GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "GOOGLE_SIGNALS_SETTINGS"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumConversionEvent                       GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "CONVERSION_EVENT"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumMeasurementProtocolSecret             GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "MEASUREMENT_PROTOCOL_SECRET"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumDataRetentionSettings                 GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "DATA_RETENTION_SETTINGS"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumDisplayVideo360AdvertiserLink         GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "DISPLAY_VIDEO_360_ADVERTISER_LINK"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumDisplayVideo360AdvertiserLinkProposal GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumSearchAds360Link                      GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "SEARCH_ADS_360_LINK"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumDataStream                            GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "DATA_STREAM"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumAttributionSettings                   GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "ATTRIBUTION_SETTINGS"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumExpandedDataSet                       GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "EXPANDED_DATA_SET"
	GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnumChannelGroup                          GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = "CHANNEL_GROUP"
)

// GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest
// Request message for SearchChangeHistoryEvents RPC.
type GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest struct {
	Action             []GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum       `json:"action,omitempty"`
	ActorEmail         []string                                                                     `json:"actorEmail,omitempty"`
	EarliestChangeTime *string                                                                      `json:"earliestChangeTime,omitempty"`
	LatestChangeTime   *string                                                                      `json:"latestChangeTime,omitempty"`
	PageSize           *int32                                                                       `json:"pageSize,omitempty"`
	PageToken          *string                                                                      `json:"pageToken,omitempty"`
	Property           *string                                                                      `json:"property,omitempty"`
	ResourceType       []GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum `json:"resourceType,omitempty"`
}
