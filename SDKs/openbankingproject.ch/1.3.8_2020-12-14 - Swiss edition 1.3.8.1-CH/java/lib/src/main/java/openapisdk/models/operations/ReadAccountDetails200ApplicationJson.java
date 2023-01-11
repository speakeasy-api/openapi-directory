package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReadAccountDetails200ApplicationJson {
    @JsonProperty("account")
    public openapisdk.models.shared.AccountDetails account;
    public ReadAccountDetails200ApplicationJson withAccount(openapisdk.models.shared.AccountDetails account) {
        this.account = account;
        return this;
    }
}