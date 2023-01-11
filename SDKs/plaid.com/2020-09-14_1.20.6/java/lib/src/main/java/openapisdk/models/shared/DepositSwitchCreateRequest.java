package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DepositSwitchCreateRequest
 * DepositSwitchCreateRequest defines the request schema for `/deposit_switch/create`
**/
public class DepositSwitchCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public DepositSwitchCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_code")
    public DepositSwitchCreateRequestCountryCodeEnum countryCode;
    public DepositSwitchCreateRequest withCountryCode(DepositSwitchCreateRequestCountryCodeEnum countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public DepositSwitchCreateRequestOptions options;
    public DepositSwitchCreateRequest withOptions(DepositSwitchCreateRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public DepositSwitchCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("target_access_token")
    public String targetAccessToken;
    public DepositSwitchCreateRequest withTargetAccessToken(String targetAccessToken) {
        this.targetAccessToken = targetAccessToken;
        return this;
    }
    @JsonProperty("target_account_id")
    public String targetAccountId;
    public DepositSwitchCreateRequest withTargetAccountId(String targetAccountId) {
        this.targetAccountId = targetAccountId;
        return this;
    }
}