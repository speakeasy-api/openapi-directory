import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccessDimensionValue } from "./googleanalyticsadminv1betaaccessdimensionvalue";
import { GoogleAnalyticsAdminV1betaAccessMetricValue } from "./googleanalyticsadminv1betaaccessmetricvalue";
/**
 * Access report data for each row.
 */
export declare class GoogleAnalyticsAdminV1betaAccessRow extends SpeakeasyBase {
    /**
     * List of dimension values. These values are in the same order as specified in the request.
     */
    dimensionValues?: GoogleAnalyticsAdminV1betaAccessDimensionValue[];
    /**
     * List of metric values. These values are in the same order as specified in the request.
     */
    metricValues?: GoogleAnalyticsAdminV1betaAccessMetricValue[];
}
