package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WaitOperationRequest
 * The request message for Operations.WaitOperation.
**/
public class WaitOperationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public WaitOperationRequest withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
}