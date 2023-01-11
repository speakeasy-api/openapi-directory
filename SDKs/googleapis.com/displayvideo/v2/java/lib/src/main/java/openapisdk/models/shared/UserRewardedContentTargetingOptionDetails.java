package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserRewardedContentTargetingOptionDetails
 * Represents a targetable user rewarded content status for video ads only. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
**/
public class UserRewardedContentTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRewardedContent")
    public UserRewardedContentTargetingOptionDetailsUserRewardedContentEnum userRewardedContent;
    public UserRewardedContentTargetingOptionDetails withUserRewardedContent(UserRewardedContentTargetingOptionDetailsUserRewardedContentEnum userRewardedContent) {
        this.userRewardedContent = userRewardedContent;
        return this;
    }
}