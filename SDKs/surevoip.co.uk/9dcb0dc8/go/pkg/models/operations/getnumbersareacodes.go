package operations

type GetNumbersAreacodes200ApplicationJSON struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type GetNumbersAreacodesResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetNumbersAreacodes200ApplicationJSONObject *GetNumbersAreacodes200ApplicationJSON
}
