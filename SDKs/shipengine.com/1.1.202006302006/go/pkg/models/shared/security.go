package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=API-Key"`
}

type Security struct {
	APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}
