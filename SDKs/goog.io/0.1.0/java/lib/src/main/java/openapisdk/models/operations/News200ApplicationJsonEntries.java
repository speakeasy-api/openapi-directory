package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class News200ApplicationJsonEntries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guidislink")
    public String guidislink;
    public News200ApplicationJsonEntries withGuidislink(String guidislink) {
        this.guidislink = guidislink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public News200ApplicationJsonEntries withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public News200ApplicationJsonEntries withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public String links;
    public News200ApplicationJsonEntries withLinks(String links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published")
    public String published;
    public News200ApplicationJsonEntries withPublished(String published) {
        this.published = published;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_parsed")
    public String publishedParsed;
    public News200ApplicationJsonEntries withPublishedParsed(String publishedParsed) {
        this.publishedParsed = publishedParsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public News200ApplicationJsonEntries withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_articles")
    public String subArticles;
    public News200ApplicationJsonEntries withSubArticles(String subArticles) {
        this.subArticles = subArticles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public News200ApplicationJsonEntries withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary_detail")
    public String summaryDetail;
    public News200ApplicationJsonEntries withSummaryDetail(String summaryDetail) {
        this.summaryDetail = summaryDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public News200ApplicationJsonEntries withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_detail")
    public String titleDetail;
    public News200ApplicationJsonEntries withTitleDetail(String titleDetail) {
        this.titleDetail = titleDetail;
        return this;
    }
}