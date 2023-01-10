package shared

type MeetingsCapabilityWebhooksRecordingChangedHTTPMethodEnum string

const (
	MeetingsCapabilityWebhooksRecordingChangedHTTPMethodEnumGet  MeetingsCapabilityWebhooksRecordingChangedHTTPMethodEnum = "GET"
	MeetingsCapabilityWebhooksRecordingChangedHTTPMethodEnumPost MeetingsCapabilityWebhooksRecordingChangedHTTPMethodEnum = "POST"
	MeetingsCapabilityWebhooksRecordingChangedHTTPMethodEnumPut  MeetingsCapabilityWebhooksRecordingChangedHTTPMethodEnum = "PUT"
)

// MeetingsCapabilityWebhooksRecordingChanged
// Vonage will send recording changed events to this URL
type MeetingsCapabilityWebhooksRecordingChanged struct {
	Address    *string                                                   `json:"address,omitempty"`
	HTTPMethod *MeetingsCapabilityWebhooksRecordingChangedHTTPMethodEnum `json:"http_method,omitempty"`
}

type MeetingsCapabilityWebhooksRoomChangedHTTPMethodEnum string

const (
	MeetingsCapabilityWebhooksRoomChangedHTTPMethodEnumGet  MeetingsCapabilityWebhooksRoomChangedHTTPMethodEnum = "GET"
	MeetingsCapabilityWebhooksRoomChangedHTTPMethodEnumPost MeetingsCapabilityWebhooksRoomChangedHTTPMethodEnum = "POST"
	MeetingsCapabilityWebhooksRoomChangedHTTPMethodEnumPut  MeetingsCapabilityWebhooksRoomChangedHTTPMethodEnum = "PUT"
)

// MeetingsCapabilityWebhooksRoomChanged
// Vonage will send call room changed events to this URL
type MeetingsCapabilityWebhooksRoomChanged struct {
	Address    *string                                              `json:"address,omitempty"`
	HTTPMethod *MeetingsCapabilityWebhooksRoomChangedHTTPMethodEnum `json:"http_method,omitempty"`
}

type MeetingsCapabilityWebhooksSessionChangedHTTPMethodEnum string

const (
	MeetingsCapabilityWebhooksSessionChangedHTTPMethodEnumGet  MeetingsCapabilityWebhooksSessionChangedHTTPMethodEnum = "GET"
	MeetingsCapabilityWebhooksSessionChangedHTTPMethodEnumPost MeetingsCapabilityWebhooksSessionChangedHTTPMethodEnum = "POST"
	MeetingsCapabilityWebhooksSessionChangedHTTPMethodEnumPut  MeetingsCapabilityWebhooksSessionChangedHTTPMethodEnum = "PUT"
)

// MeetingsCapabilityWebhooksSessionChanged
// Vonage will send call session changed events to this URL
type MeetingsCapabilityWebhooksSessionChanged struct {
	Address    *string                                                 `json:"address,omitempty"`
	HTTPMethod *MeetingsCapabilityWebhooksSessionChangedHTTPMethodEnum `json:"http_method,omitempty"`
}

type MeetingsCapabilityWebhooks struct {
	RecordingChanged *MeetingsCapabilityWebhooksRecordingChanged `json:"recording_changed,omitempty"`
	RoomChanged      *MeetingsCapabilityWebhooksRoomChanged      `json:"room_changed,omitempty"`
	SessionChanged   *MeetingsCapabilityWebhooksSessionChanged   `json:"session_changed,omitempty"`
}

// MeetingsCapability
// Meetings related configuration
type MeetingsCapability struct {
	Webhooks *MeetingsCapabilityWebhooks `json:"webhooks,omitempty"`
}
