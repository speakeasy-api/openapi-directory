package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectDpdRequestBody
 * A DPD account information request body
**/
public class ConnectDpdRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectDpdRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectDpdRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ConnectDpdRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
}