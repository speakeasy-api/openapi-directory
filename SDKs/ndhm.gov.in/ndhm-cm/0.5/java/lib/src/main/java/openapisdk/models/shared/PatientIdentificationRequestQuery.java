package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientIdentificationRequestQuery {
    @JsonProperty("patient")
    public PatientIdentificationRequestQueryPatient patient;
    public PatientIdentificationRequestQuery withPatient(PatientIdentificationRequestQueryPatient patient) {
        this.patient = patient;
        return this;
    }
    @JsonProperty("requester")
    public PatientIdentificationRequestQueryRequester requester;
    public PatientIdentificationRequestQuery withRequester(PatientIdentificationRequestQueryRequester requester) {
        this.requester = requester;
        return this;
    }
}