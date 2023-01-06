package shared

type SchemeAPIKeyHeader struct {
	APIKey string `security:"name=X-API-Key"`
}

type Security struct {
	APIKeyHeader SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
}
