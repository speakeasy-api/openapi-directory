package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SslSettings
 * SSL configuration for a DomainMapping resource.
**/
public class SslSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateId")
    public String certificateId;
    public SslSettings withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isManagedCertificate")
    public Boolean isManagedCertificate;
    public SslSettings withIsManagedCertificate(Boolean isManagedCertificate) {
        this.isManagedCertificate = isManagedCertificate;
        return this;
    }
}