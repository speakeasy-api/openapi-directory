package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTrunkListTrunkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTrunkListTrunkResponseMeta meta;
    public ListTrunkListTrunkResponse withMeta(ListTrunkListTrunkResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trunks")
    public openapisdk.models.shared.TrunkingV1Trunk[] trunks;
    public ListTrunkListTrunkResponse withTrunks(openapisdk.models.shared.TrunkingV1Trunk[] trunks) {
        this.trunks = trunks;
        return this;
    }
}