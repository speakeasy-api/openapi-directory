package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkUpdateLineItemsResponse
 * Response message for LineItemService.BulkUpdateLineItems.
**/
public class BulkUpdateLineItemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Status[] errors;
    public BulkUpdateLineItemsResponse withErrors(Status[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedLineItemIds")
    public String[] failedLineItemIds;
    public BulkUpdateLineItemsResponse withFailedLineItemIds(String[] failedLineItemIds) {
        this.failedLineItemIds = failedLineItemIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippedLineItemIds")
    public String[] skippedLineItemIds;
    public BulkUpdateLineItemsResponse withSkippedLineItemIds(String[] skippedLineItemIds) {
        this.skippedLineItemIds = skippedLineItemIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedLineItemIds")
    public String[] updatedLineItemIds;
    public BulkUpdateLineItemsResponse withUpdatedLineItemIds(String[] updatedLineItemIds) {
        this.updatedLineItemIds = updatedLineItemIds;
        return this;
    }
}