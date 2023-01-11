package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientCareContextLink {
    @JsonProperty("accessToken")
    public String accessToken;
    public PatientCareContextLink withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("patient")
    public PatientCareContextLinkPatient patient;
    public PatientCareContextLink withPatient(PatientCareContextLinkPatient patient) {
        this.patient = patient;
        return this;
    }
}