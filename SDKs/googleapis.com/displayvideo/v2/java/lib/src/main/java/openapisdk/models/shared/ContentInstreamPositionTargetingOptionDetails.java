package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentInstreamPositionTargetingOptionDetails
 * Represents a targetable content instream position, which could be used by video and audio ads. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
**/
public class ContentInstreamPositionTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentInstreamPosition")
    public ContentInstreamPositionTargetingOptionDetailsContentInstreamPositionEnum contentInstreamPosition;
    public ContentInstreamPositionTargetingOptionDetails withContentInstreamPosition(ContentInstreamPositionTargetingOptionDetailsContentInstreamPositionEnum contentInstreamPosition) {
        this.contentInstreamPosition = contentInstreamPosition;
        return this;
    }
}