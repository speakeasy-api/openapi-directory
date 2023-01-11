package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MediaProperties
 * Properties of the media.
**/
public class MediaProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alignment")
    public MediaPropertiesAlignmentEnum alignment;
    public MediaProperties withAlignment(MediaPropertiesAlignmentEnum alignment) {
        this.alignment = alignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public MediaProperties withWidth(Integer width) {
        this.width = width;
        return this;
    }
}