package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCallsResponseLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public GetCallsResponseLinksSelf self;
    public GetCallsResponseLinks withSelf(GetCallsResponseLinksSelf self) {
        this.self = self;
        return this;
    }
}