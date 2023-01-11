package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkUpdateLineItemsRequestInput
 * Request message for LineItemService.BulkUpdateLineItems.
**/
public class BulkUpdateLineItemsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemIds")
    public String[] lineItemIds;
    public BulkUpdateLineItemsRequestInput withLineItemIds(String[] lineItemIds) {
        this.lineItemIds = lineItemIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLineItem")
    public LineItemInput targetLineItem;
    public BulkUpdateLineItemsRequestInput withTargetLineItem(LineItemInput targetLineItem) {
        this.targetLineItem = targetLineItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public BulkUpdateLineItemsRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}