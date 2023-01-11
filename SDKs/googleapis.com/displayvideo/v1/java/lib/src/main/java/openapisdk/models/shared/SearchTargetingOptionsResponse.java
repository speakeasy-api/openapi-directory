package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchTargetingOptionsResponse
 * Response message for SearchTargetingOptions.
**/
public class SearchTargetingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchTargetingOptionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptions")
    public TargetingOption[] targetingOptions;
    public SearchTargetingOptionsResponse withTargetingOptions(TargetingOption[] targetingOptions) {
        this.targetingOptions = targetingOptions;
        return this;
    }
}