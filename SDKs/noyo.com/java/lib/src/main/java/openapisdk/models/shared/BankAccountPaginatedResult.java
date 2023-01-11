package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BankAccountPaginatedResult {
    @JsonProperty("meta")
    public BankAccountPaginatedResultMeta meta;
    public BankAccountPaginatedResult withMeta(BankAccountPaginatedResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public BankAccountResult[] response;
    public BankAccountPaginatedResult withResponse(BankAccountResult[] response) {
        this.response = response;
        return this;
    }
}