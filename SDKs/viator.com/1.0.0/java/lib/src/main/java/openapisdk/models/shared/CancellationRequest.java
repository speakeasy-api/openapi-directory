package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CancellationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonCode")
    public String reasonCode;
    public CancellationRequest withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
}