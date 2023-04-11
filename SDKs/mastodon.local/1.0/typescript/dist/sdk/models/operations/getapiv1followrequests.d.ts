import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1FollowRequestsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1FollowRequestsRequest extends SpeakeasyBase {
    /**
     * Maximum number of results to return. Defaults to 40. Paginate using the HTTP Link header.
     */
    limit?: number;
}
export declare class GetApiV1FollowRequestsResponse extends SpeakeasyBase {
    /**
     * Accounts that are requesting a follow.
     */
    accounts?: shared.Account[];
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
