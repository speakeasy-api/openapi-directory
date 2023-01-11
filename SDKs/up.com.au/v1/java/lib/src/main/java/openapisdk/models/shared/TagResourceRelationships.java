package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRelationships {
    @JsonProperty("transactions")
    public TagResourceRelationshipsTransactions transactions;
    public TagResourceRelationships withTransactions(TagResourceRelationshipsTransactions transactions) {
        this.transactions = transactions;
        return this;
    }
}