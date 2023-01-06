package shared

type AuthFailedErrors struct {
	Title *string
}

type AuthFailed struct {
	Errors []AuthFailedErrors
}
