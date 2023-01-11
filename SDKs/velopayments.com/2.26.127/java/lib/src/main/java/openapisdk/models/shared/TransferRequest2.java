package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransferRequest2 {
    @JsonProperty("amount")
    public Long amount;
    public TransferRequest2 withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public TransferRequest2 withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("toSourceAccountId")
    public String toSourceAccountId;
    public TransferRequest2 withToSourceAccountId(String toSourceAccountId) {
        this.toSourceAccountId = toSourceAccountId;
        return this;
    }
}