package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiasettingsGetAccessibleGmbAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public LiasettingsGetAccessibleGmbAccountsResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmbAccounts")
    public GmbAccountsGmbAccount[] gmbAccounts;
    public LiasettingsGetAccessibleGmbAccountsResponse withGmbAccounts(GmbAccountsGmbAccount[] gmbAccounts) {
        this.gmbAccounts = gmbAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LiasettingsGetAccessibleGmbAccountsResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}