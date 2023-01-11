package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionResourceRelationshipsCategory {
    @JsonProperty("data")
    public TransactionResourceRelationshipsCategoryData data;
    public TransactionResourceRelationshipsCategory withData(TransactionResourceRelationshipsCategoryData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public TransactionResourceRelationshipsCategoryLinks links;
    public TransactionResourceRelationshipsCategory withLinks(TransactionResourceRelationshipsCategoryLinks links) {
        this.links = links;
        return this;
    }
}