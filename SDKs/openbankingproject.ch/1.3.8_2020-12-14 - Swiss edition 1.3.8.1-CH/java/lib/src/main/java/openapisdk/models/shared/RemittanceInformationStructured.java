package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemittanceInformationStructured
 * Structured remittance information.
 * 
**/
public class RemittanceInformationStructured {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCORorQRRorIPI")
    public RemittanceInformationStructuredScoRorQrRorIpiEnum scoRorQRRorIPI;
    public RemittanceInformationStructured withScoRorQrRorIpi(RemittanceInformationStructuredScoRorQrRorIpiEnum scoRorQRRorIPI) {
        this.scoRorQRRorIPI = scoRorQRRorIPI;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalRemittanceInformation")
    public String additionalRemittanceInformation;
    public RemittanceInformationStructured withAdditionalRemittanceInformation(String additionalRemittanceInformation) {
        this.additionalRemittanceInformation = additionalRemittanceInformation;
        return this;
    }
    @JsonProperty("reference")
    public String reference;
    public RemittanceInformationStructured withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceIssuer")
    public String referenceIssuer;
    public RemittanceInformationStructured withReferenceIssuer(String referenceIssuer) {
        this.referenceIssuer = referenceIssuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceType")
    public String referenceType;
    public RemittanceInformationStructured withReferenceType(String referenceType) {
        this.referenceType = referenceType;
        return this;
    }
}