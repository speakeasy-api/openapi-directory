package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceGroupInput
 * A collection of targetable inventory sources.
**/
public class InventorySourceGroupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InventorySourceGroupInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}