package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceAccountKey
 * Represents a service account key. A service account has two sets of key-pairs: user-managed, and system-managed. User-managed key-pairs can be created and deleted by users. Users are responsible for rotating these keys periodically to ensure security of their service accounts. Users retain the private key of these key-pairs, and Google retains ONLY the public key. System-managed keys are automatically rotated by Google, and are used for signing for a maximum of two weeks. The rotation process is probabilistic, and usage of the new key will gradually ramp up and down over the key's lifetime. If you cache the public key set for a service account, we recommend that you update the cache every 15 minutes. User-managed keys can be added and removed at any time, so it is important to update the cache frequently. For Google-managed keys, Google will publish a key at least 6 hours before it is first used for signing and will keep publishing it for at least 6 hours after it was last used for signing. Public keys for all service accounts are also published at the OAuth2 Service Account API.
**/
public class ServiceAccountKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public ServiceAccountKey withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyAlgorithm")
    public ServiceAccountKeyKeyAlgorithmEnum keyAlgorithm;
    public ServiceAccountKey withKeyAlgorithm(ServiceAccountKeyKeyAlgorithmEnum keyAlgorithm) {
        this.keyAlgorithm = keyAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyOrigin")
    public ServiceAccountKeyKeyOriginEnum keyOrigin;
    public ServiceAccountKey withKeyOrigin(ServiceAccountKeyKeyOriginEnum keyOrigin) {
        this.keyOrigin = keyOrigin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyType")
    public ServiceAccountKeyKeyTypeEnum keyType;
    public ServiceAccountKey withKeyType(ServiceAccountKeyKeyTypeEnum keyType) {
        this.keyType = keyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServiceAccountKey withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKeyData")
    public String privateKeyData;
    public ServiceAccountKey withPrivateKeyData(String privateKeyData) {
        this.privateKeyData = privateKeyData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKeyType")
    public ServiceAccountKeyPrivateKeyTypeEnum privateKeyType;
    public ServiceAccountKey withPrivateKeyType(ServiceAccountKeyPrivateKeyTypeEnum privateKeyType) {
        this.privateKeyType = privateKeyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeyData")
    public String publicKeyData;
    public ServiceAccountKey withPublicKeyData(String publicKeyData) {
        this.publicKeyData = publicKeyData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validAfterTime")
    public String validAfterTime;
    public ServiceAccountKey withValidAfterTime(String validAfterTime) {
        this.validAfterTime = validAfterTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validBeforeTime")
    public String validBeforeTime;
    public ServiceAccountKey withValidBeforeTime(String validBeforeTime) {
        this.validBeforeTime = validBeforeTime;
        return this;
    }
}