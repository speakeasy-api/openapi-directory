package shared

type SchemeClientID struct {
	APIKey string `security:"name=client_id"`
}

type SchemeAuthHeader struct {
	APIKey string `security:"name=Authorization"`
}
