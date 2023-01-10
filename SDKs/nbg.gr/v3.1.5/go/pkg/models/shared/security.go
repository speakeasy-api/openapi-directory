package shared

type SchemeClientCredentialsToken struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeClientID struct {
	APIKey string `security:"name=Client-Id"`
}

type SchemeAuthorizationCodeToken struct {
	Authorization string `security:"name=Authorization"`
}
