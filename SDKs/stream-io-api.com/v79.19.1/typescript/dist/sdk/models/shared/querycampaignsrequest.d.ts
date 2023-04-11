import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignSort } from "./campaignsort";
export declare class QueryCampaignsRequest extends SpeakeasyBase {
    filterConditions: Record<string, any>;
    limit?: number;
    sort?: CampaignSort;
}
