package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientIdentificationRequestQueryPatient {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PatientIdentificationRequestQueryPatient withId(String id) {
        this.id = id;
        return this;
    }
}