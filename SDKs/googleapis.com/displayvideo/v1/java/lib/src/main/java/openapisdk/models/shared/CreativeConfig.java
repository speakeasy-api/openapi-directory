package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeConfig
 * Creative requirements configuration for the inventory source.
**/
public class CreativeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeType")
    public CreativeConfigCreativeTypeEnum creativeType;
    public CreativeConfig withCreativeType(CreativeConfigCreativeTypeEnum creativeType) {
        this.creativeType = creativeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayCreativeConfig")
    public InventorySourceDisplayCreativeConfig displayCreativeConfig;
    public CreativeConfig withDisplayCreativeConfig(InventorySourceDisplayCreativeConfig displayCreativeConfig) {
        this.displayCreativeConfig = displayCreativeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoCreativeConfig")
    public InventorySourceVideoCreativeConfig videoCreativeConfig;
    public CreativeConfig withVideoCreativeConfig(InventorySourceVideoCreativeConfig videoCreativeConfig) {
        this.videoCreativeConfig = videoCreativeConfig;
        return this;
    }
}