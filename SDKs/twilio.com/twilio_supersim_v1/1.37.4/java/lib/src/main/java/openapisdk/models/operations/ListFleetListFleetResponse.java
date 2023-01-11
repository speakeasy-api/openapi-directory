package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFleetListFleetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleets")
    public openapisdk.models.shared.SupersimV1Fleet[] fleets;
    public ListFleetListFleetResponse withFleets(openapisdk.models.shared.SupersimV1Fleet[] fleets) {
        this.fleets = fleets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFleetListFleetResponseMeta meta;
    public ListFleetListFleetResponse withMeta(ListFleetListFleetResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}