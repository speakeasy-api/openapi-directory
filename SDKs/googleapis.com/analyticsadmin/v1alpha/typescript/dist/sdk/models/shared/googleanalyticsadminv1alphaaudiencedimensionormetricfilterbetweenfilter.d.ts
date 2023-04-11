import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue";
/**
 * A filter for numeric or date values between certain values on a dimension or metric.
 */
export declare class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter extends SpeakeasyBase {
    /**
     * To represent a number.
     */
    fromValue?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
    /**
     * To represent a number.
     */
    toValue?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
}
