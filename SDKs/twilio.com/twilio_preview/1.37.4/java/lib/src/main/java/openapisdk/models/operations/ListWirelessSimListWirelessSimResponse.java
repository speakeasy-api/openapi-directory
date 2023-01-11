package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWirelessSimListWirelessSimResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListWirelessSimListWirelessSimResponseMeta meta;
    public ListWirelessSimListWirelessSimResponse withMeta(ListWirelessSimListWirelessSimResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sims")
    public openapisdk.models.shared.PreviewWirelessSim[] sims;
    public ListWirelessSimListWirelessSimResponse withSims(openapisdk.models.shared.PreviewWirelessSim[] sims) {
        this.sims = sims;
        return this;
    }
}