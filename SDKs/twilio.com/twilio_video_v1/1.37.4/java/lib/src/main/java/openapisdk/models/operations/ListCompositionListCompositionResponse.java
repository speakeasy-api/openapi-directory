package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCompositionListCompositionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compositions")
    public openapisdk.models.shared.VideoV1Composition[] compositions;
    public ListCompositionListCompositionResponse withCompositions(openapisdk.models.shared.VideoV1Composition[] compositions) {
        this.compositions = compositions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCompositionListCompositionResponseMeta meta;
    public ListCompositionListCompositionResponse withMeta(ListCompositionListCompositionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}