import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CampaignsFetchAllSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class CampaignsFetchAllRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * Filter by name or part of
     */
    name?: string;
    /**
     * Results to skip when paginating through a result set
     */
    offset?: number;
}
export declare class CampaignsFetchAllResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    campaignsResponse?: shared.CampaignsResponse;
    contentType: string;
    /**
     * invalid request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
