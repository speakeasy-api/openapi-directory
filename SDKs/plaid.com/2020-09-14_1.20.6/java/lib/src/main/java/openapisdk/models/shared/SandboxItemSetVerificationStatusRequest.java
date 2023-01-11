package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxItemSetVerificationStatusRequest
 * SandboxItemSetVerificationStatusRequest defines the request schema for `/sandbox/item/set_verification_status`
**/
public class SandboxItemSetVerificationStatusRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public SandboxItemSetVerificationStatusRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("account_id")
    public String accountId;
    public SandboxItemSetVerificationStatusRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public SandboxItemSetVerificationStatusRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SandboxItemSetVerificationStatusRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("verification_status")
    public SandboxItemSetVerificationStatusRequestVerificationStatusEnum verificationStatus;
    public SandboxItemSetVerificationStatusRequest withVerificationStatus(SandboxItemSetVerificationStatusRequestVerificationStatusEnum verificationStatus) {
        this.verificationStatus = verificationStatus;
        return this;
    }
}