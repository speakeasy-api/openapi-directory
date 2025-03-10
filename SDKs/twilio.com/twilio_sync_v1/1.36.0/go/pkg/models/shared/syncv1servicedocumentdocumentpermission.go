package shared

type SyncV1ServiceDocumentDocumentPermission struct {
	AccountSid  *string `json:"account_sid,omitempty"`
	DocumentSid *string `json:"document_sid,omitempty"`
	Identity    *string `json:"identity,omitempty"`
	Manage      *bool   `json:"manage,omitempty"`
	Read        *bool   `json:"read,omitempty"`
	ServiceSid  *string `json:"service_sid,omitempty"`
	URL         *string `json:"url,omitempty"`
	Write       *bool   `json:"write,omitempty"`
}
