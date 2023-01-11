package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountResourceLinks {
    @JsonProperty("self")
    public String self;
    public AccountResourceLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}