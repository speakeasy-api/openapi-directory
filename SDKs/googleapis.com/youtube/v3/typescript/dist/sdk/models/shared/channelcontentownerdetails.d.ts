import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
 */
export declare class ChannelContentOwnerDetails extends SpeakeasyBase {
    /**
     * The ID of the content owner linked to the channel.
     */
    contentOwner?: string;
    /**
     * The date and time when the channel was linked to the content owner.
     */
    timeLinked?: Date;
}
