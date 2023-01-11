package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransactionsGetRequestOptions
 * An optional object to be used with the request. If specified, `options` must not be `null`.
**/
public class TransactionsGetRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_ids")
    public String[] accountIds;
    public TransactionsGetRequestOptions withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public TransactionsGetRequestOptions withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_original_description")
    public Boolean includeOriginalDescription;
    public TransactionsGetRequestOptions withIncludeOriginalDescription(Boolean includeOriginalDescription) {
        this.includeOriginalDescription = includeOriginalDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public TransactionsGetRequestOptions withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}