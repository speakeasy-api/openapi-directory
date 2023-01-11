package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateChains
 * Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.
**/
public class CertificateChains {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caviumCerts")
    public String[] caviumCerts;
    public CertificateChains withCaviumCerts(String[] caviumCerts) {
        this.caviumCerts = caviumCerts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleCardCerts")
    public String[] googleCardCerts;
    public CertificateChains withGoogleCardCerts(String[] googleCardCerts) {
        this.googleCardCerts = googleCardCerts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googlePartitionCerts")
    public String[] googlePartitionCerts;
    public CertificateChains withGooglePartitionCerts(String[] googlePartitionCerts) {
        this.googlePartitionCerts = googlePartitionCerts;
        return this;
    }
}