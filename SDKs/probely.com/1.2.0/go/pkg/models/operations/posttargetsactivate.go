package operations

type PostTargetsActivate400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostTargetsActivate401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsActivate403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsActivateRequest struct {
	Request []string `request:"mediaType=application/json"`
}

type PostTargetsActivateResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	PostTargetsActivate400ApplicationJSONObject *PostTargetsActivate400ApplicationJSON
	PostTargetsActivate401ApplicationJSONObject *PostTargetsActivate401ApplicationJSON
	PostTargetsActivate403ApplicationJSONObject *PostTargetsActivate403ApplicationJSON
	TargetIds                                   []string
}
