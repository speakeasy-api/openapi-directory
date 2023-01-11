package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateInfo
 * Describes an X509 certificate.
**/
public class CertificateInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256Fingerprint")
    public String sha256Fingerprint;
    public CertificateInfo withSha256Fingerprint(String sha256Fingerprint) {
        this.sha256Fingerprint = sha256Fingerprint;
        return this;
    }
}