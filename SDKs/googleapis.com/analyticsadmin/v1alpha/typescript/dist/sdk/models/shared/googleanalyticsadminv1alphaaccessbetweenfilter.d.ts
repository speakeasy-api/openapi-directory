import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaNumericValue } from "./googleanalyticsadminv1alphanumericvalue";
/**
 * To express that the result needs to be between two numbers (inclusive).
 */
export declare class GoogleAnalyticsAdminV1alphaAccessBetweenFilter extends SpeakeasyBase {
    /**
     * To represent a number.
     */
    fromValue?: GoogleAnalyticsAdminV1alphaNumericValue;
    /**
     * To represent a number.
     */
    toValue?: GoogleAnalyticsAdminV1alphaNumericValue;
}
