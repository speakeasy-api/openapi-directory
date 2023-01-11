package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDomainsResponse
 * Response message for ListDomains.
**/
public class ListDomainsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public Domain[] domains;
    public ListDomainsResponse withDomains(Domain[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDomainsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}