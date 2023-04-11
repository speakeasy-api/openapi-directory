import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CampaignsFetchSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class CampaignsFetchRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * ID of campaign to return
     */
    campaignId: string;
}
export declare class CampaignsFetchResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    campaignResponse?: shared.CampaignResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
