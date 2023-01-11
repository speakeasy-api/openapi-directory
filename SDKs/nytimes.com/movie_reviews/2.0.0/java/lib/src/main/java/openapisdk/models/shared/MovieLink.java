package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MovieLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggested_link_text")
    public String suggestedLinkText;
    public MovieLink withSuggestedLinkText(String suggestedLinkText) {
        this.suggestedLinkText = suggestedLinkText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public MovieLink withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MovieLink withUrl(String url) {
        this.url = url;
        return this;
    }
}