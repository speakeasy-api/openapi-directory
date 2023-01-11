package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransferBalanceOrCreditRequest {
    @JsonProperty("amount")
    public Double amount;
    public TransferBalanceOrCreditRequest withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public TransferBalanceOrCreditRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public String reference;
    public TransferBalanceOrCreditRequest withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public TransferBalanceOrCreditRequest withTo(String to) {
        this.to = to;
        return this;
    }
}