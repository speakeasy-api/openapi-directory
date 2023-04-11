import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignSortField } from "./campaignsortfield";
export declare enum CampaignSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class CampaignSort extends SpeakeasyBase {
    direction?: CampaignSortDirectionEnum;
    fields: CampaignSortField[];
}
