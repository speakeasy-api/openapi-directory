package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CuratedListSearchResult
 * When **type** is *curated*.
**/
public class CuratedListSearchResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_highlighted")
    public String descriptionHighlighted;
    public CuratedListSearchResult withDescriptionHighlighted(String descriptionHighlighted) {
        this.descriptionHighlighted = descriptionHighlighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_original")
    public String descriptionOriginal;
    public CuratedListSearchResult withDescriptionOriginal(String descriptionOriginal) {
        this.descriptionOriginal = descriptionOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CuratedListSearchResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public CuratedListSearchResult withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podcasts")
    public PodcastMinimum[] podcasts;
    public CuratedListSearchResult withPodcasts(PodcastMinimum[] podcasts) {
        this.podcasts = podcasts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pub_date_ms")
    public Long pubDateMs;
    public CuratedListSearchResult withPubDateMs(Long pubDateMs) {
        this.pubDateMs = pubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_domain")
    public String sourceDomain;
    public CuratedListSearchResult withSourceDomain(String sourceDomain) {
        this.sourceDomain = sourceDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_url")
    public String sourceUrl;
    public CuratedListSearchResult withSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_highlighted")
    public String titleHighlighted;
    public CuratedListSearchResult withTitleHighlighted(String titleHighlighted) {
        this.titleHighlighted = titleHighlighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_original")
    public String titleOriginal;
    public CuratedListSearchResult withTitleOriginal(String titleOriginal) {
        this.titleOriginal = titleOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public CuratedListSearchResult withTotal(Long total) {
        this.total = total;
        return this;
    }
}