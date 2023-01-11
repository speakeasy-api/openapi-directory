package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountResourceRelationships {
    @JsonProperty("transactions")
    public AccountResourceRelationshipsTransactions transactions;
    public AccountResourceRelationships withTransactions(AccountResourceRelationshipsTransactions transactions) {
        this.transactions = transactions;
        return this;
    }
}