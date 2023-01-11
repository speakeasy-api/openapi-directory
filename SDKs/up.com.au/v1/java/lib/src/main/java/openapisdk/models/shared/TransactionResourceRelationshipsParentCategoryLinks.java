package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResourceRelationshipsParentCategoryLinks {
    @JsonProperty("related")
    public String related;
    public TransactionResourceRelationshipsParentCategoryLinks withRelated(String related) {
        this.related = related;
        return this;
    }
}