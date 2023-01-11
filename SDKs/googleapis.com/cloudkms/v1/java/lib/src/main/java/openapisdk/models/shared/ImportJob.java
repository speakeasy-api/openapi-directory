package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportJob
 * An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
**/
public class ImportJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestation")
    public KeyOperationAttestation attestation;
    public ImportJob withAttestation(KeyOperationAttestation attestation) {
        this.attestation = attestation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ImportJob withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireEventTime")
    public String expireEventTime;
    public ImportJob withExpireEventTime(String expireEventTime) {
        this.expireEventTime = expireEventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public ImportJob withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generateTime")
    public String generateTime;
    public ImportJob withGenerateTime(String generateTime) {
        this.generateTime = generateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importMethod")
    public ImportJobImportMethodEnum importMethod;
    public ImportJob withImportMethod(ImportJobImportMethodEnum importMethod) {
        this.importMethod = importMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImportJob withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public ImportJobProtectionLevelEnum protectionLevel;
    public ImportJob withProtectionLevel(ImportJobProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public WrappingPublicKey publicKey;
    public ImportJob withPublicKey(WrappingPublicKey publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ImportJobStateEnum state;
    public ImportJob withState(ImportJobStateEnum state) {
        this.state = state;
        return this;
    }
}