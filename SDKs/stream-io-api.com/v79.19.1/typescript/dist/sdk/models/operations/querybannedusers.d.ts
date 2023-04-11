import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QueryBannedUsersRequest extends SpeakeasyBase {
    payload?: shared.QueryBannedUsersRequest;
}
export declare class QueryBannedUsersResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    queryBannedUsersResponse?: shared.QueryBannedUsersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
