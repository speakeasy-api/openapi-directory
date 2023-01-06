package operations

// UpsertUserRequestBodyIdentification
// User identification requires a userId, email or both
type UpsertUserRequestBodyIdentification struct {
	Email  *string `json:"email,omitempty"`
	UserID *string `json:"userId,omitempty"`
}

// UpsertUserRequestBody
// Update properties of a user
type UpsertUserRequestBody struct {
	Identification UpsertUserRequestBodyIdentification `json:"identification"`
	Properties     map[string]interface{}              `json:"properties,omitempty"`
}

// UpsertUser201ApplicationJSON
// The object was created
type UpsertUser201ApplicationJSON struct {
	Message string `json:"message"`
}

// UpsertUser400ApplicationJSONErrorsParameters
// All query-, header- and path- parameters that seemed incorrect
type UpsertUser400ApplicationJSONErrorsParameters struct {
	Header map[string]string `json:"header,omitempty"`
	Path   map[string]string `json:"path,omitempty"`
	Query  map[string]string `json:"query,omitempty"`
}

// UpsertUser400ApplicationJSONErrors
// Map that sums up all received values that seemed incorrect
type UpsertUser400ApplicationJSONErrors struct {
	Fields     map[string]string                             `json:"fields,omitempty"`
	Parameters *UpsertUser400ApplicationJSONErrorsParameters `json:"parameters,omitempty"`
}

// UpsertUser400ApplicationJSON
// Specify the fields and/ or parameters that had errors
type UpsertUser400ApplicationJSON struct {
	Errors UpsertUser400ApplicationJSONErrors `json:"errors"`
}

// UpsertUser401ApplicationJSON
// The error message should specify what cause the error
type UpsertUser401ApplicationJSON struct {
	Message string `json:"message"`
}

// UpsertUser403ApplicationJSON
// The error message should specify what cause the error
type UpsertUser403ApplicationJSON struct {
	Message string `json:"message"`
}

type UpsertUser429ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

// UpsertUser429ApplicationJSON
// The basic response containing the unique ID of the request and the response status
type UpsertUser429ApplicationJSON struct {
	Meta UpsertUser429ApplicationJSONMeta `json:"meta"`
}

// UpsertUser500ApplicationJSON
// The error message should specify what cause the error
type UpsertUser500ApplicationJSON struct {
	Message string `json:"message"`
}

type UpsertUserRequest struct {
	Request UpsertUserRequestBody `request:"mediaType=application/json"`
}

type UpsertUserResponse struct {
	ContentType                        string
	Headers                            map[string][]string
	StatusCode                         int64
	UpsertUser201ApplicationJSONObject *UpsertUser201ApplicationJSON
	UpsertUser400ApplicationJSONObject *UpsertUser400ApplicationJSON
	UpsertUser401ApplicationJSONObject *UpsertUser401ApplicationJSON
	UpsertUser403ApplicationJSONObject *UpsertUser403ApplicationJSON
	UpsertUser429ApplicationJSONObject *UpsertUser429ApplicationJSON
	UpsertUser500ApplicationJSONObject *UpsertUser500ApplicationJSON
}
