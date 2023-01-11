package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSpins200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public GetSpins200ApplicationJsonLinks links;
    public GetSpins200ApplicationJson withLinks(GetSpins200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_meta")
    public openapisdk.models.shared.Pagination meta;
    public GetSpins200ApplicationJson withMeta(openapisdk.models.shared.Pagination meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.Spin[] items;
    public GetSpins200ApplicationJson withItems(openapisdk.models.shared.Spin[] items) {
        this.items = items;
        return this;
    }
}