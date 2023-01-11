package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentInstreamPositionAssignedTargetingOptionDetailsInput
 * Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
**/
public class ContentInstreamPositionAssignedTargetingOptionDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentInstreamPosition")
    public ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum contentInstreamPosition;
    public ContentInstreamPositionAssignedTargetingOptionDetailsInput withContentInstreamPosition(ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum contentInstreamPosition) {
        this.contentInstreamPosition = contentInstreamPosition;
        return this;
    }
}