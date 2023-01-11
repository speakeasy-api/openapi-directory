package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAccountResponse
 * Successful response to get a single account.
 * 
**/
public class GetAccountResponse {
    @JsonProperty("data")
    public AccountResource data;
    public GetAccountResponse withData(AccountResource data) {
        this.data = data;
        return this;
    }
}