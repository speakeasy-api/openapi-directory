package operations

// GetValidity200ApplicationJSONData
// Validation of API Key
type GetValidity200ApplicationJSONData struct {
	Permissions []string `json:"permissions"`
}

// GetValidity200ApplicationJSON
// The basic response containing the unique ID of the request and the response status
type GetValidity200ApplicationJSON struct {
	Data GetValidity200ApplicationJSONData `json:"data"`
}

// GetValidity401ApplicationJSON
// The error message should specify what cause the error
type GetValidity401ApplicationJSON struct {
	Message string `json:"message"`
}

// GetValidity403ApplicationJSON
// The error message should specify what cause the error
type GetValidity403ApplicationJSON struct {
	Message string `json:"message"`
}

// GetValidity429ApplicationJSON
// The error message should specify what cause the error
type GetValidity429ApplicationJSON struct {
	Message string `json:"message"`
}

// GetValidity500ApplicationJSON
// The error message should specify what cause the error
type GetValidity500ApplicationJSON struct {
	Message string `json:"message"`
}

type GetValidityResponse struct {
	ContentType                         string
	Headers                             map[string][]string
	StatusCode                          int64
	GetValidity200ApplicationJSONObject *GetValidity200ApplicationJSON
	GetValidity401ApplicationJSONObject *GetValidity401ApplicationJSON
	GetValidity403ApplicationJSONObject *GetValidity403ApplicationJSON
	GetValidity429ApplicationJSONObject *GetValidity429ApplicationJSON
	GetValidity500ApplicationJSONObject *GetValidity500ApplicationJSON
}
