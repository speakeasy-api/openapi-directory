package shared

import (
	"time"
)

type QueryTypeEnum string

const (
	QueryTypeEnumFlux QueryTypeEnum = "flux"
)

// Query
// Query influx using the Flux language
type Query struct {
	Dialect *Dialect               `json:"dialect,omitempty"`
	Extern  *File                  `json:"extern,omitempty"`
	Now     *time.Time             `json:"now,omitempty"`
	Params  map[string]interface{} `json:"params,omitempty"`
	Query   string                 `json:"query"`
	Type    *QueryTypeEnum         `json:"type,omitempty"`
}
