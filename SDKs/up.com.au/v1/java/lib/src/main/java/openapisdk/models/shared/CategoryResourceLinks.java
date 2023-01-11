package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryResourceLinks {
    @JsonProperty("self")
    public String self;
    public CategoryResourceLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}