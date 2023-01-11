package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HipConsentNotificationNotificationConsentDetailCareContexts {
    @JsonProperty("careContextReference")
    public String careContextReference;
    public HipConsentNotificationNotificationConsentDetailCareContexts withCareContextReference(String careContextReference) {
        this.careContextReference = careContextReference;
        return this;
    }
    @JsonProperty("patientReference")
    public String patientReference;
    public HipConsentNotificationNotificationConsentDetailCareContexts withPatientReference(String patientReference) {
        this.patientReference = patientReference;
        return this;
    }
}