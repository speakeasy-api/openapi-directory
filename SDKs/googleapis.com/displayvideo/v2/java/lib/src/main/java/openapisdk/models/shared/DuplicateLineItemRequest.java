package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DuplicateLineItemRequest
 * Request message for LineItemService.DuplicateLineItem.
**/
public class DuplicateLineItemRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDisplayName")
    public String targetDisplayName;
    public DuplicateLineItemRequest withTargetDisplayName(String targetDisplayName) {
        this.targetDisplayName = targetDisplayName;
        return this;
    }
}