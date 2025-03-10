// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack - OK
type VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack struct {
	// The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
	DateCreated *time.Time `json:"date_created,omitempty"`
	// The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
	DateUpdated *time.Time `json:"date_updated,omitempty"`
	// Whether the track is enabled.
	Enabled *bool                                       `json:"enabled,omitempty"`
	Kind    *RoomParticipantSubscribedTrackEnumKindEnum `json:"kind,omitempty"`
	// The track name. Must have no more than 128 characters and be unique among the participant's published tracks.
	Name *string `json:"name,omitempty"`
	// The SID of the participant that subscribes to the track.
	ParticipantSid *string `json:"participant_sid,omitempty"`
	// The SID of the participant that publishes the track.
	PublisherSid *string `json:"publisher_sid,omitempty"`
	// The SID of the room where the track is published.
	RoomSid *string `json:"room_sid,omitempty"`
	// The unique string that we created to identify the RoomParticipantSubscribedTrack resource.
	Sid *string `json:"sid,omitempty"`
	// The absolute URL of the resource.
	URL *string `json:"url,omitempty"`
}
