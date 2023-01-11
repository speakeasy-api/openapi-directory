package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2WithdrawMfaResponse
 * Withdraws MultiFactorAuth response.
**/
public class GoogleCloudIdentitytoolkitV2WithdrawMfaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public GoogleCloudIdentitytoolkitV2WithdrawMfaResponse withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public GoogleCloudIdentitytoolkitV2WithdrawMfaResponse withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}