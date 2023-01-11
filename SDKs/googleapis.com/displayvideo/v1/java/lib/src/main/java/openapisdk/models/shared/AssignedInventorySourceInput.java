package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignedInventorySourceInput
 * An assignment between a targetable inventory source and an inventory source group.
**/
public class AssignedInventorySourceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceId")
    public String inventorySourceId;
    public AssignedInventorySourceInput withInventorySourceId(String inventorySourceId) {
        this.inventorySourceId = inventorySourceId;
        return this;
    }
}