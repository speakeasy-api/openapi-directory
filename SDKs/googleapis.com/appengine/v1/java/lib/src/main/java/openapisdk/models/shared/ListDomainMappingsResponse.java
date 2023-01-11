package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDomainMappingsResponse
 * Response message for DomainMappings.ListDomainMappings.
**/
public class ListDomainMappingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainMappings")
    public DomainMapping[] domainMappings;
    public ListDomainMappingsResponse withDomainMappings(DomainMapping[] domainMappings) {
        this.domainMappings = domainMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDomainMappingsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}