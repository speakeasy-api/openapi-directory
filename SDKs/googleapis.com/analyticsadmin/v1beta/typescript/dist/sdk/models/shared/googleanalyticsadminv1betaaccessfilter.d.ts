import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccessBetweenFilter } from "./googleanalyticsadminv1betaaccessbetweenfilter";
import { GoogleAnalyticsAdminV1betaAccessInListFilter } from "./googleanalyticsadminv1betaaccessinlistfilter";
import { GoogleAnalyticsAdminV1betaAccessNumericFilter } from "./googleanalyticsadminv1betaaccessnumericfilter";
import { GoogleAnalyticsAdminV1betaAccessStringFilter } from "./googleanalyticsadminv1betaaccessstringfilter";
/**
 * An expression to filter dimension or metric values.
 */
export declare class GoogleAnalyticsAdminV1betaAccessFilter extends SpeakeasyBase {
    /**
     * To express that the result needs to be between two numbers (inclusive).
     */
    betweenFilter?: GoogleAnalyticsAdminV1betaAccessBetweenFilter;
    /**
     * The dimension name or metric name.
     */
    fieldName?: string;
    /**
     * The result needs to be in a list of string values.
     */
    inListFilter?: GoogleAnalyticsAdminV1betaAccessInListFilter;
    /**
     * Filters for numeric or date values.
     */
    numericFilter?: GoogleAnalyticsAdminV1betaAccessNumericFilter;
    /**
     * The filter for strings.
     */
    stringFilter?: GoogleAnalyticsAdminV1betaAccessStringFilter;
}
