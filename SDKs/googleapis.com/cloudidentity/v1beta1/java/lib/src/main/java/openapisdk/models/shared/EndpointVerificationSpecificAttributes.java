package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointVerificationSpecificAttributes
 * Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview
**/
public class EndpointVerificationSpecificAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAttributes")
    public CertificateAttributes[] certificateAttributes;
    public EndpointVerificationSpecificAttributes withCertificateAttributes(CertificateAttributes[] certificateAttributes) {
        this.certificateAttributes = certificateAttributes;
        return this;
    }
}