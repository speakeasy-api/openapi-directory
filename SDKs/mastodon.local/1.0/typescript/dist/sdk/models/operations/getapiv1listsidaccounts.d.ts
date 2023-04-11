import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1ListsIdAccountsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1ListsIdAccountsRequest extends SpeakeasyBase {
    /**
     * ID of the list in the database
     */
    id: string;
    /**
     * Maximum number of results. Defaults to 40. Max 40. Set to 0 in order to get all accounts without pagination. Pagination is done with the HTTP Link header.
     */
    limit?: number;
    /**
     * Return results older than ID
     */
    maxId?: string;
    /**
     * Return results newer than ID
     */
    sinceId?: string;
}
export declare class GetApiV1ListsIdAccountsResponse extends SpeakeasyBase {
    /**
     * Success
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
