package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointGetAnAlbumsTracks200ApplicationJson

 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
public class EndpointGetAnAlbumsTracks200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public EndpointGetAnAlbumsTracks200ApplicationJson withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.SimplifiedTrackObject[] items;
    public EndpointGetAnAlbumsTracks200ApplicationJson withItems(openapisdk.models.shared.SimplifiedTrackObject[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public EndpointGetAnAlbumsTracks200ApplicationJson withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public EndpointGetAnAlbumsTracks200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public EndpointGetAnAlbumsTracks200ApplicationJson withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public EndpointGetAnAlbumsTracks200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public EndpointGetAnAlbumsTracks200ApplicationJson withTotal(Integer total) {
        this.total = total;
        return this;
    }
}