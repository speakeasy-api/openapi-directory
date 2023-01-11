package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HtmlContent
 * HTML content for a creative.
**/
public class HtmlContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public HtmlContent withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public String snippet;
    public HtmlContent withSnippet(String snippet) {
        this.snippet = snippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public HtmlContent withWidth(Integer width) {
        this.width = width;
        return this;
    }
}