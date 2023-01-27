package shared

type PublishingOrganizationEnum string

const (
	PublishingOrganizationEnumClientLibraryOrganizationUnspecified PublishingOrganizationEnum = "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED"
	PublishingOrganizationEnumCloud                                PublishingOrganizationEnum = "CLOUD"
	PublishingOrganizationEnumAds                                  PublishingOrganizationEnum = "ADS"
	PublishingOrganizationEnumPhotos                               PublishingOrganizationEnum = "PHOTOS"
	PublishingOrganizationEnumStreetView                           PublishingOrganizationEnum = "STREET_VIEW"
)

// Publishing
// This message configures the settings for publishing [Google Cloud Client libraries](https://cloud.google.com/apis/docs/cloud-client-libraries) generated from the service config.
type Publishing struct {
	APIShortName         *string                     `json:"apiShortName,omitempty"`
	CodeownerGithubTeams []string                    `json:"codeownerGithubTeams,omitempty"`
	DocTagPrefix         *string                     `json:"docTagPrefix,omitempty"`
	DocumentationURI     *string                     `json:"documentationUri,omitempty"`
	GithubLabel          *string                     `json:"githubLabel,omitempty"`
	LibrarySettings      []ClientLibrarySettings     `json:"librarySettings,omitempty"`
	MethodSettings       []MethodSettings            `json:"methodSettings,omitempty"`
	NewIssueURI          *string                     `json:"newIssueUri,omitempty"`
	Organization         *PublishingOrganizationEnum `json:"organization,omitempty"`
}
