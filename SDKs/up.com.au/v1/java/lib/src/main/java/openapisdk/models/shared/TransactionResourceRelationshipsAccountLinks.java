package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResourceRelationshipsAccountLinks {
    @JsonProperty("related")
    public String related;
    public TransactionResourceRelationshipsAccountLinks withRelated(String related) {
        this.related = related;
        return this;
    }
}