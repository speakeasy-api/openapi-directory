package shared

type SchemeZettleOauth struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeZettleAPIKey struct {
	APIKey string `security:"name=Authorization"`
}
