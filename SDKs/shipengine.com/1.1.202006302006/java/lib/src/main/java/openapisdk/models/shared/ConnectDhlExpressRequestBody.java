package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectDhlExpressRequestBody
 * A DHL express account information request body
**/
public class ConnectDhlExpressRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectDhlExpressRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectDhlExpressRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
}