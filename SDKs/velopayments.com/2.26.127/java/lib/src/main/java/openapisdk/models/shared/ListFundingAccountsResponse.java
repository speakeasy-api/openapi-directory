package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFundingAccountsResponse
 * List Source Accounts Response Object
**/
public class ListFundingAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public FundingAccountResponse[] content;
    public ListFundingAccountsResponse withContent(FundingAccountResponse[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public ListFundingAccountsResponse withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public ListFundingAccountsResponse withPage(Object page) {
        this.page = page;
        return this;
    }
}