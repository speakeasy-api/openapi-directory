package operations

type GetResponse struct {
	ContentType                 string
	StatusCode                  int64
	Get200ApplicationJSONObject map[string]interface{}
}
