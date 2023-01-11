package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectPurolatorRequestBody
 * A Purolator account information request body
**/
public class ConnectPurolatorRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectPurolatorRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("activation_key")
    public String activationKey;
    public ConnectPurolatorRequestBody withActivationKey(String activationKey) {
        this.activationKey = activationKey;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectPurolatorRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
}