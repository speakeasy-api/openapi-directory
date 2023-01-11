package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResourceRelationshipsCategoryLinks {
    @JsonProperty("related")
    public String related;
    public TransactionResourceRelationshipsCategoryLinks withRelated(String related) {
        this.related = related;
        return this;
    }
}