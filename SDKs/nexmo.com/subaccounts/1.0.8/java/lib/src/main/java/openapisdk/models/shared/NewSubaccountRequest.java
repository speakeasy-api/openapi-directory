package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NewSubaccountRequest {
    @JsonProperty("name")
    public String name;
    public NewSubaccountRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public NewSubaccountRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_primary_account_balance")
    public Boolean usePrimaryAccountBalance;
    public NewSubaccountRequest withUsePrimaryAccountBalance(Boolean usePrimaryAccountBalance) {
        this.usePrimaryAccountBalance = usePrimaryAccountBalance;
        return this;
    }
}