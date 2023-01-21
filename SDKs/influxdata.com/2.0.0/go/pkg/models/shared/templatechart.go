package shared

type TemplateChart struct {
	Height     *int64       `json:"height,omitempty"`
	Properties *interface{} `json:"properties,omitempty"`
	Width      *int64       `json:"width,omitempty"`
	XPos       *int64       `json:"xPos,omitempty"`
	YPos       *int64       `json:"yPos,omitempty"`
}
