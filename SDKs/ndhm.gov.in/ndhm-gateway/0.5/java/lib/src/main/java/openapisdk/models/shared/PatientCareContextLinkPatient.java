package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientCareContextLinkPatient {
    @JsonProperty("careContexts")
    public CareContextRepresentation[] careContexts;
    public PatientCareContextLinkPatient withCareContexts(CareContextRepresentation[] careContexts) {
        this.careContexts = careContexts;
        return this;
    }
    @JsonProperty("display")
    public String display;
    public PatientCareContextLinkPatient withDisplay(String display) {
        this.display = display;
        return this;
    }
    @JsonProperty("referenceNumber")
    public String referenceNumber;
    public PatientCareContextLinkPatient withReferenceNumber(String referenceNumber) {
        this.referenceNumber = referenceNumber;
        return this;
    }
}