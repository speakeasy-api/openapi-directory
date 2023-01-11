package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponseMetadata
 * Output only. Additional information returned to client, such as debugging information.
**/
public class ResponseMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ResponseMetadata withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}