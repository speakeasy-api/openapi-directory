package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateFingerprint
 * A group of fingerprints for the x509 certificate.
**/
public class CertificateFingerprint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256Hash")
    public String sha256Hash;
    public CertificateFingerprint withSha256Hash(String sha256Hash) {
        this.sha256Hash = sha256Hash;
        return this;
    }
}