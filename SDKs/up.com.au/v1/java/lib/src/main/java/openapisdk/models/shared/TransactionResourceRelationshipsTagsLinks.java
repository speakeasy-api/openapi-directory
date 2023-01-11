package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResourceRelationshipsTagsLinks {
    @JsonProperty("self")
    public String self;
    public TransactionResourceRelationshipsTagsLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}