import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If format is set to `google`, the data frame will be formatted
 *
 * @remarks
 * as a [Google Visualizations data table](https://developers.google.com/chart/interactive/docs/reference#datatable-class).
 * If the format is not provided or invalid, then the frame
 * will be formatted normally.
 */
export declare enum GetValuesForVariablesFormatEnum {
    Google = "google"
}
export declare class GetValuesForVariablesRequest extends SpeakeasyBase {
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
     * Whether or not to produce a description of the data.
     *
     * @remarks
     * Set to `true` to produce a description.
     * Descriptions are not available if no entities are specified.
     *
     * + Default `false`
     */
    describe?: boolean;
    /**
     * Comma separated list of entity IDs.
     *
     * @remarks
     * Defaults to retrieving all entities.
     * Note that since there is currently no results pagination,
     * retrieving values for all entities may produce incomplete results.
     */
    entityId?: string;
    /**
     * Number of steps to forecast.
     *
     * @remarks
     * Must be an integer between 0 and 20.
     * Forecasts are produced using linear extrapolation
     * on the data. They are only available when retrieving
     * data for a single variable across many numerical
     * constraint options.
     *
     * + Default `0`
     */
    forecast?: number;
    /**
     * If format is set to `google`, the data frame will be formatted
     *
     * @remarks
     * as a [Google Visualizations data table](https://developers.google.com/chart/interactive/docs/reference#datatable-class).
     * If the format is not provided or invalid, then the frame
     * will be formatted normally.
     */
    format?: GetValuesForVariablesFormatEnum;
    /**
     * Comma separated list of variable IDs.
     *
     * @remarks
     * Defaults to retrieving all variables.
     * It is also possible to pass in a topic such as
     * `demographics`, or a dataset such as `demographics.population`,
     * which would both be equivalent to specifying
     * `demographics.population.count` and `demographics.population.change`.
     * Note that only variables in the same dataset are allowed.
     */
    variable: string;
}
export declare class GetValuesForVariablesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
