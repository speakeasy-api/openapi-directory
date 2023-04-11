import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsListGrantsRequest extends SpeakeasyBase {
    /**
     * The client ID of your GitHub app.
     */
    clientId?: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
export declare class OauthAuthorizationsListGrantsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    applicationGrants?: shared.ApplicationGrant[];
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
