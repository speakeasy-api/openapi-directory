package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PromotionBodyLines
 * Block object belonging to a promotion.
**/
public class PromotionBodyLines {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlTitle")
    public String htmlTitle;
    public PromotionBodyLines withHtmlTitle(String htmlTitle) {
        this.htmlTitle = htmlTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public PromotionBodyLines withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PromotionBodyLines withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PromotionBodyLines withUrl(String url) {
        this.url = url;
        return this;
    }
}