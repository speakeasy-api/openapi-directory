import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AccountsIdFollowersSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AccountsIdFollowersRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
    /**
     * Maximum number of results to return. Defaults to 40.
     */
    limit?: number;
    /**
     * Internal parameter. Use HTTP `Link` header for pagination.
     */
    maxId?: string;
    /**
     * Internal parameter. Use HTTP `Link` header for pagination.
     */
    sinceId?: string;
}
export declare class GetApiV1AccountsIdFollowersResponse extends SpeakeasyBase {
    /**
     * Success
     */
    accounts?: shared.Account[];
    contentType: string;
    /**
     * Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
