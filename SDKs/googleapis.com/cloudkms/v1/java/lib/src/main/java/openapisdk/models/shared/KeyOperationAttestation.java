package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyOperationAttestation
 * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
**/
public class KeyOperationAttestation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certChains")
    public CertificateChains certChains;
    public KeyOperationAttestation withCertChains(CertificateChains certChains) {
        this.certChains = certChains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public KeyOperationAttestation withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public KeyOperationAttestationFormatEnum format;
    public KeyOperationAttestation withFormat(KeyOperationAttestationFormatEnum format) {
        this.format = format;
        return this;
    }
}