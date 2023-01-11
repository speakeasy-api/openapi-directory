package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBillingAccountsResponse
 * Response message for `ListBillingAccounts`.
**/
public class ListBillingAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingAccounts")
    public BillingAccount[] billingAccounts;
    public ListBillingAccountsResponse withBillingAccounts(BillingAccount[] billingAccounts) {
        this.billingAccounts = billingAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBillingAccountsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}