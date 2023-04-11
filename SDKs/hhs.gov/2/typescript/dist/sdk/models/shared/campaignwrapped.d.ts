import { SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
import { Meta } from "./meta";
/**
 * Returns the list of Campaigns.
 */
export declare class CampaignWrapped extends SpeakeasyBase {
    callback?: string;
    meta?: Meta;
    results?: Campaign[];
}
