import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaNumericValue } from "./googleanalyticsadminv1alphanumericvalue";
/**
 * The operation type for this filter.
 */
export declare enum GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum {
    OperationUnspecified = "OPERATION_UNSPECIFIED",
    Equal = "EQUAL",
    LessThan = "LESS_THAN",
    LessThanOrEqual = "LESS_THAN_OR_EQUAL",
    GreaterThan = "GREATER_THAN",
    GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL"
}
/**
 * Filters for numeric or date values.
 */
export declare class GoogleAnalyticsAdminV1alphaAccessNumericFilter extends SpeakeasyBase {
    /**
     * The operation type for this filter.
     */
    operation?: GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum;
    /**
     * To represent a number.
     */
    value?: GoogleAnalyticsAdminV1alphaNumericValue;
}
