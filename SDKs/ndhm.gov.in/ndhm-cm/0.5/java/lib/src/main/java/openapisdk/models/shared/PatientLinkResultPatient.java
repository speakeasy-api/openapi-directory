package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientLinkResultPatient {
    @JsonProperty("careContexts")
    public CareContextRepresentation[] careContexts;
    public PatientLinkResultPatient withCareContexts(CareContextRepresentation[] careContexts) {
        this.careContexts = careContexts;
        return this;
    }
    @JsonProperty("display")
    public String display;
    public PatientLinkResultPatient withDisplay(String display) {
        this.display = display;
        return this;
    }
    @JsonProperty("referenceNumber")
    public String referenceNumber;
    public PatientLinkResultPatient withReferenceNumber(String referenceNumber) {
        this.referenceNumber = referenceNumber;
        return this;
    }
}