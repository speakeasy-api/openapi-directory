package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Promotion
 * Promotion result.
**/
public class Promotion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bodyLines")
    public PromotionBodyLines[] bodyLines;
    public Promotion withBodyLines(PromotionBodyLines[] bodyLines) {
        this.bodyLines = bodyLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayLink")
    public String displayLink;
    public Promotion withDisplayLink(String displayLink) {
        this.displayLink = displayLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlTitle")
    public String htmlTitle;
    public Promotion withHtmlTitle(String htmlTitle) {
        this.htmlTitle = htmlTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public PromotionImage image;
    public Promotion withImage(PromotionImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public Promotion withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Promotion withTitle(String title) {
        this.title = title;
        return this;
    }
}