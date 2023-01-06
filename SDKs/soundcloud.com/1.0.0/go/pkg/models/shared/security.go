package shared

type SchemeAuthHeader struct {
	APIKey string `security:"name=Authorization"`
}

type SchemeClientID struct {
	APIKey string `security:"name=client_id"`
}
