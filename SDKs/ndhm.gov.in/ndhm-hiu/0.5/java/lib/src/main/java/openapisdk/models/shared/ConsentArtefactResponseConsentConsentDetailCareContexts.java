package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsentArtefactResponseConsentConsentDetailCareContexts {
    @JsonProperty("careContextReference")
    public String careContextReference;
    public ConsentArtefactResponseConsentConsentDetailCareContexts withCareContextReference(String careContextReference) {
        this.careContextReference = careContextReference;
        return this;
    }
    @JsonProperty("patientReference")
    public String patientReference;
    public ConsentArtefactResponseConsentConsentDetailCareContexts withPatientReference(String patientReference) {
        this.patientReference = patientReference;
        return this;
    }
}