package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointGetRecentlyPlayed200ApplicationJson

 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
**/
public class EndpointGetRecentlyPlayed200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cursors")
    public openapisdk.models.shared.CursorObject cursors;
    public EndpointGetRecentlyPlayed200ApplicationJson withCursors(openapisdk.models.shared.CursorObject cursors) {
        this.cursors = cursors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public EndpointGetRecentlyPlayed200ApplicationJson withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.PlayHistoryObject[] items;
    public EndpointGetRecentlyPlayed200ApplicationJson withItems(openapisdk.models.shared.PlayHistoryObject[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public EndpointGetRecentlyPlayed200ApplicationJson withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public EndpointGetRecentlyPlayed200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public EndpointGetRecentlyPlayed200ApplicationJson withTotal(Integer total) {
        this.total = total;
        return this;
    }
}