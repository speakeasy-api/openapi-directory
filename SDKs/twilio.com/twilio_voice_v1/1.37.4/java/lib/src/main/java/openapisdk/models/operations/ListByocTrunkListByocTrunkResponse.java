package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListByocTrunkListByocTrunkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byoc_trunks")
    public openapisdk.models.shared.VoiceV1ByocTrunk[] byocTrunks;
    public ListByocTrunkListByocTrunkResponse withByocTrunks(openapisdk.models.shared.VoiceV1ByocTrunk[] byocTrunks) {
        this.byocTrunks = byocTrunks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListByocTrunkListByocTrunkResponseMeta meta;
    public ListByocTrunkListByocTrunkResponse withMeta(ListByocTrunkListByocTrunkResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}