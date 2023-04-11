import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Controls the rule for dimension value ordering.
 */
export declare enum GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderTypeEnum {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED",
    Alphanumeric = "ALPHANUMERIC",
    CaseInsensitiveAlphanumeric = "CASE_INSENSITIVE_ALPHANUMERIC",
    Numeric = "NUMERIC"
}
/**
 * Sorts by dimension values.
 */
export declare class GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy extends SpeakeasyBase {
    /**
     * A dimension name in the request to order by.
     */
    dimensionName?: string;
    /**
     * Controls the rule for dimension value ordering.
     */
    orderType?: GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderTypeEnum;
}
