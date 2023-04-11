import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateAMapRequest extends SpeakeasyBase {
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
     * Values must be specified for each constraint in the dataset.
     *
     * @remarks
     * For example, to generate map data for `demographics.population.count`,
     * you must specify a value for `year` by passing `year=2013`.
     */
    constraint?: string;
    /**
     * A comma separated list of entity IDs.
     *
     * @remarks
     * Entities must have the same type and represent geographical regions.
     */
    entityId: string;
    /**
     * A single variable ID.
     */
    variable: string;
}
export declare class CreateAMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
