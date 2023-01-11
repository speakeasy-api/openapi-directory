package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArticleRelatedUrls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggested_link_text")
    public String suggestedLinkText;
    public ArticleRelatedUrls withSuggestedLinkText(String suggestedLinkText) {
        this.suggestedLinkText = suggestedLinkText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ArticleRelatedUrls withUrl(String url) {
        this.url = url;
        return this;
    }
}