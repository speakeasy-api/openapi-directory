import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CampaignsUpdateSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class CampaignsUpdateRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * ID of campaign
     */
    campaignId: string;
}
export declare class CampaignsUpdateResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    campaignResponse?: shared.CampaignResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
