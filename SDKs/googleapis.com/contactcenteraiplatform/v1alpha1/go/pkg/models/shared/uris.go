package shared

// UrIs
// Message storing the URIs of the ContactCenter.
type UrIs struct {
	ChatBotURI                      *string `json:"chatBotUri,omitempty"`
	MediaURI                        *string `json:"mediaUri,omitempty"`
	RootURI                         *string `json:"rootUri,omitempty"`
	VirtualAgentStreamingServiceURI *string `json:"virtualAgentStreamingServiceUri,omitempty"`
}
