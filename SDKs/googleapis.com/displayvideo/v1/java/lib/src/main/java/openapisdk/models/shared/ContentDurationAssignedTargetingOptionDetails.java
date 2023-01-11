package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentDurationAssignedTargetingOptionDetails
 * Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect.
**/
public class ContentDurationAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDuration")
    public ContentDurationAssignedTargetingOptionDetailsContentDurationEnum contentDuration;
    public ContentDurationAssignedTargetingOptionDetails withContentDuration(ContentDurationAssignedTargetingOptionDetailsContentDurationEnum contentDuration) {
        this.contentDuration = contentDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public ContentDurationAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}