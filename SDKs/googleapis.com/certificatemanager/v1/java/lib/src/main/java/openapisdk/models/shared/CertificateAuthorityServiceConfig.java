package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateAuthorityServiceConfig
 * Contains information required to contact CA service.
**/
public class CertificateAuthorityServiceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caPool")
    public String caPool;
    public CertificateAuthorityServiceConfig withCaPool(String caPool) {
        this.caPool = caPool;
        return this;
    }
}