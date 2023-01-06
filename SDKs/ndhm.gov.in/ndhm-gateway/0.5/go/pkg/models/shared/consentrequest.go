package shared

import (
	"time"
)

type ConsentRequestConsent struct {
	CareContexts []CareContextDefinition `json:"careContexts,omitempty"`
	HiTypes      []HiTypeEnumEnum        `json:"hiTypes"`
	Hip          map[string]interface{}  `json:"hip,omitempty"`
	Hiu          map[string]interface{}  `json:"hiu"`
	Patient      map[string]interface{}  `json:"patient"`
	Permission   Permission              `json:"permission"`
	Purpose      UsePurpose              `json:"purpose"`
	Requester    Requester               `json:"requester"`
}

type ConsentRequest struct {
	Consent   ConsentRequestConsent `json:"consent"`
	RequestID string                `json:"requestId"`
	Timestamp time.Time             `json:"timestamp"`
}
