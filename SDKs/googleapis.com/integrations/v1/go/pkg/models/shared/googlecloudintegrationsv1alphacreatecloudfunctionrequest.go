package shared

// GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest
// Request for Creating Cloud Function rpc call.
type GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest struct {
	FunctionName   *string `json:"functionName,omitempty"`
	FunctionRegion *string `json:"functionRegion,omitempty"`
	ProjectID      *string `json:"projectId,omitempty"`
}
