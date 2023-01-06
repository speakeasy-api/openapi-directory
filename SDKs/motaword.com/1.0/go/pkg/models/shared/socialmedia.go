package shared

type SocialMedia struct {
	FacebookURL *string `json:"facebook_url,omitempty"`
	LinkedInURL *string `json:"linkedIn_url,omitempty"`
	TwitterURL  *string `json:"twitter_url,omitempty"`
}
