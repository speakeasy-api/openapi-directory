package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSimListSimResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSimListSimResponseMeta meta;
    public ListSimListSimResponse withMeta(ListSimListSimResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sims")
    public openapisdk.models.shared.SupersimV1Sim[] sims;
    public ListSimListSimResponse withSims(openapisdk.models.shared.SupersimV1Sim[] sims) {
        this.sims = sims;
        return this;
    }
}