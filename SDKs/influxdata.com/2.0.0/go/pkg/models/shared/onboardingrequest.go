package shared

type OnboardingRequest struct {
	Bucket                 string  `json:"bucket"`
	Org                    string  `json:"org"`
	Password               *string `json:"password,omitempty"`
	RetentionPeriodHrs     *int64  `json:"retentionPeriodHrs,omitempty"`
	RetentionPeriodSeconds *int64  `json:"retentionPeriodSeconds,omitempty"`
	Token                  *string `json:"token,omitempty"`
	Username               string  `json:"username"`
}
