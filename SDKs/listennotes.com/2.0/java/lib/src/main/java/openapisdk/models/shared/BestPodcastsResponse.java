package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BestPodcastsResponse {
    @JsonProperty("has_next")
    public Boolean hasNext;
    public BestPodcastsResponse withHasNext(Boolean hasNext) {
        this.hasNext = hasNext;
        return this;
    }
    @JsonProperty("has_previous")
    public Boolean hasPrevious;
    public BestPodcastsResponse withHasPrevious(Boolean hasPrevious) {
        this.hasPrevious = hasPrevious;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public BestPodcastsResponse withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public BestPodcastsResponse withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public BestPodcastsResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("next_page_number")
    public Long nextPageNumber;
    public BestPodcastsResponse withNextPageNumber(Long nextPageNumber) {
        this.nextPageNumber = nextPageNumber;
        return this;
    }
    @JsonProperty("page_number")
    public Long pageNumber;
    public BestPodcastsResponse withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonProperty("parent_id")
    public Long parentId;
    public BestPodcastsResponse withParentId(Long parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonProperty("podcasts")
    public PodcastSimple[] podcasts;
    public BestPodcastsResponse withPodcasts(PodcastSimple[] podcasts) {
        this.podcasts = podcasts;
        return this;
    }
    @JsonProperty("previous_page_number")
    public Long previousPageNumber;
    public BestPodcastsResponse withPreviousPageNumber(Long previousPageNumber) {
        this.previousPageNumber = previousPageNumber;
        return this;
    }
    @JsonProperty("total")
    public Long total;
    public BestPodcastsResponse withTotal(Long total) {
        this.total = total;
        return this;
    }
}