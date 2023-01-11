package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointGetListUsersPlaylists200ApplicationJson

 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
public class EndpointGetListUsersPlaylists200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public EndpointGetListUsersPlaylists200ApplicationJson withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.SimplifiedPlaylistObject[] items;
    public EndpointGetListUsersPlaylists200ApplicationJson withItems(openapisdk.models.shared.SimplifiedPlaylistObject[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public EndpointGetListUsersPlaylists200ApplicationJson withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public EndpointGetListUsersPlaylists200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public EndpointGetListUsersPlaylists200ApplicationJson withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public EndpointGetListUsersPlaylists200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public EndpointGetListUsersPlaylists200ApplicationJson withTotal(Integer total) {
        this.total = total;
        return this;
    }
}