package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRelationshipsTransactionsLinks {
    @JsonProperty("related")
    public String related;
    public TagResourceRelationshipsTransactionsLinks withRelated(String related) {
        this.related = related;
        return this;
    }
}