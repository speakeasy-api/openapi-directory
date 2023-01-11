package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentStreamTypeAssignedTargetingOptionDetails
 * Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.
**/
public class ContentStreamTypeAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentStreamType")
    public ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum contentStreamType;
    public ContentStreamTypeAssignedTargetingOptionDetails withContentStreamType(ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum contentStreamType) {
        this.contentStreamType = contentStreamType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public ContentStreamTypeAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}