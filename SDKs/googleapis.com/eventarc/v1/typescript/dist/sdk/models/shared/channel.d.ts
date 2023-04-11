import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The state of a Channel.
 */
export declare enum ChannelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
 */
export declare class Channel extends SpeakeasyBase {
    /**
     * Output only. The activation token for the channel. The token must be used by the provider to register the channel for publishing.
     */
    activationToken?: string;
    /**
     * Output only. The creation time.
     */
    createTime?: string;
    /**
     * Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/* /locations/* /keyRings/* /cryptoKeys/*`.
     */
    cryptoKeyName?: string;
    /**
     * Required. The resource name of the channel. Must be unique within the location on the project and must be in `projects/{project}/locations/{location}/channels/{channel_id}` format.
     */
    name?: string;
    /**
     * The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`.
     */
    provider?: string;
    /**
     * Output only. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{project}/topics/{topic_id}`.
     */
    pubsubTopic?: string;
    /**
     * Output only. The state of a Channel.
     */
    state?: ChannelStateEnum;
    /**
     * Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string;
}
/**
 * A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
 */
export declare class ChannelInput extends SpeakeasyBase {
    /**
     * Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/* /locations/* /keyRings/* /cryptoKeys/*`.
     */
    cryptoKeyName?: string;
    /**
     * Required. The resource name of the channel. Must be unique within the location on the project and must be in `projects/{project}/locations/{location}/channels/{channel_id}` format.
     */
    name?: string;
    /**
     * The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`.
     */
    provider?: string;
}
