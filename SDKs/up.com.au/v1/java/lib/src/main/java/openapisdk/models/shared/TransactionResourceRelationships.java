package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResourceRelationships {
    @JsonProperty("account")
    public TransactionResourceRelationshipsAccount account;
    public TransactionResourceRelationships withAccount(TransactionResourceRelationshipsAccount account) {
        this.account = account;
        return this;
    }
    @JsonProperty("category")
    public TransactionResourceRelationshipsCategory category;
    public TransactionResourceRelationships withCategory(TransactionResourceRelationshipsCategory category) {
        this.category = category;
        return this;
    }
    @JsonProperty("parentCategory")
    public TransactionResourceRelationshipsParentCategory parentCategory;
    public TransactionResourceRelationships withParentCategory(TransactionResourceRelationshipsParentCategory parentCategory) {
        this.parentCategory = parentCategory;
        return this;
    }
    @JsonProperty("tags")
    public TransactionResourceRelationshipsTags tags;
    public TransactionResourceRelationships withTags(TransactionResourceRelationshipsTags tags) {
        this.tags = tags;
        return this;
    }
}