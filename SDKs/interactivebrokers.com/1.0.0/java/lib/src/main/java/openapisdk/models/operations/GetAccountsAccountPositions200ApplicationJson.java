package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountsAccountPositions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AverageCost")
    public Double averageCost;
    public GetAccountsAccountPositions200ApplicationJson withAverageCost(Double averageCost) {
        this.averageCost = averageCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractId")
    public Double contractId;
    public GetAccountsAccountPositions200ApplicationJson withContractId(Double contractId) {
        this.contractId = contractId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Position")
    public Double position;
    public GetAccountsAccountPositions200ApplicationJson withPosition(Double position) {
        this.position = position;
        return this;
    }
}