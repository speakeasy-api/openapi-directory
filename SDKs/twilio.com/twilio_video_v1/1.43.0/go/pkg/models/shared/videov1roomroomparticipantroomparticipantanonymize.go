// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// VideoV1RoomRoomParticipantRoomParticipantAnonymize - OK
type VideoV1RoomRoomParticipantRoomParticipantAnonymize struct {
	// The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the RoomParticipant resource.
	AccountSid *string `json:"account_sid,omitempty"`
	// The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
	DateCreated *time.Time `json:"date_created,omitempty"`
	// The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
	DateUpdated *time.Time `json:"date_updated,omitempty"`
	// The duration in seconds that the participant was `connected`. Populated only after the participant is `disconnected`.
	Duration *int64 `json:"duration,omitempty"`
	// The time when the participant disconnected from the room in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
	EndTime *time.Time `json:"end_time,omitempty"`
	// The SID of the participant.
	Identity *string `json:"identity,omitempty"`
	// The SID of the participant's room.
	RoomSid *string `json:"room_sid,omitempty"`
	// The unique string that we created to identify the RoomParticipant resource.
	Sid *string `json:"sid,omitempty"`
	// The time of participant connected to the room in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
	StartTime *time.Time                              `json:"start_time,omitempty"`
	Status    *RoomParticipantAnonymizeEnumStatusEnum `json:"status,omitempty"`
	// The absolute URL of the resource.
	URL *string `json:"url,omitempty"`
}
