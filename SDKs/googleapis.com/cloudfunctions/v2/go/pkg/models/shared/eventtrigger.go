// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// EventTriggerRetryPolicyEnum - Optional. If unset, then defaults to ignoring failures (i.e. not retrying them).
type EventTriggerRetryPolicyEnum string

const (
	EventTriggerRetryPolicyEnumRetryPolicyUnspecified EventTriggerRetryPolicyEnum = "RETRY_POLICY_UNSPECIFIED"
	EventTriggerRetryPolicyEnumRetryPolicyDoNotRetry  EventTriggerRetryPolicyEnum = "RETRY_POLICY_DO_NOT_RETRY"
	EventTriggerRetryPolicyEnumRetryPolicyRetry       EventTriggerRetryPolicyEnum = "RETRY_POLICY_RETRY"
)

func (e EventTriggerRetryPolicyEnum) ToPointer() *EventTriggerRetryPolicyEnum {
	return &e
}

func (e *EventTriggerRetryPolicyEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "RETRY_POLICY_UNSPECIFIED":
		fallthrough
	case "RETRY_POLICY_DO_NOT_RETRY":
		fallthrough
	case "RETRY_POLICY_RETRY":
		*e = EventTriggerRetryPolicyEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for EventTriggerRetryPolicyEnum: %v", v)
	}
}

// EventTriggerInput - Describes EventTrigger, used to request events to be sent from another service.
type EventTriggerInput struct {
	// Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.
	Channel *string `json:"channel,omitempty"`
	// Criteria used to filter events.
	EventFilters []EventFilter `json:"eventFilters,omitempty"`
	// Required. The type of event to observe. For example: `google.cloud.audit.log.v1.written` or `google.cloud.pubsub.topic.v1.messagePublished`.
	EventType *string `json:"eventType,omitempty"`
	// Optional. The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. Format: `projects/{project}/topics/{topic}`. This is only valid for events of type `google.cloud.pubsub.topic.v1.messagePublished`. The topic provided here will not be deleted at function deletion.
	PubsubTopic *string `json:"pubsubTopic,omitempty"`
	// Optional. If unset, then defaults to ignoring failures (i.e. not retrying them).
	RetryPolicy *EventTriggerRetryPolicyEnum `json:"retryPolicy,omitempty"`
	// Optional. The email of the trigger's service account. The service account must have permission to invoke Cloud Run services, the permission is `run.routes.invoke`. If empty, defaults to the Compute Engine default service account: `{project_number}-compute@developer.gserviceaccount.com`.
	ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
	// The region that the trigger will be in. The trigger will only receive events originating in this region. It can be the same region as the function, a different region or multi-region, or the global region. If not provided, defaults to the same region as the function.
	TriggerRegion *string `json:"triggerRegion,omitempty"`
}

// EventTrigger - Describes EventTrigger, used to request events to be sent from another service.
type EventTrigger struct {
	// Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.
	Channel *string `json:"channel,omitempty"`
	// Criteria used to filter events.
	EventFilters []EventFilter `json:"eventFilters,omitempty"`
	// Required. The type of event to observe. For example: `google.cloud.audit.log.v1.written` or `google.cloud.pubsub.topic.v1.messagePublished`.
	EventType *string `json:"eventType,omitempty"`
	// Optional. The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. Format: `projects/{project}/topics/{topic}`. This is only valid for events of type `google.cloud.pubsub.topic.v1.messagePublished`. The topic provided here will not be deleted at function deletion.
	PubsubTopic *string `json:"pubsubTopic,omitempty"`
	// Optional. If unset, then defaults to ignoring failures (i.e. not retrying them).
	RetryPolicy *EventTriggerRetryPolicyEnum `json:"retryPolicy,omitempty"`
	// Optional. The email of the trigger's service account. The service account must have permission to invoke Cloud Run services, the permission is `run.routes.invoke`. If empty, defaults to the Compute Engine default service account: `{project_number}-compute@developer.gserviceaccount.com`.
	ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
	// Output only. The resource name of the Eventarc trigger. The format of this field is `projects/{project}/locations/{region}/triggers/{trigger}`.
	Trigger *string `json:"trigger,omitempty"`
	// The region that the trigger will be in. The trigger will only receive events originating in this region. It can be the same region as the function, a different region or multi-region, or the global region. If not provided, defaults to the same region as the function.
	TriggerRegion *string `json:"triggerRegion,omitempty"`
}
