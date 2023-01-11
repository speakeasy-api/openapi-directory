package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceGroupAssignedTargetingOptionDetails
 * Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`.
**/
public class InventorySourceGroupAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceGroupId")
    public String inventorySourceGroupId;
    public InventorySourceGroupAssignedTargetingOptionDetails withInventorySourceGroupId(String inventorySourceGroupId) {
        this.inventorySourceGroupId = inventorySourceGroupId;
        return this;
    }
}