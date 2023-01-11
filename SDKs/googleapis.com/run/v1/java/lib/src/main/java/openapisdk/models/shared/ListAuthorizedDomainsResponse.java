package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAuthorizedDomainsResponse
 * A list of Authorized Domains.
**/
public class ListAuthorizedDomainsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public AuthorizedDomain[] domains;
    public ListAuthorizedDomainsResponse withDomains(AuthorizedDomain[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAuthorizedDomainsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}