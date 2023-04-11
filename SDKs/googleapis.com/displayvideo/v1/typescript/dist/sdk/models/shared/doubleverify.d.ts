import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleVerifyAppStarRating } from "./doubleverifyappstarrating";
import { DoubleVerifyBrandSafetyCategories } from "./doubleverifybrandsafetycategories";
import { DoubleVerifyDisplayViewability } from "./doubleverifydisplayviewability";
import { DoubleVerifyFraudInvalidTraffic } from "./doubleverifyfraudinvalidtraffic";
import { DoubleVerifyVideoViewability } from "./doubleverifyvideoviewability";
export declare enum DoubleVerifyAvoidedAgeRatingsEnum {
    AgeRatingUnspecified = "AGE_RATING_UNSPECIFIED",
    AppAgeRateUnknown = "APP_AGE_RATE_UNKNOWN",
    AppAgeRate4Plus = "APP_AGE_RATE_4_PLUS",
    AppAgeRate9Plus = "APP_AGE_RATE_9_PLUS",
    AppAgeRate12Plus = "APP_AGE_RATE_12_PLUS",
    AppAgeRate17Plus = "APP_AGE_RATE_17_PLUS",
    AppAgeRate18Plus = "APP_AGE_RATE_18_PLUS"
}
/**
 * Details of DoubleVerify settings.
 */
export declare class DoubleVerify extends SpeakeasyBase {
    /**
     * Details of DoubleVerify star ratings settings.
     */
    appStarRating?: DoubleVerifyAppStarRating;
    /**
     * Avoid bidding on apps with the age rating.
     */
    avoidedAgeRatings?: DoubleVerifyAvoidedAgeRatingsEnum[];
    /**
     * Settings for brand safety controls.
     */
    brandSafetyCategories?: DoubleVerifyBrandSafetyCategories;
    /**
     * The custom segment ID provided by DoubleVerify. The ID must start with "51" and consist of eight digits. Custom segment ID cannot be specified along with any of the following fields: * brand_safety_categories * avoided_age_ratings * app_star_rating * fraud_invalid_traffic
     */
    customSegmentId?: string;
    /**
     * Details of DoubleVerify display viewability settings.
     */
    displayViewability?: DoubleVerifyDisplayViewability;
    /**
     * DoubleVerify Fraud & Invalid Traffic settings.
     */
    fraudInvalidTraffic?: DoubleVerifyFraudInvalidTraffic;
    /**
     * Details of DoubleVerify video viewability settings.
     */
    videoViewability?: DoubleVerifyVideoViewability;
}
