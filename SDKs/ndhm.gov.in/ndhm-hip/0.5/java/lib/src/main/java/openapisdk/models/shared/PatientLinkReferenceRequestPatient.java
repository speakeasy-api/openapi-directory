package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientLinkReferenceRequestPatient {
    @JsonProperty("careContexts")
    public CareContext[] careContexts;
    public PatientLinkReferenceRequestPatient withCareContexts(CareContext[] careContexts) {
        this.careContexts = careContexts;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public PatientLinkReferenceRequestPatient withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("referenceNumber")
    public String referenceNumber;
    public PatientLinkReferenceRequestPatient withReferenceNumber(String referenceNumber) {
        this.referenceNumber = referenceNumber;
        return this;
    }
}