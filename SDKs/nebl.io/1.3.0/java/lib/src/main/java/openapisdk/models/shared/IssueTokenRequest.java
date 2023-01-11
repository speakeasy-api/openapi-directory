package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssueTokenRequest {
    @JsonProperty("amount")
    public Double amount;
    public IssueTokenRequest withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("divisibility")
    public Double divisibility;
    public IssueTokenRequest withDivisibility(Double divisibility) {
        this.divisibility = divisibility;
        return this;
    }
    @JsonProperty("fee")
    public Double fee;
    public IssueTokenRequest withFee(Double fee) {
        this.fee = fee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flags")
    public IssueTokenRequestFlags flags;
    public IssueTokenRequest withFlags(IssueTokenRequestFlags flags) {
        this.flags = flags;
        return this;
    }
    @JsonProperty("issueAddress")
    public String issueAddress;
    public IssueTokenRequest withIssueAddress(String issueAddress) {
        this.issueAddress = issueAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public IssueTokenRequestMetadata metadata;
    public IssueTokenRequest withMetadata(IssueTokenRequestMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("reissuable")
    public Boolean reissuable;
    public IssueTokenRequest withReissuable(Boolean reissuable) {
        this.reissuable = reissuable;
        return this;
    }
    @JsonProperty("transfer")
    public IssueTokenRequestTransfer[] transfer;
    public IssueTokenRequest withTransfer(IssueTokenRequestTransfer[] transfer) {
        this.transfer = transfer;
        return this;
    }
}