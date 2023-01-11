package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResponseObjectAlbums

 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
public class SearchResponseObjectAlbums {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public SearchResponseObjectAlbums withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public SimplifiedAlbumObject[] items;
    public SearchResponseObjectAlbums withItems(SimplifiedAlbumObject[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public SearchResponseObjectAlbums withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public SearchResponseObjectAlbums withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public SearchResponseObjectAlbums withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public SearchResponseObjectAlbums withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public SearchResponseObjectAlbums withTotal(Integer total) {
        this.total = total;
        return this;
    }
}