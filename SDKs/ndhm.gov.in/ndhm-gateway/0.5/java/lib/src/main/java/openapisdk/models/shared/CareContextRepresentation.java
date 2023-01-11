package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CareContextRepresentation {
    @JsonProperty("display")
    public String display;
    public CareContextRepresentation withDisplay(String display) {
        this.display = display;
        return this;
    }
    @JsonProperty("referenceNumber")
    public String referenceNumber;
    public CareContextRepresentation withReferenceNumber(String referenceNumber) {
        this.referenceNumber = referenceNumber;
        return this;
    }
}