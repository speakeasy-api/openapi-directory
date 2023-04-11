import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1EndorsementsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1EndorsementsRequest extends SpeakeasyBase {
    /**
     * Maximum number of results to return. Defaults to 40. Paginate using the HTTP Link header.
     */
    limit?: number;
    /**
     * Internal parameter. Use HTTP Link header from response for pagination
     */
    maxId?: string;
    /**
     * Internal parameter. Use HTTP Link header from response for pagination.
     */
    sinceId?: string;
}
export declare class GetApiV1EndorsementsResponse extends SpeakeasyBase {
    /**
     * Success. Because endorsement ids are private, you must parse the HTTP Link header to find next and previous pages.
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
