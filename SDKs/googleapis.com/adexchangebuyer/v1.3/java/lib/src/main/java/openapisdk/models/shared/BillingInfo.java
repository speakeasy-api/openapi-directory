package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingInfo
 * The configuration data for an Ad Exchange billing info.
**/
public class BillingInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Integer accountId;
    public BillingInfo withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public BillingInfo withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingId")
    public String[] billingId;
    public BillingInfo withBillingId(String[] billingId) {
        this.billingId = billingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BillingInfo withKind(String kind) {
        this.kind = kind;
        return this;
    }
}