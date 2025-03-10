package shared

type APIV2010AccountRecording struct {
	AccountSid        *string                  `json:"account_sid,omitempty"`
	APIVersion        *string                  `json:"api_version,omitempty"`
	CallSid           *string                  `json:"call_sid,omitempty"`
	Channels          *int64                   `json:"channels,omitempty"`
	ConferenceSid     *string                  `json:"conference_sid,omitempty"`
	DateCreated       *string                  `json:"date_created,omitempty"`
	DateUpdated       *string                  `json:"date_updated,omitempty"`
	Duration          *string                  `json:"duration,omitempty"`
	EncryptionDetails *interface{}             `json:"encryption_details,omitempty"`
	ErrorCode         *int64                   `json:"error_code,omitempty"`
	MediaURL          *string                  `json:"media_url,omitempty"`
	Price             *string                  `json:"price,omitempty"`
	PriceUnit         *string                  `json:"price_unit,omitempty"`
	Sid               *string                  `json:"sid,omitempty"`
	Source            *RecordingEnumSourceEnum `json:"source,omitempty"`
	StartTime         *string                  `json:"start_time,omitempty"`
	Status            *RecordingEnumStatusEnum `json:"status,omitempty"`
	SubresourceUris   map[string]interface{}   `json:"subresource_uris,omitempty"`
	URI               *string                  `json:"uri,omitempty"`
}
