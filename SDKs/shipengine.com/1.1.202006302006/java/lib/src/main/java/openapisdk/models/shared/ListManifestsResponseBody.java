package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListManifestsResponseBody
 * A list manifests response body
**/
public class ListManifestsResponseBody {
    @JsonProperty("links")
    public ListManifestsResponseBodyPaginationLink links;
    public ListManifestsResponseBody withLinks(ListManifestsResponseBodyPaginationLink links) {
        this.links = links;
        return this;
    }
    @JsonProperty("manifests")
    public ListManifestsResponseBodyManifest[] manifests;
    public ListManifestsResponseBody withManifests(ListManifestsResponseBodyManifest[] manifests) {
        this.manifests = manifests;
        return this;
    }
    @JsonProperty("page")
    public Integer page;
    public ListManifestsResponseBody withPage(Integer page) {
        this.page = page;
        return this;
    }
    @JsonProperty("pages")
    public Integer pages;
    public ListManifestsResponseBody withPages(Integer pages) {
        this.pages = pages;
        return this;
    }
    @JsonProperty("total")
    public Long total;
    public ListManifestsResponseBody withTotal(Long total) {
        this.total = total;
        return this;
    }
}