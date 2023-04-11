import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessFilter } from "./googleanalyticsadminv1alphaaccessfilter";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpressionList } from "./googleanalyticsadminv1alphaaccessfilterexpressionlist";
/**
 * Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
 */
export declare class GoogleAnalyticsAdminV1alphaAccessFilterExpression extends SpeakeasyBase {
    /**
     * An expression to filter dimension or metric values.
     */
    accessFilter?: GoogleAnalyticsAdminV1alphaAccessFilter;
    /**
     * A list of filter expressions.
     */
    andGroup?: GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;
    /**
     * Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
     */
    notExpression?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;
    /**
     * A list of filter expressions.
     */
    orGroup?: GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;
}
