package shared

import (
	"time"
)

type ImageRegion struct {
	Created  *time.Time `json:"created,omitempty"`
	Height   float32    `json:"height"`
	Left     float32    `json:"left"`
	RegionID *string    `json:"regionId,omitempty"`
	TagID    string     `json:"tagId"`
	TagName  *string    `json:"tagName,omitempty"`
	Top      float32    `json:"top"`
	Width    float32    `json:"width"`
}
