package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetAmpUrlsRequest
 * AMP URL request for a batch of URLs.
**/
public class BatchGetAmpUrlsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookupStrategy")
    public BatchGetAmpUrlsRequestLookupStrategyEnum lookupStrategy;
    public BatchGetAmpUrlsRequest withLookupStrategy(BatchGetAmpUrlsRequestLookupStrategyEnum lookupStrategy) {
        this.lookupStrategy = lookupStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urls")
    public String[] urls;
    public BatchGetAmpUrlsRequest withUrls(String[] urls) {
        this.urls = urls;
        return this;
    }
}