package shared

type LocationUpdateContent struct {
	Lat       float32 `json:"lat"`
	Lon       float32 `json:"lon"`
	Timestamp *int64  `json:"timestamp,omitempty"`
}
