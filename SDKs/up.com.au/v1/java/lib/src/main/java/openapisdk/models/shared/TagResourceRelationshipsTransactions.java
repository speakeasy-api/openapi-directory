package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagResourceRelationshipsTransactions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public TagResourceRelationshipsTransactionsLinks links;
    public TagResourceRelationshipsTransactions withLinks(TagResourceRelationshipsTransactionsLinks links) {
        this.links = links;
        return this;
    }
}