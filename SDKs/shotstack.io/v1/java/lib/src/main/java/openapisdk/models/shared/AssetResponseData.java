package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetResponseData
 * The type of resource (an asset) and attributes of the asset.
**/
public class AssetResponseData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public AssetResponseAttributes attributes;
    public AssetResponseData withAttributes(AssetResponseAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AssetResponseData withType(String type) {
        this.type = type;
        return this;
    }
}