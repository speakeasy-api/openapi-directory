import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccessFilter } from "./googleanalyticsadminv1betaaccessfilter";
import { GoogleAnalyticsAdminV1betaAccessFilterExpressionList } from "./googleanalyticsadminv1betaaccessfilterexpressionlist";
/**
 * Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
 */
export declare class GoogleAnalyticsAdminV1betaAccessFilterExpression extends SpeakeasyBase {
    /**
     * An expression to filter dimension or metric values.
     */
    accessFilter?: GoogleAnalyticsAdminV1betaAccessFilter;
    /**
     * A list of filter expressions.
     */
    andGroup?: GoogleAnalyticsAdminV1betaAccessFilterExpressionList;
    /**
     * Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
     */
    notExpression?: GoogleAnalyticsAdminV1betaAccessFilterExpression;
    /**
     * A list of filter expressions.
     */
    orGroup?: GoogleAnalyticsAdminV1betaAccessFilterExpressionList;
}
