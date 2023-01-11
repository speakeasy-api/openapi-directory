package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentOutstreamPositionTargetingOptionDetails
 * Represents a targetable content outstream position, which could be used by display and video ads. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
**/
public class ContentOutstreamPositionTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentOutstreamPosition")
    public ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum contentOutstreamPosition;
    public ContentOutstreamPositionTargetingOptionDetails withContentOutstreamPosition(ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum contentOutstreamPosition) {
        this.contentOutstreamPosition = contentOutstreamPosition;
        return this;
    }
}