package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEsimProfileListEsimProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("esim_profiles")
    public openapisdk.models.shared.SupersimV1EsimProfile[] esimProfiles;
    public ListEsimProfileListEsimProfileResponse withEsimProfiles(openapisdk.models.shared.SupersimV1EsimProfile[] esimProfiles) {
        this.esimProfiles = esimProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListEsimProfileListEsimProfileResponseMeta meta;
    public ListEsimProfileListEsimProfileResponse withMeta(ListEsimProfileListEsimProfileResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}