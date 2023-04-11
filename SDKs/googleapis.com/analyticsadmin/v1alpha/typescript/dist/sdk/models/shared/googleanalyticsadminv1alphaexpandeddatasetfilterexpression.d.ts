import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilter";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList } from "./googleanalyticsadminv1alphaexpandeddatasetfilterexpressionlist";
/**
 * A logical expression of EnhancedDataSet dimension filters.
 */
export declare class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression extends SpeakeasyBase {
    /**
     * A list of ExpandedDataSet filter expressions.
     */
    andGroup?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList;
    /**
     * A specific filter for a single dimension
     */
    filter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilter;
    /**
     * A logical expression of EnhancedDataSet dimension filters.
     */
    notExpression?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
}
