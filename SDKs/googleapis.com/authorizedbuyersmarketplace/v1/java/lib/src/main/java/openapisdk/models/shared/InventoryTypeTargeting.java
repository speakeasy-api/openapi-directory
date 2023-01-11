package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryTypeTargeting
 * Targeting of the inventory types a bid request can originate from.
**/
public class InventoryTypeTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryTypes")
    public InventoryTypeTargetingInventoryTypesEnum[] inventoryTypes;
    public InventoryTypeTargeting withInventoryTypes(InventoryTypeTargetingInventoryTypesEnum[] inventoryTypes) {
        this.inventoryTypes = inventoryTypes;
        return this;
    }
}