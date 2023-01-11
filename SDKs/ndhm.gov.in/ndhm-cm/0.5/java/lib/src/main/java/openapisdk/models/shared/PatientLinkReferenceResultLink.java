package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientLinkReferenceResultLink {
    @JsonProperty("authenticationType")
    public PatientLinkReferenceResultLinkAuthenticationTypeEnum authenticationType;
    public PatientLinkReferenceResultLink withAuthenticationType(PatientLinkReferenceResultLinkAuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public PatientLinkReferenceResultLink withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("referenceNumber")
    public String referenceNumber;
    public PatientLinkReferenceResultLink withReferenceNumber(String referenceNumber) {
        this.referenceNumber = referenceNumber;
        return this;
    }
}