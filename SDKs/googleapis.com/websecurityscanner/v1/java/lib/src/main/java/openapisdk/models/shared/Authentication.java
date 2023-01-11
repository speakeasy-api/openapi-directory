package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Authentication
 * Scan authentication configuration.
**/
public class Authentication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAccount")
    public CustomAccount customAccount;
    public Authentication withCustomAccount(CustomAccount customAccount) {
        this.customAccount = customAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleAccount")
    public GoogleAccount googleAccount;
    public Authentication withGoogleAccount(GoogleAccount googleAccount) {
        this.googleAccount = googleAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iapCredential")
    public IapCredential iapCredential;
    public Authentication withIapCredential(IapCredential iapCredential) {
        this.iapCredential = iapCredential;
        return this;
    }
}