package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPlaylists200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public GetPlaylists200ApplicationJsonLinks links;
    public GetPlaylists200ApplicationJson withLinks(GetPlaylists200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_meta")
    public openapisdk.models.shared.Pagination meta;
    public GetPlaylists200ApplicationJson withMeta(openapisdk.models.shared.Pagination meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.Playlist[] items;
    public GetPlaylists200ApplicationJson withItems(openapisdk.models.shared.Playlist[] items) {
        this.items = items;
        return this;
    }
}