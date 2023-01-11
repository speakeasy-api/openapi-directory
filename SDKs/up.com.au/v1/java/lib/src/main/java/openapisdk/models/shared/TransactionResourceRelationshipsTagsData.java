package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResourceRelationshipsTagsData {
    @JsonProperty("id")
    public String id;
    public TransactionResourceRelationshipsTagsData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransactionResourceRelationshipsTagsData withType(String type) {
        this.type = type;
        return this;
    }
}