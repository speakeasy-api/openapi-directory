import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of the object to find.
 */
export declare enum GetSuggestionsTypeEnum {
    Entity = "entity",
    Category = "category",
    Publisher = "publisher",
    Dataset = "dataset",
    Question = "question"
}
export declare class GetSuggestionsRequest extends SpeakeasyBase {
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
     * Must be an integer from 0 to 100.
     */
    limit?: number;
    /**
     * Query to match.
     */
    query: string;
    /**
     * Type of the object to find.
     */
    type: GetSuggestionsTypeEnum;
    /**
     * This parameter is only available when suggesting entities with `type=entity`.
     *
     * @remarks
     * If it is provided, suggestions will be filtered to include
     * only entities that have data for the given variable.
     *
     * If the variable provided is invalid, no entities will be returned.
     *
     * Note that this filtering will increase response time significantly,
     * so it should only be used when necessary.
     */
    variableId?: string;
}
export declare class GetSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
