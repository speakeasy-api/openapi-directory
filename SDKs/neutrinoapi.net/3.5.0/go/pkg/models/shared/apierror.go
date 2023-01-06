package shared

type APIError struct {
	APIError    int32  `json:"apiError"`
	APIErrorMsg string `json:"apiErrorMsg"`
}
