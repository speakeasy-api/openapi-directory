package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientIdentificationRequestQueryPatient {
    @JsonProperty("id")
    public String id;
    public PatientIdentificationRequestQueryPatient withId(String id) {
        this.id = id;
        return this;
    }
}