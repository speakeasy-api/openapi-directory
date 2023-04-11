import { SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
import { Segment } from "./segment";
/**
 * Successful response
 */
export declare class QueryCampaignsResponse extends SpeakeasyBase {
    campaigns: Campaign[];
    channels: Record<string, Record<string, any>>;
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    segments: Record<string, Segment>;
    users: Record<string, Record<string, any>>;
}
