package operations

type PostTargetsArchive400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostTargetsArchive401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsArchive403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsArchiveRequest struct {
	Request []string `request:"mediaType=application/json"`
}

type PostTargetsArchiveResponse struct {
	ContentType                                string
	StatusCode                                 int64
	PostTargetsArchive400ApplicationJSONObject *PostTargetsArchive400ApplicationJSON
	PostTargetsArchive401ApplicationJSONObject *PostTargetsArchive401ApplicationJSON
	PostTargetsArchive403ApplicationJSONObject *PostTargetsArchive403ApplicationJSON
	TargetIds                                  []string
}
