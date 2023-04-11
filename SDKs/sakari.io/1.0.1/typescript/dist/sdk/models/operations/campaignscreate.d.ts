import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CampaignsCreateSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class CampaignsCreateRequest extends SpeakeasyBase {
    campaignRequest?: shared.CampaignRequest;
    /**
     * Account to apply operations to
     */
    accountId: string;
}
export declare class CampaignsCreateResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    campaignResponse?: shared.CampaignResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
