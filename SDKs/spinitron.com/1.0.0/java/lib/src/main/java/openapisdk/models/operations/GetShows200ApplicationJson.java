package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetShows200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public GetShows200ApplicationJsonLinks links;
    public GetShows200ApplicationJson withLinks(GetShows200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_meta")
    public openapisdk.models.shared.Pagination meta;
    public GetShows200ApplicationJson withMeta(openapisdk.models.shared.Pagination meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.Show[] items;
    public GetShows200ApplicationJson withItems(openapisdk.models.shared.Show[] items) {
        this.items = items;
        return this;
    }
}