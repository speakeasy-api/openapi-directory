package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeLayerInfo
 * What layers exist in this volume and high level information about them.
**/
public class VolumeLayerInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layers")
    public VolumeLayerInfoLayers[] layers;
    public VolumeLayerInfo withLayers(VolumeLayerInfoLayers[] layers) {
        this.layers = layers;
        return this;
    }
}