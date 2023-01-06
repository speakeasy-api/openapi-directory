package shared

// ContributorProfileSocialMedia
// Contributor profile social media links
type ContributorProfileSocialMedia struct {
	Facebook   *string `json:"facebook,omitempty"`
	GooglePlus *string `json:"google_plus,omitempty"`
	Linkedin   *string `json:"linkedin,omitempty"`
	Pinterest  *string `json:"pinterest,omitempty"`
	Tumblr     *string `json:"tumblr,omitempty"`
	Twitter    *string `json:"twitter,omitempty"`
}
