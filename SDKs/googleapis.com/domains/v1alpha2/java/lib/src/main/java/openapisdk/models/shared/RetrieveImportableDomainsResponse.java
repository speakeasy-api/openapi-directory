package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RetrieveImportableDomainsResponse
 * Response for the `RetrieveImportableDomains` method.
**/
public class RetrieveImportableDomainsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public Domain[] domains;
    public RetrieveImportableDomainsResponse withDomains(Domain[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public RetrieveImportableDomainsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}