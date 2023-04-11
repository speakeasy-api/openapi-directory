import { SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
import { Recipient } from "./recipient";
import { Segment } from "./segment";
/**
 * Successful response
 */
export declare class QueryRecipientsResponse extends SpeakeasyBase {
    campaigns: Record<string, Campaign>;
    channels: Record<string, Record<string, any>>;
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    recipients: Recipient[];
    segments: Record<string, Segment>;
    users: Record<string, Record<string, any>>;
}
