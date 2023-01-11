package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResponsePoliciesPatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public ResponseHeader header;
    public ResponsePoliciesPatchResponse withHeader(ResponseHeader header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsePolicy")
    public ResponsePolicy responsePolicy;
    public ResponsePoliciesPatchResponse withResponsePolicy(ResponsePolicy responsePolicy) {
        this.responsePolicy = responsePolicy;
        return this;
    }
}