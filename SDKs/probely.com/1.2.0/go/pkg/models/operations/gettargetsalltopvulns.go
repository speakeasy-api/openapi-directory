package operations

type GetTargetsAllTopVulns200ApplicationJSON struct {
	Zero *string `json:"0,omitempty"`
	One  *string `json:"1,omitempty"`
}

type GetTargetsAllTopVulnsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetTargetsAllTopVulns200ApplicationJSONObjects []GetTargetsAllTopVulns200ApplicationJSON
}
