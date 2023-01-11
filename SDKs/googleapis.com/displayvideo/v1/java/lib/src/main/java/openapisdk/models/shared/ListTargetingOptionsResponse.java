package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTargetingOptionsResponse
 * Response message for ListTargetingOptions.
**/
public class ListTargetingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTargetingOptionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptions")
    public TargetingOption[] targetingOptions;
    public ListTargetingOptionsResponse withTargetingOptions(TargetingOption[] targetingOptions) {
        this.targetingOptions = targetingOptions;
        return this;
    }
}