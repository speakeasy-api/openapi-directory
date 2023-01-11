package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvestmentsTransactionsGetRequestOptions
 * An optional object to filter `/investments/transactions/get` results. If provided, must be non-`null`.
**/
public class InvestmentsTransactionsGetRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_ids")
    public String[] accountIds;
    public InvestmentsTransactionsGetRequestOptions withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public InvestmentsTransactionsGetRequestOptions withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public InvestmentsTransactionsGetRequestOptions withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}