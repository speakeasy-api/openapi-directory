package shared

type RateLimitErrors struct {
	Title *string
}

type RateLimit struct {
	Errors []RateLimitErrors
}
