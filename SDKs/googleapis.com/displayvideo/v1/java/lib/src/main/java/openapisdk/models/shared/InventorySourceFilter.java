package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceFilter
 * A filtering option for filtering on Inventory Source entities.
**/
public class InventorySourceFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceIds")
    public String[] inventorySourceIds;
    public InventorySourceFilter withInventorySourceIds(String[] inventorySourceIds) {
        this.inventorySourceIds = inventorySourceIds;
        return this;
    }
}