import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessDimensionValue } from "./googleanalyticsadminv1alphaaccessdimensionvalue";
import { GoogleAnalyticsAdminV1alphaAccessMetricValue } from "./googleanalyticsadminv1alphaaccessmetricvalue";
/**
 * Access report data for each row.
 */
export declare class GoogleAnalyticsAdminV1alphaAccessRow extends SpeakeasyBase {
    /**
     * List of dimension values. These values are in the same order as specified in the request.
     */
    dimensionValues?: GoogleAnalyticsAdminV1alphaAccessDimensionValue[];
    /**
     * List of metric values. These values are in the same order as specified in the request.
     */
    metricValues?: GoogleAnalyticsAdminV1alphaAccessMetricValue[];
}
