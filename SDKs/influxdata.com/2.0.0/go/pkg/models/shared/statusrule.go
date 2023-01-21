package shared

type StatusRule struct {
	Count         *int64               `json:"count,omitempty"`
	CurrentLevel  *RuleStatusLevelEnum `json:"currentLevel,omitempty"`
	Period        *string              `json:"period,omitempty"`
	PreviousLevel *RuleStatusLevelEnum `json:"previousLevel,omitempty"`
}
