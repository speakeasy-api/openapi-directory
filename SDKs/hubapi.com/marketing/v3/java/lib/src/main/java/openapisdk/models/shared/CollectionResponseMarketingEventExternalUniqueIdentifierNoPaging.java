package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging {
    @JsonProperty("results")
    public MarketingEventExternalUniqueIdentifier[] results;
    public CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging withResults(MarketingEventExternalUniqueIdentifier[] results) {
        this.results = results;
        return this;
    }
}