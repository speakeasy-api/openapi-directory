package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=api-key"`
}

type SchemeUserID struct {
	APIKey string `security:"name=user-id"`
}

type Security struct {
	APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
	UserID SchemeUserID `security:"scheme,type=apiKey,subtype=header"`
}
