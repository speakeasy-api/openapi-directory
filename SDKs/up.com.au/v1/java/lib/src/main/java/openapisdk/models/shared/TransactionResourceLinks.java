package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResourceLinks {
    @JsonProperty("self")
    public String self;
    public TransactionResourceLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}