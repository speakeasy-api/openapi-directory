package shared

type SchemeTokenAuth struct {
	APIKey string `security:"name=Authorization"`
}

type Security struct {
	TokenAuth SchemeTokenAuth `security:"scheme,type=apiKey,subtype=header"`
}
