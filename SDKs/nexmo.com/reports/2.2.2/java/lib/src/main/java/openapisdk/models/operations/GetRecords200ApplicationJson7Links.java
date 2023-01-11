package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecords200ApplicationJson7Links {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public GetRecords200ApplicationJson7LinksSelf self;
    public GetRecords200ApplicationJson7Links withSelf(GetRecords200ApplicationJson7LinksSelf self) {
        this.self = self;
        return this;
    }
}