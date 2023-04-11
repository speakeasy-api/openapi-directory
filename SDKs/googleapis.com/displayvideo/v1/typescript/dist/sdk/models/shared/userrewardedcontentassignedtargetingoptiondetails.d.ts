import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. User rewarded content status for video ads.
 */
export declare enum UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum {
    UserRewardedContentUnspecified = "USER_REWARDED_CONTENT_UNSPECIFIED",
    UserRewardedContentUserRewarded = "USER_REWARDED_CONTENT_USER_REWARDED",
    UserRewardedContentNotUserRewarded = "USER_REWARDED_CONTENT_NOT_USER_REWARDED"
}
/**
 * User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
 */
export declare class UserRewardedContentAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
     */
    targetingOptionId?: string;
    /**
     * Output only. User rewarded content status for video ads.
     */
    userRewardedContent?: UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum;
}
/**
 * User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
 */
export declare class UserRewardedContentAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
     */
    targetingOptionId?: string;
}
