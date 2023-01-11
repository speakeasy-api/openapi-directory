package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WmxSitemap
 * Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).
**/
public class WmxSitemap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public WmxSitemapContent[] contents;
    public WmxSitemap withContents(WmxSitemapContent[] contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public String errors;
    public WmxSitemap withErrors(String errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPending")
    public Boolean isPending;
    public WmxSitemap withIsPending(Boolean isPending) {
        this.isPending = isPending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSitemapsIndex")
    public Boolean isSitemapsIndex;
    public WmxSitemap withIsSitemapsIndex(Boolean isSitemapsIndex) {
        this.isSitemapsIndex = isSitemapsIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastDownloaded")
    public String lastDownloaded;
    public WmxSitemap withLastDownloaded(String lastDownloaded) {
        this.lastDownloaded = lastDownloaded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSubmitted")
    public String lastSubmitted;
    public WmxSitemap withLastSubmitted(String lastSubmitted) {
        this.lastSubmitted = lastSubmitted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public WmxSitemap withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WmxSitemapTypeEnum type;
    public WmxSitemap withType(WmxSitemapTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public String warnings;
    public WmxSitemap withWarnings(String warnings) {
        this.warnings = warnings;
        return this;
    }
}