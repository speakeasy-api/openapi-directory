// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// EventsV1Sink - Created
type EventsV1Sink struct {
	// The date that this Sink was created, given in ISO 8601 format.
	DateCreated *time.Time `json:"date_created,omitempty"`
	// The date that this Sink was updated, given in ISO 8601 format.
	DateUpdated *time.Time `json:"date_updated,omitempty"`
	// A human readable description for the Sink
	Description *string `json:"description,omitempty"`
	// Contains a dictionary of URL links to nested resources of this Sink.
	Links map[string]interface{} `json:"links,omitempty"`
	// A 34 character string that uniquely identifies this Sink.
	Sid *string `json:"sid,omitempty"`
	// The information required for Twilio to connect to the provided Sink encoded as JSON.
	SinkConfiguration interface{}           `json:"sink_configuration,omitempty"`
	SinkType          *SinkEnumSinkTypeEnum `json:"sink_type,omitempty"`
	Status            *SinkEnumStatusEnum   `json:"status,omitempty"`
	// The URL of this resource.
	URL *string `json:"url,omitempty"`
}
