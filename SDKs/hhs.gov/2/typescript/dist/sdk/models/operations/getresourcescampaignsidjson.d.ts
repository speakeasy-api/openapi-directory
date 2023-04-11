import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesCampaignsIdJsonRequest extends SpeakeasyBase {
    /**
     * The id of the record to look up
     */
    id: number;
}
export declare class GetResourcesCampaignsIdJsonResponse extends SpeakeasyBase {
    /**
     * Returns the Campaign identified by the 'id'.
     */
    campaignWrapped?: shared.CampaignWrapped;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
