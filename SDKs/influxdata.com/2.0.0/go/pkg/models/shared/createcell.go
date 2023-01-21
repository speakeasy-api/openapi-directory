package shared

type CreateCell struct {
	H         *int32  `json:"h,omitempty"`
	Name      *string `json:"name,omitempty"`
	UsingView *string `json:"usingView,omitempty"`
	W         *int32  `json:"w,omitempty"`
	X         *int32  `json:"x,omitempty"`
	Y         *int32  `json:"y,omitempty"`
}
