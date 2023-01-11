package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientAuthModeQueryRequestQueryRequester {
    @JsonProperty("id")
    public String id;
    public PatientAuthModeQueryRequestQueryRequester withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public PatientAuthModeQueryRequestQueryRequesterTypeEnum type;
    public PatientAuthModeQueryRequestQueryRequester withType(PatientAuthModeQueryRequestQueryRequesterTypeEnum type) {
        this.type = type;
        return this;
    }
}