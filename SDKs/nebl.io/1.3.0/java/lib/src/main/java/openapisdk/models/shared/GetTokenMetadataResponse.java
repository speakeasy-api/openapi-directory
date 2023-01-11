package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTokenMetadataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationPolicy")
    public String aggregationPolicy;
    public GetTokenMetadataResponse withAggregationPolicy(String aggregationPolicy) {
        this.aggregationPolicy = aggregationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("divisibility")
    public Double divisibility;
    public GetTokenMetadataResponse withDivisibility(Double divisibility) {
        this.divisibility = divisibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstBlock")
    public Double firstBlock;
    public GetTokenMetadataResponse withFirstBlock(Double firstBlock) {
        this.firstBlock = firstBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialIssuanceAmount")
    public Double initialIssuanceAmount;
    public GetTokenMetadataResponse withInitialIssuanceAmount(Double initialIssuanceAmount) {
        this.initialIssuanceAmount = initialIssuanceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuanceTxid")
    public String issuanceTxid;
    public GetTokenMetadataResponse withIssuanceTxid(String issuanceTxid) {
        this.issuanceTxid = issuanceTxid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueAddress")
    public String issueAddress;
    public GetTokenMetadataResponse withIssueAddress(String issueAddress) {
        this.issueAddress = issueAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockStatus")
    public Boolean lockStatus;
    public GetTokenMetadataResponse withLockStatus(Boolean lockStatus) {
        this.lockStatus = lockStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataOfIssuance")
    public GetTokenMetadataResponseMetadataOfIssuance metadataOfIssuance;
    public GetTokenMetadataResponse withMetadataOfIssuance(GetTokenMetadataResponseMetadataOfIssuance metadataOfIssuance) {
        this.metadataOfIssuance = metadataOfIssuance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataOfUtxo")
    public GetTokenMetadataResponseMetadataOfUtxo metadataOfUtxo;
    public GetTokenMetadataResponse withMetadataOfUtxo(GetTokenMetadataResponseMetadataOfUtxo metadataOfUtxo) {
        this.metadataOfUtxo = metadataOfUtxo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numOfBurns")
    public Double numOfBurns;
    public GetTokenMetadataResponse withNumOfBurns(Double numOfBurns) {
        this.numOfBurns = numOfBurns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numOfHolders")
    public Double numOfHolders;
    public GetTokenMetadataResponse withNumOfHolders(Double numOfHolders) {
        this.numOfHolders = numOfHolders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numOfIssuance")
    public Double numOfIssuance;
    public GetTokenMetadataResponse withNumOfIssuance(Double numOfIssuance) {
        this.numOfIssuance = numOfIssuance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numOfTransfers")
    public Double numOfTransfers;
    public GetTokenMetadataResponse withNumOfTransfers(Double numOfTransfers) {
        this.numOfTransfers = numOfTransfers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("someUtxo")
    public String someUtxo;
    public GetTokenMetadataResponse withSomeUtxo(String someUtxo) {
        this.someUtxo = someUtxo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenId")
    public String tokenId;
    public GetTokenMetadataResponse withTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSupply")
    public Double totalSupply;
    public GetTokenMetadataResponse withTotalSupply(Double totalSupply) {
        this.totalSupply = totalSupply;
        return this;
    }
}