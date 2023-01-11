package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceAssignedTargetingOptionDetails
 * Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`.
**/
public class InventorySourceAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceId")
    public String inventorySourceId;
    public InventorySourceAssignedTargetingOptionDetails withInventorySourceId(String inventorySourceId) {
        this.inventorySourceId = inventorySourceId;
        return this;
    }
}