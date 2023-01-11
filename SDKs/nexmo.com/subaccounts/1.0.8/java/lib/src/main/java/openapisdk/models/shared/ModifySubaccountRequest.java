package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifySubaccountRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ModifySubaccountRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspended")
    public Boolean suspended;
    public ModifySubaccountRequest withSuspended(Boolean suspended) {
        this.suspended = suspended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_primary_account_balance")
    public Boolean usePrimaryAccountBalance;
    public ModifySubaccountRequest withUsePrimaryAccountBalance(Boolean usePrimaryAccountBalance) {
        this.usePrimaryAccountBalance = usePrimaryAccountBalance;
        return this;
    }
}