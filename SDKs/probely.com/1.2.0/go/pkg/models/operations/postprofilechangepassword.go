package operations

type PostProfileChangePasswordRequestBody struct {
	Confpassword    string                 `json:"confpassword"`
	CurrentPassword map[string]interface{} `json:"current_password"`
	Password        map[string]interface{} `json:"password"`
}

type PostProfileChangePassword200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostProfileChangePassword400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostProfileChangePassword401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostProfileChangePasswordRequest struct {
	Request PostProfileChangePasswordRequestBody `request:"mediaType=application/json"`
}

type PostProfileChangePasswordResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	PostProfileChangePassword200ApplicationJSONObject *PostProfileChangePassword200ApplicationJSON
	PostProfileChangePassword400ApplicationJSONObject *PostProfileChangePassword400ApplicationJSON
	PostProfileChangePassword401ApplicationJSONObject *PostProfileChangePassword401ApplicationJSON
}
