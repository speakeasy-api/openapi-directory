package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlaylistPagingObjectPlaylists

 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
public class PlaylistPagingObjectPlaylists {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public PlaylistPagingObjectPlaylists withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public SimplifiedPlaylistObject[] items;
    public PlaylistPagingObjectPlaylists withItems(SimplifiedPlaylistObject[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public PlaylistPagingObjectPlaylists withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PlaylistPagingObjectPlaylists withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public PlaylistPagingObjectPlaylists withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public PlaylistPagingObjectPlaylists withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public PlaylistPagingObjectPlaylists withTotal(Integer total) {
        this.total = total;
        return this;
    }
}