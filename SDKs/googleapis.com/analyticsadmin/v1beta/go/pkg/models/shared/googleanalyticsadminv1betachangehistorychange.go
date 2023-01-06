package shared

type GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum string

const (
	GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnumActionTypeUnspecified GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum = "ACTION_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnumCreated               GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum = "CREATED"
	GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnumUpdated               GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum = "UPDATED"
	GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnumDeleted               GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum = "DELETED"
)

// GoogleAnalyticsAdminV1betaChangeHistoryChange
// A description of a change to a single Google Analytics resource.
type GoogleAnalyticsAdminV1betaChangeHistoryChange struct {
	Action               *GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum            `json:"action,omitempty"`
	Resource             *string                                                             `json:"resource,omitempty"`
	ResourceAfterChange  *GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource `json:"resourceAfterChange,omitempty"`
	ResourceBeforeChange *GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource `json:"resourceBeforeChange,omitempty"`
}
