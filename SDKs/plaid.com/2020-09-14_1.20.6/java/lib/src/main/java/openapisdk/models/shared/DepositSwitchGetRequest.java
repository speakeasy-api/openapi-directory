package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DepositSwitchGetRequest
 * DepositSwitchGetRequest defines the request schema for `/deposit_switch/get`
**/
public class DepositSwitchGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public DepositSwitchGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("deposit_switch_id")
    public String depositSwitchId;
    public DepositSwitchGetRequest withDepositSwitchId(String depositSwitchId) {
        this.depositSwitchId = depositSwitchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public DepositSwitchGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}