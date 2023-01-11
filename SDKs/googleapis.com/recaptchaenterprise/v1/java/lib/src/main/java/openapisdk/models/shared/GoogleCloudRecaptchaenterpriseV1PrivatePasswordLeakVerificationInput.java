package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput
 * Private password leak verification info.
**/
public class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptedUserCredentialsHash")
    public String encryptedUserCredentialsHash;
    public GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput withEncryptedUserCredentialsHash(String encryptedUserCredentialsHash) {
        this.encryptedUserCredentialsHash = encryptedUserCredentialsHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookupHashPrefix")
    public String lookupHashPrefix;
    public GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput withLookupHashPrefix(String lookupHashPrefix) {
        this.lookupHashPrefix = lookupHashPrefix;
        return this;
    }
}