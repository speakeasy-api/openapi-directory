package shared

type CellWithViewPropertiesLinks struct {
	Self *string `json:"self,omitempty"`
	View *string `json:"view,omitempty"`
}

type CellWithViewProperties struct {
	H          *int32                       `json:"h,omitempty"`
	ID         *string                      `json:"id,omitempty"`
	Links      *CellWithViewPropertiesLinks `json:"links,omitempty"`
	Name       *string                      `json:"name,omitempty"`
	Properties *interface{}                 `json:"properties,omitempty"`
	ViewID     *string                      `json:"viewID,omitempty"`
	W          *int32                       `json:"w,omitempty"`
	X          *int32                       `json:"x,omitempty"`
	Y          *int32                       `json:"y,omitempty"`
}

type CellWithViewPropertiesInput struct {
	H          *int32                       `json:"h,omitempty"`
	ID         *string                      `json:"id,omitempty"`
	Links      *CellWithViewPropertiesLinks `json:"links,omitempty"`
	Name       *string                      `json:"name,omitempty"`
	Properties *interface{}                 `json:"properties,omitempty"`
	ViewID     *string                      `json:"viewID,omitempty"`
	W          *int32                       `json:"w,omitempty"`
	X          *int32                       `json:"x,omitempty"`
	Y          *int32                       `json:"y,omitempty"`
}
