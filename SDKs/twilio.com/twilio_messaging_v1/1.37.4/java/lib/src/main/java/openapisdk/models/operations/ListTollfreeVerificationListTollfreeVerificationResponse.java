package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTollfreeVerificationListTollfreeVerificationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTollfreeVerificationListTollfreeVerificationResponseMeta meta;
    public ListTollfreeVerificationListTollfreeVerificationResponse withMeta(ListTollfreeVerificationListTollfreeVerificationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifications")
    public openapisdk.models.shared.MessagingV1TollfreeVerification[] verifications;
    public ListTollfreeVerificationListTollfreeVerificationResponse withVerifications(openapisdk.models.shared.MessagingV1TollfreeVerification[] verifications) {
        this.verifications = verifications;
        return this;
    }
}