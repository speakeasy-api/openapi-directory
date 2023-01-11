package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPersonas200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public GetPersonas200ApplicationJsonLinks links;
    public GetPersonas200ApplicationJson withLinks(GetPersonas200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_meta")
    public openapisdk.models.shared.Pagination meta;
    public GetPersonas200ApplicationJson withMeta(openapisdk.models.shared.Pagination meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.Persona[] items;
    public GetPersonas200ApplicationJson withItems(openapisdk.models.shared.Persona[] items) {
        this.items = items;
        return this;
    }
}