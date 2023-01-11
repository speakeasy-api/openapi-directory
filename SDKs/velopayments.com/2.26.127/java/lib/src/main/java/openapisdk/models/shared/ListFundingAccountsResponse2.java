package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFundingAccountsResponse2
 * List Funding Accounts Response Object
**/
public class ListFundingAccountsResponse2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public FundingAccountResponse2[] content;
    public ListFundingAccountsResponse2 withContent(FundingAccountResponse2[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public ListFundingAccountsResponse2 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public ListFundingAccountsResponse2 withPage(Object page) {
        this.page = page;
        return this;
    }
}