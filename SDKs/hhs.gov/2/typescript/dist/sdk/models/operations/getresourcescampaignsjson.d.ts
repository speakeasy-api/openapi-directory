import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesCampaignsJsonRequest extends SpeakeasyBase {
    /**
     * The maximum number of records to return
     */
    max?: number;
    /**
     * The offset of the records set to return for pagination
     */
    offset?: number;
    /**
     * * Set of fields to sort the records by.
     */
    sort?: string;
}
export declare class GetResourcesCampaignsJsonResponse extends SpeakeasyBase {
    /**
     * Returns the list of Campaigns.
     */
    campaignWrapped?: shared.CampaignWrapped;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
