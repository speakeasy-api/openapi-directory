import { SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
/**
 * Successful response
 */
export declare class CreateCampaignResponse extends SpeakeasyBase {
    campaign?: Campaign;
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
}
