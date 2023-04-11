import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { EventFilter } from "./eventfilter";
import { StateCondition } from "./statecondition";
import { Transport, TransportInput } from "./transport";
/**
 * A representation of the trigger resource.
 */
export declare class TriggerInput extends SpeakeasyBase {
    /**
     * Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.
     */
    channel?: string;
    /**
     * Represents a target of an invocation over HTTP.
     */
    destination?: Destination;
    /**
     * Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This will be set to `application/json` if the value is not defined.
     */
    eventDataContentType?: string;
    /**
     * Required. Unordered list. The list of filters that applies to event attributes. Only events that match all the provided filters are sent to the destination.
     */
    eventFilters?: EventFilter[];
    /**
     * Optional. User labels attached to the triggers that can be used to group resources.
     */
    labels?: Record<string, string>;
    /**
     * Required. The resource name of the trigger. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format.
     */
    name?: string;
    /**
     * Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have the `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts?hl=en#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. To create Audit Log triggers, the service account should also have the `roles/eventarc.eventReceiver` IAM role.
     */
    serviceAccount?: string;
    /**
     * Represents the transport intermediaries created for the trigger to deliver events.
     */
    transport?: TransportInput;
}
/**
 * A representation of the trigger resource.
 */
export declare class Trigger extends SpeakeasyBase {
    /**
     * Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.
     */
    channel?: string;
    /**
     * Output only. The reason(s) why a trigger is in FAILED state.
     */
    conditions?: Record<string, StateCondition>;
    /**
     * Output only. The creation time.
     */
    createTime?: string;
    /**
     * Represents a target of an invocation over HTTP.
     */
    destination?: Destination;
    /**
     * Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on create requests to ensure that the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This will be set to `application/json` if the value is not defined.
     */
    eventDataContentType?: string;
    /**
     * Required. Unordered list. The list of filters that applies to event attributes. Only events that match all the provided filters are sent to the destination.
     */
    eventFilters?: EventFilter[];
    /**
     * Optional. User labels attached to the triggers that can be used to group resources.
     */
    labels?: Record<string, string>;
    /**
     * Required. The resource name of the trigger. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format.
     */
    name?: string;
    /**
     * Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have the `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts?hl=en#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. To create Audit Log triggers, the service account should also have the `roles/eventarc.eventReceiver` IAM role.
     */
    serviceAccount?: string;
    /**
     * Represents the transport intermediaries created for the trigger to deliver events.
     */
    transport?: Transport;
    /**
     * Output only. Server-assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string;
}
