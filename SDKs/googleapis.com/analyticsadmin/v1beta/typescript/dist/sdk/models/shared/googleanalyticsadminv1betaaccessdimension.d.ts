import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the email of the user that accessed reporting data. Dimension values in report responses are strings.
 */
export declare class GoogleAnalyticsAdminV1betaAccessDimension extends SpeakeasyBase {
    /**
     * The API name of the dimension. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of dimensions supported in this API. Dimensions are referenced by name in `dimensionFilter` and `orderBys`.
     */
    dimensionName?: string;
}
