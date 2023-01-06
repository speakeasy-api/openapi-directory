package shared

type SchemeApimKey struct {
	APIKey string `security:"name=Training-Key"`
}

type Security struct {
	ApimKey SchemeApimKey `security:"scheme,type=apiKey,subtype=header"`
}
