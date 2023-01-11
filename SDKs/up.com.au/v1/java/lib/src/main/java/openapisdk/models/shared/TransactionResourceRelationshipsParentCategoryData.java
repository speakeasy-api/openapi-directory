package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResourceRelationshipsParentCategoryData {
    @JsonProperty("id")
    public String id;
    public TransactionResourceRelationshipsParentCategoryData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransactionResourceRelationshipsParentCategoryData withType(String type) {
        this.type = type;
        return this;
    }
}