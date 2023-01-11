package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientAuthInitResponseAuth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public AuthMeta meta;
    public PatientAuthInitResponseAuth withMeta(AuthMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("mode")
    public AuthenticationModeEnum mode;
    public PatientAuthInitResponseAuth withMode(AuthenticationModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonProperty("transactionId")
    public String transactionId;
    public PatientAuthInitResponseAuth withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}