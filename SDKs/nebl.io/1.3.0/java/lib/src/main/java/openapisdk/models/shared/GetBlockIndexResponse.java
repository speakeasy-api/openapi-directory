package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBlockIndexResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockHash")
    public String blockHash;
    public GetBlockIndexResponse withBlockHash(String blockHash) {
        this.blockHash = blockHash;
        return this;
    }
}