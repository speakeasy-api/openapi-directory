package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactionInfoResponseVoutTokens {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationPolicy")
    public String aggregationPolicy;
    public GetTransactionInfoResponseVoutTokens withAggregationPolicy(String aggregationPolicy) {
        this.aggregationPolicy = aggregationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public GetTransactionInfoResponseVoutTokens withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("divisibility")
    public Double divisibility;
    public GetTransactionInfoResponseVoutTokens withDivisibility(Double divisibility) {
        this.divisibility = divisibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueTxid")
    public String issueTxid;
    public GetTransactionInfoResponseVoutTokens withIssueTxid(String issueTxid) {
        this.issueTxid = issueTxid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockStatus")
    public Boolean lockStatus;
    public GetTransactionInfoResponseVoutTokens withLockStatus(Boolean lockStatus) {
        this.lockStatus = lockStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenId")
    public String tokenId;
    public GetTransactionInfoResponseVoutTokens withTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }
}