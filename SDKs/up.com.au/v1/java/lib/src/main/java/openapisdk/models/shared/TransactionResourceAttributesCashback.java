package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransactionResourceAttributesCashback
 * Provides information about an instant reimbursement in the form of
 * cashback.
 * 
**/
public class TransactionResourceAttributesCashback {
    @JsonProperty("amount")
    public MoneyObject amount;
    public TransactionResourceAttributesCashback withAmount(MoneyObject amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public TransactionResourceAttributesCashback withDescription(String description) {
        this.description = description;
        return this;
    }
}