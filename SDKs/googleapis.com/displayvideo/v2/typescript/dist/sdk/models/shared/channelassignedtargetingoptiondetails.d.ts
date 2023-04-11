import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`.
 */
export declare class ChannelAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Required. ID of the channel. Should refer to the channel ID field on a [Partner-owned channel](partners.channels#Channel.FIELDS.channel_id) or [advertiser-owned channel](advertisers.channels#Channel.FIELDS.channel_id) resource.
     */
    channelId?: string;
    /**
     * Indicates if this option is being negatively targeted. For advertiser level assigned targeting option, this field must be true.
     */
    negative?: boolean;
}
