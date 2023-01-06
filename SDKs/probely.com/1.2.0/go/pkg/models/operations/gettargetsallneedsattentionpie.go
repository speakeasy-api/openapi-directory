package operations

// GetTargetsAllNeedsAttentionPie200ApplicationJSON0
// These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
type GetTargetsAllNeedsAttentionPie200ApplicationJSON0 struct {
	Zero *string `json:"0,omitempty"`
	One  *int64  `json:"1,omitempty"`
	Two  *string `json:"2,omitempty"`
}

// GetTargetsAllNeedsAttentionPie200ApplicationJSON1
// These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
type GetTargetsAllNeedsAttentionPie200ApplicationJSON1 struct {
	Zero *string `json:"0,omitempty"`
	One  *int64  `json:"1,omitempty"`
	Two  *string `json:"2,omitempty"`
}

type GetTargetsAllNeedsAttentionPie200ApplicationJSON struct {
	Zero *GetTargetsAllNeedsAttentionPie200ApplicationJSON0 `json:"0,omitempty"`
	One  *GetTargetsAllNeedsAttentionPie200ApplicationJSON1 `json:"1,omitempty"`
}

type GetTargetsAllNeedsAttentionPieResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	GetTargetsAllNeedsAttentionPie200ApplicationJSONObject *GetTargetsAllNeedsAttentionPie200ApplicationJSON
}
