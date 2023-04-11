import { SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";
/**
 * Optional. If unset, then defaults to ignoring failures (i.e. not retrying them).
 */
export declare enum EventTriggerRetryPolicyEnum {
    RetryPolicyUnspecified = "RETRY_POLICY_UNSPECIFIED",
    RetryPolicyDoNotRetry = "RETRY_POLICY_DO_NOT_RETRY",
    RetryPolicyRetry = "RETRY_POLICY_RETRY"
}
/**
 * Describes EventTrigger, used to request events to be sent from another service.
 */
export declare class EventTriggerInput extends SpeakeasyBase {
    /**
     * Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.
     */
    channel?: string;
    /**
     * Criteria used to filter events.
     */
    eventFilters?: EventFilter[];
    /**
     * Required. The type of event to observe. For example: `google.cloud.audit.log.v1.written` or `google.cloud.pubsub.topic.v1.messagePublished`.
     */
    eventType?: string;
    /**
     * Optional. The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. Format: `projects/{project}/topics/{topic}`. This is only valid for events of type `google.cloud.pubsub.topic.v1.messagePublished`. The topic provided here will not be deleted at function deletion.
     */
    pubsubTopic?: string;
    /**
     * Optional. If unset, then defaults to ignoring failures (i.e. not retrying them).
     */
    retryPolicy?: EventTriggerRetryPolicyEnum;
    /**
     * Optional. The email of the trigger's service account. The service account must have permission to invoke Cloud Run services, the permission is `run.routes.invoke`. If empty, defaults to the Compute Engine default service account: `{project_number}-compute@developer.gserviceaccount.com`.
     */
    serviceAccountEmail?: string;
    /**
     * The region that the trigger will be in. The trigger will only receive events originating in this region. It can be the same region as the function, a different region or multi-region, or the global region. If not provided, defaults to the same region as the function.
     */
    triggerRegion?: string;
}
/**
 * Describes EventTrigger, used to request events to be sent from another service.
 */
export declare class EventTrigger extends SpeakeasyBase {
    /**
     * Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.
     */
    channel?: string;
    /**
     * Criteria used to filter events.
     */
    eventFilters?: EventFilter[];
    /**
     * Required. The type of event to observe. For example: `google.cloud.audit.log.v1.written` or `google.cloud.pubsub.topic.v1.messagePublished`.
     */
    eventType?: string;
    /**
     * Optional. The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. Format: `projects/{project}/topics/{topic}`. This is only valid for events of type `google.cloud.pubsub.topic.v1.messagePublished`. The topic provided here will not be deleted at function deletion.
     */
    pubsubTopic?: string;
    /**
     * Optional. If unset, then defaults to ignoring failures (i.e. not retrying them).
     */
    retryPolicy?: EventTriggerRetryPolicyEnum;
    /**
     * Optional. The email of the trigger's service account. The service account must have permission to invoke Cloud Run services, the permission is `run.routes.invoke`. If empty, defaults to the Compute Engine default service account: `{project_number}-compute@developer.gserviceaccount.com`.
     */
    serviceAccountEmail?: string;
    /**
     * Output only. The resource name of the Eventarc trigger. The format of this field is `projects/{project}/locations/{region}/triggers/{trigger}`.
     */
    trigger?: string;
    /**
     * The region that the trigger will be in. The trigger will only receive events originating in this region. It can be the same region as the function, a different region or multi-region, or the global region. If not provided, defaults to the same region as the function.
     */
    triggerRegion?: string;
}
