import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reason why the location is being recommended to comply with guidelines.
 */
export declare enum ComplyWithGuidelinesRecommendationReasonEnum {
    RecommendationReasonUnspecified = "RECOMMENDATION_REASON_UNSPECIFIED",
    BusinessLocationSuspended = "BUSINESS_LOCATION_SUSPENDED",
    BusinessLocationDisabled = "BUSINESS_LOCATION_DISABLED"
}
/**
 * Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177).
 */
export declare class ComplyWithGuidelines extends SpeakeasyBase {
    /**
     * The reason why the location is being recommended to comply with guidelines.
     */
    recommendationReason?: ComplyWithGuidelinesRecommendationReasonEnum;
}
