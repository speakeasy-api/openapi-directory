package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResourceRelationshipsAccountData {
    @JsonProperty("id")
    public String id;
    public TransactionResourceRelationshipsAccountData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransactionResourceRelationshipsAccountData withType(String type) {
        this.type = type;
        return this;
    }
}