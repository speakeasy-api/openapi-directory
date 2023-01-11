package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SelfMfaTypeUnregisterRequest {
    @JsonProperty("mfaType")
    public SelfMfaTypeUnregisterRequestMfaTypeEnum mfaType;
    public SelfMfaTypeUnregisterRequest withMfaType(SelfMfaTypeUnregisterRequestMfaTypeEnum mfaType) {
        this.mfaType = mfaType;
        return this;
    }
}