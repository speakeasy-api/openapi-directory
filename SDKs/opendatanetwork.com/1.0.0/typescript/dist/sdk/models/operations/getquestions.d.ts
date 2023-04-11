import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuestionsRequest extends SpeakeasyBase {
    /**
     * e.g. cQovpGcdUT1CSzgYk0KPYdAI0
     */
    xAppToken?: string;
    /**
     * The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be
     *
     * @remarks
     * used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).
     */
    appToken?: string;
    /**
     * Maximum number of results to return.
     *
     * @remarks
     * Must be an integer from 0 to 50000.
     */
    limit?: number;
    /**
     * Number of results to skip.
     *
     * @remarks
     * Used for pagination.
     */
    offset?: number;
    /**
     * String to search against.
     */
    query: string;
}
export declare class GetQuestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
