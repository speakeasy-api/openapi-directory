package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DistributionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public DistributionsResponseMeta meta;
    public DistributionsResponse withMeta(DistributionsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public DistributionsResponseResult result;
    public DistributionsResponse withResult(DistributionsResponseResult result) {
        this.result = result;
        return this;
    }
}