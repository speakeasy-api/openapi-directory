package operations

type GetTargetsAllNeedsAttentionTop200ApplicationJSON struct {
	Highs   *int64  `json:"highs,omitempty"`
	ID      *string `json:"id,omitempty"`
	Lows    *int64  `json:"lows,omitempty"`
	Mediums *int64  `json:"mediums,omitempty"`
	Name    *string `json:"name,omitempty"`
	URL     *string `json:"url,omitempty"`
}

type GetTargetsAllNeedsAttentionTopResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetTargetsAllNeedsAttentionTop200ApplicationJSONObjects []GetTargetsAllNeedsAttentionTop200ApplicationJSON
}
