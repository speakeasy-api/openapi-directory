package shared

// BulkRateError
// The error structure that gets returned with almost all failed API calls
type BulkRateError struct {
	ErrorCode   ErrorCodeEnum   `json:"error_code"`
	ErrorSource ErrorSourceEnum `json:"error_source"`
	ErrorType   ErrorTypeEnum   `json:"error_type"`
	Message     string          `json:"message"`
}

// BulkRate
// A bulk rate
type BulkRate struct {
	CreatedAt     map[string]interface{} `json:"created_at"`
	Errors        []BulkRateError        `json:"errors"`
	RateRequestID map[string]interface{} `json:"rate_request_id"`
	ShipmentID    map[string]interface{} `json:"shipment_id"`
	Status        map[string]interface{} `json:"status"`
}
