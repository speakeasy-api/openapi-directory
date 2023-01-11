package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FollowingArtistsObjectArtists

 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
**/
public class FollowingArtistsObjectArtists {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cursors")
    public CursorObject cursors;
    public FollowingArtistsObjectArtists withCursors(CursorObject cursors) {
        this.cursors = cursors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public FollowingArtistsObjectArtists withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ArtistObject[] items;
    public FollowingArtistsObjectArtists withItems(ArtistObject[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public FollowingArtistsObjectArtists withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public FollowingArtistsObjectArtists withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public FollowingArtistsObjectArtists withTotal(Integer total) {
        this.total = total;
        return this;
    }
}