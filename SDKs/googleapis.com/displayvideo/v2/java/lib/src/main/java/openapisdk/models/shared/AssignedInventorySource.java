package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignedInventorySource
 * An assignment between a targetable inventory source and an inventory source group.
**/
public class AssignedInventorySource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedInventorySourceId")
    public String assignedInventorySourceId;
    public AssignedInventorySource withAssignedInventorySourceId(String assignedInventorySourceId) {
        this.assignedInventorySourceId = assignedInventorySourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceId")
    public String inventorySourceId;
    public AssignedInventorySource withInventorySourceId(String inventorySourceId) {
        this.inventorySourceId = inventorySourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AssignedInventorySource withName(String name) {
        this.name = name;
        return this;
    }
}