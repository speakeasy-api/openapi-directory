package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BulkEditAssignedTargetingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Status[] errors;
    public BulkEditAssignedTargetingOptionsResponse withErrors(Status[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedLineItemIds")
    public String[] failedLineItemIds;
    public BulkEditAssignedTargetingOptionsResponse withFailedLineItemIds(String[] failedLineItemIds) {
        this.failedLineItemIds = failedLineItemIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedLineItemIds")
    public String[] updatedLineItemIds;
    public BulkEditAssignedTargetingOptionsResponse withUpdatedLineItemIds(String[] updatedLineItemIds) {
        this.updatedLineItemIds = updatedLineItemIds;
        return this;
    }
}