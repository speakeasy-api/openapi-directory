package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Preview
 * Preview information
**/
public class Preview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public PreviewContentTypeEnum contentType;
    public Preview withContentType(PreviewContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Preview withUrl(String url) {
        this.url = url;
        return this;
    }
}