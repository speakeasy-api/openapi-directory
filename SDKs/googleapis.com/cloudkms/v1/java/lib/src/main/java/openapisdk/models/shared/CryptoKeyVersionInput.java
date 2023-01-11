package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CryptoKeyVersionInput
 * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
**/
public class CryptoKeyVersionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestation")
    public KeyOperationAttestationInput attestation;
    public CryptoKeyVersionInput withAttestation(KeyOperationAttestationInput attestation) {
        this.attestation = attestation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalProtectionLevelOptions")
    public ExternalProtectionLevelOptions externalProtectionLevelOptions;
    public CryptoKeyVersionInput withExternalProtectionLevelOptions(ExternalProtectionLevelOptions externalProtectionLevelOptions) {
        this.externalProtectionLevelOptions = externalProtectionLevelOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CryptoKeyVersionStateEnum state;
    public CryptoKeyVersionInput withState(CryptoKeyVersionStateEnum state) {
        this.state = state;
        return this;
    }
}