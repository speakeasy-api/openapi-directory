package operations

type RemoveUserFromAccountPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

// RemoveUserFromAccountRequestBody
// The user being added/removed from the account
type RemoveUserFromAccountRequestBody struct {
	UserID string `json:"userId"`
}

type RemoveUserFromAccount201ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

// RemoveUserFromAccount201ApplicationJSON
// The object was created
type RemoveUserFromAccount201ApplicationJSON struct {
	Message string                                      `json:"message"`
	Meta    RemoveUserFromAccount201ApplicationJSONMeta `json:"meta"`
}

// RemoveUserFromAccount400ApplicationJSONErrorsParameters
// All query-, header- and path- parameters that seemed incorrect
type RemoveUserFromAccount400ApplicationJSONErrorsParameters struct {
	Header map[string]string `json:"header,omitempty"`
	Path   map[string]string `json:"path,omitempty"`
	Query  map[string]string `json:"query,omitempty"`
}

// RemoveUserFromAccount400ApplicationJSONErrors
// Map that sums up all received values that seemed incorrect
type RemoveUserFromAccount400ApplicationJSONErrors struct {
	Fields     map[string]string                                        `json:"fields,omitempty"`
	Parameters *RemoveUserFromAccount400ApplicationJSONErrorsParameters `json:"parameters,omitempty"`
}

type RemoveUserFromAccount400ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

// RemoveUserFromAccount400ApplicationJSON
// Specify the fields and/ or parameters that had errors
type RemoveUserFromAccount400ApplicationJSON struct {
	Errors  RemoveUserFromAccount400ApplicationJSONErrors `json:"errors"`
	Message string                                        `json:"message"`
	Meta    RemoveUserFromAccount400ApplicationJSONMeta   `json:"meta"`
}

type RemoveUserFromAccount401ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

// RemoveUserFromAccount401ApplicationJSON
// The error message should specify what cause the error
type RemoveUserFromAccount401ApplicationJSON struct {
	Message string                                      `json:"message"`
	Meta    RemoveUserFromAccount401ApplicationJSONMeta `json:"meta"`
}

type RemoveUserFromAccount403ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

// RemoveUserFromAccount403ApplicationJSON
// The error message should specify what cause the error
type RemoveUserFromAccount403ApplicationJSON struct {
	Message string                                      `json:"message"`
	Meta    RemoveUserFromAccount403ApplicationJSONMeta `json:"meta"`
}

type RemoveUserFromAccount429ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

// RemoveUserFromAccount429ApplicationJSON
// The error message should specify what cause the error
type RemoveUserFromAccount429ApplicationJSON struct {
	Message string                                      `json:"message"`
	Meta    RemoveUserFromAccount429ApplicationJSONMeta `json:"meta"`
}

type RemoveUserFromAccount500ApplicationJSONMeta struct {
	RequestID string  `json:"requestId"`
	Status    float64 `json:"status"`
}

// RemoveUserFromAccount500ApplicationJSON
// The error message should specify what cause the error
type RemoveUserFromAccount500ApplicationJSON struct {
	Message string                                      `json:"message"`
	Meta    RemoveUserFromAccount500ApplicationJSONMeta `json:"meta"`
}

type RemoveUserFromAccountRequest struct {
	PathParams RemoveUserFromAccountPathParams
	Request    RemoveUserFromAccountRequestBody `request:"mediaType=application/json"`
}

type RemoveUserFromAccountResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	RemoveUserFromAccount201ApplicationJSONObject *RemoveUserFromAccount201ApplicationJSON
	RemoveUserFromAccount400ApplicationJSONObject *RemoveUserFromAccount400ApplicationJSON
	RemoveUserFromAccount401ApplicationJSONObject *RemoveUserFromAccount401ApplicationJSON
	RemoveUserFromAccount403ApplicationJSONObject *RemoveUserFromAccount403ApplicationJSON
	RemoveUserFromAccount429ApplicationJSONObject *RemoveUserFromAccount429ApplicationJSON
	RemoveUserFromAccount500ApplicationJSONObject *RemoveUserFromAccount500ApplicationJSON
}
