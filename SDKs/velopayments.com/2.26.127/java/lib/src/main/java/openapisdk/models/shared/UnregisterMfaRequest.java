package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnregisterMfaRequest {
    @JsonProperty("mfaType")
    public UnregisterMfaRequestMfaTypeEnum mfaType;
    public UnregisterMfaRequest withMfaType(UnregisterMfaRequestMfaTypeEnum mfaType) {
        this.mfaType = mfaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationCode")
    public String verificationCode;
    public UnregisterMfaRequest withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
}