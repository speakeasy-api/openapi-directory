package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyOperationAttestationInput
 * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
**/
public class KeyOperationAttestationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certChains")
    public CertificateChains certChains;
    public KeyOperationAttestationInput withCertChains(CertificateChains certChains) {
        this.certChains = certChains;
        return this;
    }
}