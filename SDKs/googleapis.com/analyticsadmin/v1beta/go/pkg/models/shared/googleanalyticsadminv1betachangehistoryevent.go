package shared

type GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum string

const (
	GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnumActorTypeUnspecified GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum = "ACTOR_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnumUser                 GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum = "USER"
	GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnumSystem               GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum = "SYSTEM"
	GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnumSupport              GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum = "SUPPORT"
)

// GoogleAnalyticsAdminV1betaChangeHistoryEvent
// A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
type GoogleAnalyticsAdminV1betaChangeHistoryEvent struct {
	ActorType       *GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum `json:"actorType,omitempty"`
	ChangeTime      *string                                                    `json:"changeTime,omitempty"`
	Changes         []GoogleAnalyticsAdminV1betaChangeHistoryChange            `json:"changes,omitempty"`
	ChangesFiltered *bool                                                      `json:"changesFiltered,omitempty"`
	ID              *string                                                    `json:"id,omitempty"`
	UserActorEmail  *string                                                    `json:"userActorEmail,omitempty"`
}
