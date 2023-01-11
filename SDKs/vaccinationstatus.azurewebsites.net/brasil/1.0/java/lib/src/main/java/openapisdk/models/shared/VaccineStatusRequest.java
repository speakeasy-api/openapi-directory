package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VaccineStatusRequest {
    @JsonProperty("patientId")
    public String patientId;
    public VaccineStatusRequest withPatientId(String patientId) {
        this.patientId = patientId;
        return this;
    }
}