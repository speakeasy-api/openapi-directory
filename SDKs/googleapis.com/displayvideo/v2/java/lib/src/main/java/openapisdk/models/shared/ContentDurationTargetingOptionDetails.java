package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentDurationTargetingOptionDetails
 * Represents a targetable content duration. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`.
**/
public class ContentDurationTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDuration")
    public ContentDurationTargetingOptionDetailsContentDurationEnum contentDuration;
    public ContentDurationTargetingOptionDetails withContentDuration(ContentDurationTargetingOptionDetailsContentDurationEnum contentDuration) {
        this.contentDuration = contentDuration;
        return this;
    }
}