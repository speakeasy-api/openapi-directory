import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaNumericValue } from "./googleanalyticsadminv1betanumericvalue";
/**
 * To express that the result needs to be between two numbers (inclusive).
 */
export declare class GoogleAnalyticsAdminV1betaAccessBetweenFilter extends SpeakeasyBase {
    /**
     * To represent a number.
     */
    fromValue?: GoogleAnalyticsAdminV1betaNumericValue;
    /**
     * To represent a number.
     */
    toValue?: GoogleAnalyticsAdminV1betaNumericValue;
}
