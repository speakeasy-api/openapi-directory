package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WmxSitemapContent
 * Information about the various content types in the sitemap.
**/
public class WmxSitemapContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexed")
    public String indexed;
    public WmxSitemapContent withIndexed(String indexed) {
        this.indexed = indexed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submitted")
    public String submitted;
    public WmxSitemapContent withSubmitted(String submitted) {
        this.submitted = submitted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WmxSitemapContentTypeEnum type;
    public WmxSitemapContent withType(WmxSitemapContentTypeEnum type) {
        this.type = type;
        return this;
    }
}