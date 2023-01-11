package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientIdentificationRequestQueryRequester {
    @JsonProperty("id")
    public String id;
    public PatientIdentificationRequestQueryRequester withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public PatientIdentificationRequestQueryRequesterTypeEnum type;
    public PatientIdentificationRequestQueryRequester withType(PatientIdentificationRequestQueryRequesterTypeEnum type) {
        this.type = type;
        return this;
    }
}