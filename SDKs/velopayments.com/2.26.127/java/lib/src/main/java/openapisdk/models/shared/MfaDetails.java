package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MfaDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfa_type")
    public MfaTypeEnum mfaType;
    public MfaDetails withMfaType(MfaTypeEnum mfaType) {
        this.mfaType = mfaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verified")
    public Boolean verified;
    public MfaDetails withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
}