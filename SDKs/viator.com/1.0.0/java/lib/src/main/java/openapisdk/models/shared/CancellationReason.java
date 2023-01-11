package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CancellationReason {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationReasonCode")
    public String cancellationReasonCode;
    public CancellationReason withCancellationReasonCode(String cancellationReasonCode) {
        this.cancellationReasonCode = cancellationReasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationReasonText")
    public String cancellationReasonText;
    public CancellationReason withCancellationReasonText(String cancellationReasonText) {
        this.cancellationReasonText = cancellationReasonText;
        return this;
    }
}