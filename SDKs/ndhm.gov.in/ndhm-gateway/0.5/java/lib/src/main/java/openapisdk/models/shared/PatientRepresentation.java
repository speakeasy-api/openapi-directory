package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientRepresentation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("careContexts")
    public CareContextRepresentation[] careContexts;
    public PatientRepresentation withCareContexts(CareContextRepresentation[] careContexts) {
        this.careContexts = careContexts;
        return this;
    }
    @JsonProperty("display")
    public String display;
    public PatientRepresentation withDisplay(String display) {
        this.display = display;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchedBy")
    public IdentifierTypeEnum[] matchedBy;
    public PatientRepresentation withMatchedBy(IdentifierTypeEnum[] matchedBy) {
        this.matchedBy = matchedBy;
        return this;
    }
    @JsonProperty("referenceNumber")
    public String referenceNumber;
    public PatientRepresentation withReferenceNumber(String referenceNumber) {
        this.referenceNumber = referenceNumber;
        return this;
    }
}