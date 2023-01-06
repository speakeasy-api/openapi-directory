package shared

type AnalyticsCollection struct {
	AnonymousID *string           `json:"anonymousId,omitempty"`
	Properties  map[string]string `json:"properties,omitempty"`
	SessionID   *string           `json:"sessionId,omitempty"`
	Type        *string           `json:"type,omitempty"`
	UserID      *string           `json:"userId,omitempty"`
}
