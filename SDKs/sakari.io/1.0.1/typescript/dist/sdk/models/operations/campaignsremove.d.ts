import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CampaignsRemoveSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class CampaignsRemoveRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * Campaign id to delete
     */
    campaignId: string;
}
/**
 * successful operation
 */
export declare class CampaignsRemove200ApplicationJSON extends SpeakeasyBase {
    success?: boolean;
}
export declare class CampaignsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    campaignsRemove200ApplicationJSONObject?: CampaignsRemove200ApplicationJSON;
}
