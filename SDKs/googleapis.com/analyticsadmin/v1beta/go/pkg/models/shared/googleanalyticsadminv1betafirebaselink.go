package shared

// GoogleAnalyticsAdminV1betaFirebaseLink
// A link between a GA4 property and a Firebase project.
type GoogleAnalyticsAdminV1betaFirebaseLink struct {
	CreateTime *string `json:"createTime,omitempty"`
	Name       *string `json:"name,omitempty"`
	Project    *string `json:"project,omitempty"`
}

// GoogleAnalyticsAdminV1betaFirebaseLinkInput
// A link between a GA4 property and a Firebase project.
type GoogleAnalyticsAdminV1betaFirebaseLinkInput struct {
	Project *string `json:"project,omitempty"`
}
