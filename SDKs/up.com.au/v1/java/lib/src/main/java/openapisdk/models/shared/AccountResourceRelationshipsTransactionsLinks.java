package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountResourceRelationshipsTransactionsLinks {
    @JsonProperty("related")
    public String related;
    public AccountResourceRelationshipsTransactionsLinks withRelated(String related) {
        this.related = related;
        return this;
    }
}