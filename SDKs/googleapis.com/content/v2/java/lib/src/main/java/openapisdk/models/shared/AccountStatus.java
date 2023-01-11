package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountStatus
 * The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
**/
public class AccountStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public AccountStatus withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountLevelIssues")
    public AccountStatusAccountLevelIssue[] accountLevelIssues;
    public AccountStatus withAccountLevelIssues(AccountStatusAccountLevelIssue[] accountLevelIssues) {
        this.accountLevelIssues = accountLevelIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataQualityIssues")
    public AccountStatusDataQualityIssue[] dataQualityIssues;
    public AccountStatus withDataQualityIssues(AccountStatusDataQualityIssue[] dataQualityIssues) {
        this.dataQualityIssues = dataQualityIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountStatus withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public AccountStatusProducts[] products;
    public AccountStatus withProducts(AccountStatusProducts[] products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websiteClaimed")
    public Boolean websiteClaimed;
    public AccountStatus withWebsiteClaimed(Boolean websiteClaimed) {
        this.websiteClaimed = websiteClaimed;
        return this;
    }
}