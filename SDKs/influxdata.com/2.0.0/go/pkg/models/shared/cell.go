package shared

type CellLinks struct {
	Self *string `json:"self,omitempty"`
	View *string `json:"view,omitempty"`
}

type Cell struct {
	H      *int32     `json:"h,omitempty"`
	ID     *string    `json:"id,omitempty"`
	Links  *CellLinks `json:"links,omitempty"`
	ViewID *string    `json:"viewID,omitempty"`
	W      *int32     `json:"w,omitempty"`
	X      *int32     `json:"x,omitempty"`
	Y      *int32     `json:"y,omitempty"`
}
