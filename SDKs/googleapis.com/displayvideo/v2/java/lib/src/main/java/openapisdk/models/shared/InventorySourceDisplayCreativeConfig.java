package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceDisplayCreativeConfig
 * The configuration for display creatives.
**/
public class InventorySourceDisplayCreativeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeSize")
    public Dimensions creativeSize;
    public InventorySourceDisplayCreativeConfig withCreativeSize(Dimensions creativeSize) {
        this.creativeSize = creativeSize;
        return this;
    }
}