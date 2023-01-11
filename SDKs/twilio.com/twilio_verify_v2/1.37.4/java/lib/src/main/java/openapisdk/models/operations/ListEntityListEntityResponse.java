package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEntityListEntityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entities")
    public openapisdk.models.shared.VerifyV2ServiceEntity[] entities;
    public ListEntityListEntityResponse withEntities(openapisdk.models.shared.VerifyV2ServiceEntity[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListEntityListEntityResponseMeta meta;
    public ListEntityListEntityResponse withMeta(ListEntityListEntityResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}