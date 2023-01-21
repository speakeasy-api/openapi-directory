package shared

type SchemeHTTPBearer struct {
	Authorization string `security:"name=Authorization"`
}
