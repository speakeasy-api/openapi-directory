package shared

type CellUpdate struct {
	H *int32 `json:"h,omitempty"`
	W *int32 `json:"w,omitempty"`
	X *int32 `json:"x,omitempty"`
	Y *int32 `json:"y,omitempty"`
}
