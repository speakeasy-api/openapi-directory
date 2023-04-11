import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QueryMembersRequest extends SpeakeasyBase {
    payload?: shared.QueryMembersRequest;
}
export declare class QueryMembersResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    membersResponse?: shared.MembersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
