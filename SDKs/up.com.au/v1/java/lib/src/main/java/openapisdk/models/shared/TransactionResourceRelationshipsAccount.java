package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionResourceRelationshipsAccount {
    @JsonProperty("data")
    public TransactionResourceRelationshipsAccountData data;
    public TransactionResourceRelationshipsAccount withData(TransactionResourceRelationshipsAccountData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public TransactionResourceRelationshipsAccountLinks links;
    public TransactionResourceRelationshipsAccount withLinks(TransactionResourceRelationshipsAccountLinks links) {
        this.links = links;
        return this;
    }
}