package shared

// ContributorProfile
// Contributor profile data
type ContributorProfile struct {
	About           *string                        `json:"about,omitempty"`
	ContributorType []string                       `json:"contributor_type,omitempty"`
	DisplayName     *string                        `json:"display_name,omitempty"`
	Equipment       []string                       `json:"equipment,omitempty"`
	ID              string                         `json:"id"`
	Location        *string                        `json:"location,omitempty"`
	PortfolioURL    *string                        `json:"portfolio_url,omitempty"`
	SocialMedia     *ContributorProfileSocialMedia `json:"social_media,omitempty"`
	Styles          []string                       `json:"styles,omitempty"`
	Subjects        []string                       `json:"subjects,omitempty"`
	Website         *string                        `json:"website,omitempty"`
}
