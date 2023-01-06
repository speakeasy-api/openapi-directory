package operations

// UpsertAccountRequestBodyIdentification
// Account identification requires an accountId, domain or both
type UpsertAccountRequestBodyIdentification struct {
	AccountID *string `json:"accountId,omitempty"`
	Domain    *string `json:"domain,omitempty"`
}

// UpsertAccountRequestBodyMembersIdentification
// User identification requires a userId, email or both
type UpsertAccountRequestBodyMembersIdentification struct {
	Email  *string `json:"email,omitempty"`
	UserID *string `json:"userId,omitempty"`
}

// UpsertAccountRequestBodyMembers
// Identification requires an accountId, domain or both
type UpsertAccountRequestBodyMembers struct {
	Identification UpsertAccountRequestBodyMembersIdentification `json:"identification"`
}

// UpsertAccountRequestBody
// Update properties and/or members of an account
type UpsertAccountRequestBody struct {
	Identification UpsertAccountRequestBodyIdentification `json:"identification"`
	Members        []UpsertAccountRequestBodyMembers      `json:"members,omitempty"`
	Properties     map[string]interface{}                 `json:"properties,omitempty"`
}

// UpsertAccount201ApplicationJSON
// The object was created
type UpsertAccount201ApplicationJSON struct {
	Message string `json:"message"`
}

// UpsertAccount400ApplicationJSONErrorsParameters
// All query-, header- and path- parameters that seemed incorrect
type UpsertAccount400ApplicationJSONErrorsParameters struct {
	Header map[string]string `json:"header,omitempty"`
	Path   map[string]string `json:"path,omitempty"`
	Query  map[string]string `json:"query,omitempty"`
}

// UpsertAccount400ApplicationJSONErrors
// Map that sums up all received values that seemed incorrect
type UpsertAccount400ApplicationJSONErrors struct {
	Fields     map[string]string                                `json:"fields,omitempty"`
	Parameters *UpsertAccount400ApplicationJSONErrorsParameters `json:"parameters,omitempty"`
}

// UpsertAccount400ApplicationJSON
// Specify the fields and/ or parameters that had errors
type UpsertAccount400ApplicationJSON struct {
	Errors UpsertAccount400ApplicationJSONErrors `json:"errors"`
}

// UpsertAccount401ApplicationJSON
// The error message should specify what cause the error
type UpsertAccount401ApplicationJSON struct {
	Message string `json:"message"`
}

// UpsertAccount429ApplicationJSON
// The error message should specify what cause the error
type UpsertAccount429ApplicationJSON struct {
	Message string `json:"message"`
}

// UpsertAccount500ApplicationJSON
// The error message should specify what cause the error
type UpsertAccount500ApplicationJSON struct {
	Message string `json:"message"`
}

type UpsertAccountRequest struct {
	Request UpsertAccountRequestBody `request:"mediaType=application/json"`
}

type UpsertAccountResponse struct {
	ContentType                           string
	Headers                               map[string][]string
	StatusCode                            int64
	UpsertAccount201ApplicationJSONObject *UpsertAccount201ApplicationJSON
	UpsertAccount400ApplicationJSONObject *UpsertAccount400ApplicationJSON
	UpsertAccount401ApplicationJSONObject *UpsertAccount401ApplicationJSON
	UpsertAccount429ApplicationJSONObject *UpsertAccount429ApplicationJSON
	UpsertAccount500ApplicationJSONObject *UpsertAccount500ApplicationJSON
}
