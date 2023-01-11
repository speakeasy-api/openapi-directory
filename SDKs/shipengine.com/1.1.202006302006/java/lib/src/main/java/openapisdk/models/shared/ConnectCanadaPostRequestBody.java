package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectCanadaPostRequestBody
 * A Canada Post account information request body
**/
public class ConnectCanadaPostRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectCanadaPostRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("api_key")
    public String apiKey;
    public ConnectCanadaPostRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonProperty("api_secret")
    public String apiSecret;
    public ConnectCanadaPostRequestBody withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @JsonProperty("contract_id")
    public String contractId;
    public ConnectCanadaPostRequestBody withContractId(String contractId) {
        this.contractId = contractId;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectCanadaPostRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
}