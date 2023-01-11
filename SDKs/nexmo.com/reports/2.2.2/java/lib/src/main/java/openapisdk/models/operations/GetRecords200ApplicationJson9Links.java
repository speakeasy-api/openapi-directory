package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecords200ApplicationJson9Links {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public GetRecords200ApplicationJson9LinksSelf self;
    public GetRecords200ApplicationJson9Links withSelf(GetRecords200ApplicationJson9LinksSelf self) {
        this.self = self;
        return this;
    }
}