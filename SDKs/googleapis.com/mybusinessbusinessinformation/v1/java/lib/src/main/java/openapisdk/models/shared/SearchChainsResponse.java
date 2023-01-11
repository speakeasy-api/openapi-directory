package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchChainsResponse
 * Response message for Locations.SearchChains.
**/
public class SearchChainsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chains")
    public Chain[] chains;
    public SearchChainsResponse withChains(Chain[] chains) {
        this.chains = chains;
        return this;
    }
}