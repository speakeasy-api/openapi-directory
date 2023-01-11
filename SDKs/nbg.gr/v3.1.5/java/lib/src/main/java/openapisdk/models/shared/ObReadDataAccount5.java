package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObReadDataAccount5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Account")
    public ObAccount6[] account;
    public ObReadDataAccount5 withAccount(ObAccount6[] account) {
        this.account = account;
        return this;
    }
}