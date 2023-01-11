package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecords200ApplicationJson1Links {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public GetRecords200ApplicationJson1LinksSelf self;
    public GetRecords200ApplicationJson1Links withSelf(GetRecords200ApplicationJson1LinksSelf self) {
        this.self = self;
        return this;
    }
}