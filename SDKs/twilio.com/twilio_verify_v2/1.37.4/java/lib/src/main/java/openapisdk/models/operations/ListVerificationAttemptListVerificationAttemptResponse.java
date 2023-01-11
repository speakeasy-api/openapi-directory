package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVerificationAttemptListVerificationAttemptResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attempts")
    public openapisdk.models.shared.VerifyV2VerificationAttempt[] attempts;
    public ListVerificationAttemptListVerificationAttemptResponse withAttempts(openapisdk.models.shared.VerifyV2VerificationAttempt[] attempts) {
        this.attempts = attempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListVerificationAttemptListVerificationAttemptResponseMeta meta;
    public ListVerificationAttemptListVerificationAttemptResponse withMeta(ListVerificationAttemptListVerificationAttemptResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}