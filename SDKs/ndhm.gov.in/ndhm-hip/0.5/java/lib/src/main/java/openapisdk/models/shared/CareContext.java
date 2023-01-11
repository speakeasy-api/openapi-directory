package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CareContext {
    @JsonProperty("referenceNumber")
    public String referenceNumber;
    public CareContext withReferenceNumber(String referenceNumber) {
        this.referenceNumber = referenceNumber;
        return this;
    }
}