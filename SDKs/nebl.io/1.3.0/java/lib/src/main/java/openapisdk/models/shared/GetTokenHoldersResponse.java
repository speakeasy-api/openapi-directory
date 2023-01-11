package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTokenHoldersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationPolicy")
    public String aggregationPolicy;
    public GetTokenHoldersResponse withAggregationPolicy(String aggregationPolicy) {
        this.aggregationPolicy = aggregationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("divibility")
    public Double divibility;
    public GetTokenHoldersResponse withDivibility(Double divibility) {
        this.divibility = divibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holders")
    public GetTokenHoldersResponseHolders[] holders;
    public GetTokenHoldersResponse withHolders(GetTokenHoldersResponseHolders[] holders) {
        this.holders = holders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockStatus")
    public Boolean lockStatus;
    public GetTokenHoldersResponse withLockStatus(Boolean lockStatus) {
        this.lockStatus = lockStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("someUtxo")
    public String someUtxo;
    public GetTokenHoldersResponse withSomeUtxo(String someUtxo) {
        this.someUtxo = someUtxo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenId")
    public String tokenId;
    public GetTokenHoldersResponse withTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }
}