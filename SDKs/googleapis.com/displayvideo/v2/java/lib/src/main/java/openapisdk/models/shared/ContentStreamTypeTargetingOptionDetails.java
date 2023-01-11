package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentStreamTypeTargetingOptionDetails
 * Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`.
**/
public class ContentStreamTypeTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentStreamType")
    public ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum contentStreamType;
    public ContentStreamTypeTargetingOptionDetails withContentStreamType(ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum contentStreamType) {
        this.contentStreamType = contentStreamType;
        return this;
    }
}