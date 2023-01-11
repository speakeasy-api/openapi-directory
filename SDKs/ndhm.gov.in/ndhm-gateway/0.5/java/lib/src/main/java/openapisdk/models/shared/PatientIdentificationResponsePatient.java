package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientIdentificationResponsePatient {
    @JsonProperty("id")
    public String id;
    public PatientIdentificationResponsePatient withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PatientIdentificationResponsePatient withName(String name) {
        this.name = name;
        return this;
    }
}