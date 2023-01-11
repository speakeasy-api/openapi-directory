package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransferRequest {
    @JsonProperty("amount")
    public Long amount;
    public TransferRequest withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public TransferRequest withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("toSourceAccountId")
    public String toSourceAccountId;
    public TransferRequest withToSourceAccountId(String toSourceAccountId) {
        this.toSourceAccountId = toSourceAccountId;
        return this;
    }
}