package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CareContextDefinition {
    @JsonProperty("careContextReference")
    public String careContextReference;
    public CareContextDefinition withCareContextReference(String careContextReference) {
        this.careContextReference = careContextReference;
        return this;
    }
    @JsonProperty("patientReference")
    public String patientReference;
    public CareContextDefinition withPatientReference(String patientReference) {
        this.patientReference = patientReference;
        return this;
    }
}