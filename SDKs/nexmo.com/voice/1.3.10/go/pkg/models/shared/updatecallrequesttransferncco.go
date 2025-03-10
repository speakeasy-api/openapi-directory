// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type UpdateCallRequestTransferNccoDestination struct {
	// Refer to the [NCCO Guide](https://developer.nexmo.com/voice/voice-api/ncco-reference) for a description of possible NCCO parameters.
	Ncco []map[string]interface{} `json:"ncco"`
	// Always `ncco`
	Type string `json:"type"`
}

type UpdateCallRequestTransferNcco struct {
	// Transfer the call to a new NCCO
	Action      RequestTransferActionParamEnum           `json:"action"`
	Destination UpdateCallRequestTransferNccoDestination `json:"destination"`
}
