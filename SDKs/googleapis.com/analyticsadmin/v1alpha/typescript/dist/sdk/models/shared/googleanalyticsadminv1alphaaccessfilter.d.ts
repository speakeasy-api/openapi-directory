import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessBetweenFilter } from "./googleanalyticsadminv1alphaaccessbetweenfilter";
import { GoogleAnalyticsAdminV1alphaAccessInListFilter } from "./googleanalyticsadminv1alphaaccessinlistfilter";
import { GoogleAnalyticsAdminV1alphaAccessNumericFilter } from "./googleanalyticsadminv1alphaaccessnumericfilter";
import { GoogleAnalyticsAdminV1alphaAccessStringFilter } from "./googleanalyticsadminv1alphaaccessstringfilter";
/**
 * An expression to filter dimension or metric values.
 */
export declare class GoogleAnalyticsAdminV1alphaAccessFilter extends SpeakeasyBase {
    /**
     * To express that the result needs to be between two numbers (inclusive).
     */
    betweenFilter?: GoogleAnalyticsAdminV1alphaAccessBetweenFilter;
    /**
     * The dimension name or metric name.
     */
    fieldName?: string;
    /**
     * The result needs to be in a list of string values.
     */
    inListFilter?: GoogleAnalyticsAdminV1alphaAccessInListFilter;
    /**
     * Filters for numeric or date values.
     */
    numericFilter?: GoogleAnalyticsAdminV1alphaAccessNumericFilter;
    /**
     * The filter for strings.
     */
    stringFilter?: GoogleAnalyticsAdminV1alphaAccessStringFilter;
}
