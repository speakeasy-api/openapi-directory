import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * A message data and its labels.
 */
export declare class PubsubMessage extends SpeakeasyBase {
    /**
     * The message payload.
     */
    data?: string;
    /**
     * Optional list of labels for this message. Keys in this collection must be unique.
     */
    label?: Label[];
    /**
     * ID of this message assigned by the server at publication time. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a PubsubMessage via a Pull call or a push delivery. It must not be populated by a publisher in a Publish call.
     */
    messageId?: string;
    /**
     * The time at which the message was published. The time is milliseconds since the UNIX epoch.
     */
    publishTime?: string;
}
