package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification
 * Private password leak verification info.
**/
public class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptedLeakMatchPrefixes")
    public String[] encryptedLeakMatchPrefixes;
    public GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification withEncryptedLeakMatchPrefixes(String[] encryptedLeakMatchPrefixes) {
        this.encryptedLeakMatchPrefixes = encryptedLeakMatchPrefixes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptedUserCredentialsHash")
    public String encryptedUserCredentialsHash;
    public GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification withEncryptedUserCredentialsHash(String encryptedUserCredentialsHash) {
        this.encryptedUserCredentialsHash = encryptedUserCredentialsHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookupHashPrefix")
    public String lookupHashPrefix;
    public GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification withLookupHashPrefix(String lookupHashPrefix) {
        this.lookupHashPrefix = lookupHashPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reencryptedUserCredentialsHash")
    public String reencryptedUserCredentialsHash;
    public GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification withReencryptedUserCredentialsHash(String reencryptedUserCredentialsHash) {
        this.reencryptedUserCredentialsHash = reencryptedUserCredentialsHash;
        return this;
    }
}