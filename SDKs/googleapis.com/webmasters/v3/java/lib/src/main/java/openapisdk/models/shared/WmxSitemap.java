package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * WmxSitemap
 * Contains detailed information about a specific URL submitted as a sitemap.
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
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastDownloaded")
    public OffsetDateTime lastDownloaded;
    public WmxSitemap withLastDownloaded(OffsetDateTime lastDownloaded) {
        this.lastDownloaded = lastDownloaded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastSubmitted")
    public OffsetDateTime lastSubmitted;
    public WmxSitemap withLastSubmitted(OffsetDateTime lastSubmitted) {
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
    public String type;
    public WmxSitemap withType(String type) {
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