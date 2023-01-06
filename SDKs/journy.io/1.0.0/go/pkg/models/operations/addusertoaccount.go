package operations

type AddUserToAccountPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

// AddUserToAccountRequestBody
// The user being added/removed from the account
type AddUserToAccountRequestBody struct {
	UserID string `json:"userId"`
}

// AddUserToAccount201ApplicationJSON
// The object was created
type AddUserToAccount201ApplicationJSON struct {
	Message string `json:"message"`
}

// AddUserToAccount400ApplicationJSONErrorsParameters
// All query-, header- and path- parameters that seemed incorrect
type AddUserToAccount400ApplicationJSONErrorsParameters struct {
	Header map[string]string `json:"header,omitempty"`
	Path   map[string]string `json:"path,omitempty"`
	Query  map[string]string `json:"query,omitempty"`
}

// AddUserToAccount400ApplicationJSONErrors
// Map that sums up all received values that seemed incorrect
type AddUserToAccount400ApplicationJSONErrors struct {
	Fields     map[string]string                                   `json:"fields,omitempty"`
	Parameters *AddUserToAccount400ApplicationJSONErrorsParameters `json:"parameters,omitempty"`
}

// AddUserToAccount400ApplicationJSON
// Specify the fields and/ or parameters that had errors
type AddUserToAccount400ApplicationJSON struct {
	Errors AddUserToAccount400ApplicationJSONErrors `json:"errors"`
}

// AddUserToAccount401ApplicationJSON
// The error message should specify what cause the error
type AddUserToAccount401ApplicationJSON struct {
	Message string `json:"message"`
}

// AddUserToAccount429ApplicationJSON
// The error message should specify what cause the error
type AddUserToAccount429ApplicationJSON struct {
	Message string `json:"message"`
}

// AddUserToAccount500ApplicationJSON
// The error message should specify what cause the error
type AddUserToAccount500ApplicationJSON struct {
	Message string `json:"message"`
}

type AddUserToAccountRequest struct {
	PathParams AddUserToAccountPathParams
	Request    AddUserToAccountRequestBody `request:"mediaType=application/json"`
}

type AddUserToAccountResponse struct {
	ContentType                              string
	Headers                                  map[string][]string
	StatusCode                               int64
	AddUserToAccount201ApplicationJSONObject *AddUserToAccount201ApplicationJSON
	AddUserToAccount400ApplicationJSONObject *AddUserToAccount400ApplicationJSON
	AddUserToAccount401ApplicationJSONObject *AddUserToAccount401ApplicationJSON
	AddUserToAccount429ApplicationJSONObject *AddUserToAccount429ApplicationJSON
	AddUserToAccount500ApplicationJSONObject *AddUserToAccount500ApplicationJSON
}
