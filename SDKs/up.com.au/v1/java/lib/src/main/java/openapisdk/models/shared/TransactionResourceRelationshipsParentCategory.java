package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionResourceRelationshipsParentCategory {
    @JsonProperty("data")
    public TransactionResourceRelationshipsParentCategoryData data;
    public TransactionResourceRelationshipsParentCategory withData(TransactionResourceRelationshipsParentCategoryData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public TransactionResourceRelationshipsParentCategoryLinks links;
    public TransactionResourceRelationshipsParentCategory withLinks(TransactionResourceRelationshipsParentCategoryLinks links) {
        this.links = links;
        return this;
    }
}