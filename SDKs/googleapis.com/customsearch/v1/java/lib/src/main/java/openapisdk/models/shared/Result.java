package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Result
 * A custom search result.
**/
public class Result {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheId")
    public String cacheId;
    public Result withCacheId(String cacheId) {
        this.cacheId = cacheId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayLink")
    public String displayLink;
    public Result withDisplayLink(String displayLink) {
        this.displayLink = displayLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileFormat")
    public String fileFormat;
    public Result withFileFormat(String fileFormat) {
        this.fileFormat = fileFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedUrl")
    public String formattedUrl;
    public Result withFormattedUrl(String formattedUrl) {
        this.formattedUrl = formattedUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlFormattedUrl")
    public String htmlFormattedUrl;
    public Result withHtmlFormattedUrl(String htmlFormattedUrl) {
        this.htmlFormattedUrl = htmlFormattedUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlSnippet")
    public String htmlSnippet;
    public Result withHtmlSnippet(String htmlSnippet) {
        this.htmlSnippet = htmlSnippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlTitle")
    public String htmlTitle;
    public Result withHtmlTitle(String htmlTitle) {
        this.htmlTitle = htmlTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ResultImage image;
    public Result withImage(ResultImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Result withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public ResultLabels[] labels;
    public Result withLabels(ResultLabels[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public Result withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mime")
    public String mime;
    public Result withMime(String mime) {
        this.mime = mime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagemap")
    public java.util.Map<String, Object> pagemap;
    public Result withPagemap(java.util.Map<String, Object> pagemap) {
        this.pagemap = pagemap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public String snippet;
    public Result withSnippet(String snippet) {
        this.snippet = snippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Result withTitle(String title) {
        this.title = title;
        return this;
    }
}