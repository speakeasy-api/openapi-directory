package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DepositSwitchAltCreateRequest
 * DepositSwitchAltCreateRequest defines the request schema for `/deposit_switch/alt/create`
**/
public class DepositSwitchAltCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public DepositSwitchAltCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_code")
    public DepositSwitchAltCreateRequestCountryCodeEnum countryCode;
    public DepositSwitchAltCreateRequest withCountryCode(DepositSwitchAltCreateRequestCountryCodeEnum countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public DepositSwitchCreateRequestOptions options;
    public DepositSwitchAltCreateRequest withOptions(DepositSwitchCreateRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public DepositSwitchAltCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("target_account")
    public java.util.Map<String, Object> targetAccount;
    public DepositSwitchAltCreateRequest withTargetAccount(java.util.Map<String, Object> targetAccount) {
        this.targetAccount = targetAccount;
        return this;
    }
    @JsonProperty("target_user")
    public java.util.Map<String, Object> targetUser;
    public DepositSwitchAltCreateRequest withTargetUser(java.util.Map<String, Object> targetUser) {
        this.targetUser = targetUser;
        return this;
    }
}