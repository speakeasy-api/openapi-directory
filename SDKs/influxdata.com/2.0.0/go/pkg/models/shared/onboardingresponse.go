package shared

type OnboardingResponse struct {
	Auth   *Authorization `json:"auth,omitempty"`
	Bucket *interface{}   `json:"bucket,omitempty"`
	Org    *interface{}   `json:"org,omitempty"`
	User   *interface{}   `json:"user,omitempty"`
}
