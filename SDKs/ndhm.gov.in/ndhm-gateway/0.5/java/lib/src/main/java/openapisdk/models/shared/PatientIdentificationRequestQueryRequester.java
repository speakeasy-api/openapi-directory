package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientIdentificationRequestQueryRequester {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PatientIdentificationRequestQueryRequester withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PatientIdentificationRequestQueryRequesterTypeEnum type;
    public PatientIdentificationRequestQueryRequester withType(PatientIdentificationRequestQueryRequesterTypeEnum type) {
        this.type = type;
        return this;
    }
}