package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectDhlExpressCaRequestBody
 * A DHL Express CA account information request body
**/
public class ConnectDhlExpressCaRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectDhlExpressCaRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectDhlExpressCaRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
}