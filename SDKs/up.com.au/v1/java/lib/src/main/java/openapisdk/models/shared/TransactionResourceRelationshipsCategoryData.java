package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResourceRelationshipsCategoryData {
    @JsonProperty("id")
    public String id;
    public TransactionResourceRelationshipsCategoryData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransactionResourceRelationshipsCategoryData withType(String type) {
        this.type = type;
        return this;
    }
}