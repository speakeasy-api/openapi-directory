package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Media
 * Represents media information.
**/
public class GoogleCloudChannelV1Media {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public GoogleCloudChannelV1Media withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GoogleCloudChannelV1Media withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudChannelV1MediaTypeEnum type;
    public GoogleCloudChannelV1Media withType(GoogleCloudChannelV1MediaTypeEnum type) {
        this.type = type;
        return this;
    }
}