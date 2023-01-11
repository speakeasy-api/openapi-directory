package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveDistributionLinksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public RetrieveDistributionLinksResponseMeta meta;
    public RetrieveDistributionLinksResponse withMeta(RetrieveDistributionLinksResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public RetrieveDistributionLinksResponseResult result;
    public RetrieveDistributionLinksResponse withResult(RetrieveDistributionLinksResponseResult result) {
        this.result = result;
        return this;
    }
}