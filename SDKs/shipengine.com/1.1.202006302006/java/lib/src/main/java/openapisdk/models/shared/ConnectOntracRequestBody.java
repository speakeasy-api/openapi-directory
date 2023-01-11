package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectOntracRequestBody
 * An Ontrac account information request body
**/
public class ConnectOntracRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectOntracRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectOntracRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ConnectOntracRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
}