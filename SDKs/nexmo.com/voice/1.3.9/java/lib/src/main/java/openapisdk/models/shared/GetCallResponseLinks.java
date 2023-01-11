package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCallResponseLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public GetCallResponseLinksSelf self;
    public GetCallResponseLinks withSelf(GetCallResponseLinksSelf self) {
        this.self = self;
        return this;
    }
}