package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAccountsResponse
 * Successful response to get all accounts. This returns a paginated list of
 * accounts, which can be scrolled by following the `prev` and `next` links
 * if present.
 * 
**/
public class ListAccountsResponse {
    @JsonProperty("data")
    public AccountResource[] data;
    public ListAccountsResponse withData(AccountResource[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("links")
    public ListAccountsResponseLinks links;
    public ListAccountsResponse withLinks(ListAccountsResponseLinks links) {
        this.links = links;
        return this;
    }
}