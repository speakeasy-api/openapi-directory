package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccounts200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public String[] accounts;
    public GetAccounts200ApplicationJson withAccounts(String[] accounts) {
        this.accounts = accounts;
        return this;
    }
}