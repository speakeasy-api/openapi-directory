package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Link
 * Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).
**/
public class Link {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public Link withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hreflang")
    public String hreflang;
    public Link withHreflang(String hreflang) {
        this.hreflang = hreflang;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public String media;
    public Link withMedia(String media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rel")
    public String rel;
    public Link withRel(String rel) {
        this.rel = rel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Link withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Link withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Link withValue(String value) {
        this.value = value;
        return this;
    }
}