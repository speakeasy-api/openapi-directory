package shared

import (
	"time"
)

type ReadyStatusEnum string

const (
	ReadyStatusEnumReady ReadyStatusEnum = "ready"
)

type Ready struct {
	Started *time.Time       `json:"started,omitempty"`
	Status  *ReadyStatusEnum `json:"status,omitempty"`
	Up      *string          `json:"up,omitempty"`
}
