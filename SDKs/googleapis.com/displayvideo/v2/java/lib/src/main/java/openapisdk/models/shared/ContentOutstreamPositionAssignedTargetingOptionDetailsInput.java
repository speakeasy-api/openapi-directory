package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentOutstreamPositionAssignedTargetingOptionDetailsInput
 * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
**/
public class ContentOutstreamPositionAssignedTargetingOptionDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentOutstreamPosition")
    public ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum contentOutstreamPosition;
    public ContentOutstreamPositionAssignedTargetingOptionDetailsInput withContentOutstreamPosition(ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum contentOutstreamPosition) {
        this.contentOutstreamPosition = contentOutstreamPosition;
        return this;
    }
}