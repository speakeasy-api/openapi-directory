import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Avoid bidding on apps with the star ratings.
 */
export declare enum DoubleVerifyAppStarRatingAvoidedStarRatingEnum {
    AppStarRateUnspecified = "APP_STAR_RATE_UNSPECIFIED",
    AppStarRate1Point5Less = "APP_STAR_RATE_1_POINT_5_LESS",
    AppStarRate2Less = "APP_STAR_RATE_2_LESS",
    AppStarRate2Point5Less = "APP_STAR_RATE_2_POINT_5_LESS",
    AppStarRate3Less = "APP_STAR_RATE_3_LESS",
    AppStarRate3Point5Less = "APP_STAR_RATE_3_POINT_5_LESS",
    AppStarRate4Less = "APP_STAR_RATE_4_LESS",
    AppStarRate4Point5Less = "APP_STAR_RATE_4_POINT_5_LESS"
}
/**
 * Details of DoubleVerify star ratings settings.
 */
export declare class DoubleVerifyAppStarRating extends SpeakeasyBase {
    /**
     * Avoid bidding on apps with insufficient star ratings.
     */
    avoidInsufficientStarRating?: boolean;
    /**
     * Avoid bidding on apps with the star ratings.
     */
    avoidedStarRating?: DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
}
