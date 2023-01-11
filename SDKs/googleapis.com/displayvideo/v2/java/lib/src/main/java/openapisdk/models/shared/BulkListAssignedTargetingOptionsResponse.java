package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BulkListAssignedTargetingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemAssignedTargetingOptions")
    public LineItemAssignedTargetingOption[] lineItemAssignedTargetingOptions;
    public BulkListAssignedTargetingOptionsResponse withLineItemAssignedTargetingOptions(LineItemAssignedTargetingOption[] lineItemAssignedTargetingOptions) {
        this.lineItemAssignedTargetingOptions = lineItemAssignedTargetingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public BulkListAssignedTargetingOptionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}