package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecords200ApplicationJson6Links {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public GetRecords200ApplicationJson6LinksSelf self;
    public GetRecords200ApplicationJson6Links withSelf(GetRecords200ApplicationJson6LinksSelf self) {
        this.self = self;
        return this;
    }
}