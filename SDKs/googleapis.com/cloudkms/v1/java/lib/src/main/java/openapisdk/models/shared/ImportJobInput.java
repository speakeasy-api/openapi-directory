package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportJobInput
 * An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
**/
public class ImportJobInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestation")
    public KeyOperationAttestationInput attestation;
    public ImportJobInput withAttestation(KeyOperationAttestationInput attestation) {
        this.attestation = attestation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importMethod")
    public ImportJobImportMethodEnum importMethod;
    public ImportJobInput withImportMethod(ImportJobImportMethodEnum importMethod) {
        this.importMethod = importMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public ImportJobProtectionLevelEnum protectionLevel;
    public ImportJobInput withProtectionLevel(ImportJobProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public WrappingPublicKey publicKey;
    public ImportJobInput withPublicKey(WrappingPublicKey publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}