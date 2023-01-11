package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DepositSwitchTokenCreateRequest
 * DepositSwitchTokenCreateRequest defines the request schema for `/deposit_switch/token/create`
**/
public class DepositSwitchTokenCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public DepositSwitchTokenCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("deposit_switch_id")
    public String depositSwitchId;
    public DepositSwitchTokenCreateRequest withDepositSwitchId(String depositSwitchId) {
        this.depositSwitchId = depositSwitchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public DepositSwitchTokenCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}