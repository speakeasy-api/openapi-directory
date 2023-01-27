package shared

// AgentMetadata
// VM Agent Metadata.
type AgentMetadata struct {
	CreationTime                     *string           `json:"creationTime,omitempty"`
	Creator                          *string           `json:"creator,omitempty"`
	ImageVersion                     *string           `json:"imageVersion,omitempty"`
	Instance                         *string           `json:"instance,omitempty"`
	InstanceID                       *string           `json:"instanceId,omitempty"`
	InstancePreemptionNoticeReceived *bool             `json:"instancePreemptionNoticeReceived,omitempty"`
	OsRelease                        map[string]string `json:"osRelease,omitempty"`
	Version                          *string           `json:"version,omitempty"`
	Zone                             *string           `json:"zone,omitempty"`
}
