package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeAssetId
 * Creative Asset ID.
**/
public class CreativeAssetId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreativeAssetId withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreativeAssetIdTypeEnum type;
    public CreativeAssetId withType(CreativeAssetIdTypeEnum type) {
        this.type = type;
        return this;
    }
}