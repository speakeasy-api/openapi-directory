package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GmbAccounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public GmbAccounts withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmbAccounts")
    public GmbAccountsGmbAccount[] gmbAccounts;
    public GmbAccounts withGmbAccounts(GmbAccountsGmbAccount[] gmbAccounts) {
        this.gmbAccounts = gmbAccounts;
        return this;
    }
}