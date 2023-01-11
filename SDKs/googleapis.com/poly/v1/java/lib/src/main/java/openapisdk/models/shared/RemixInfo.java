package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemixInfo
 * Info about the sources of this asset (i.e. assets that were remixed to create this asset).
**/
public class RemixInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAsset")
    public String[] sourceAsset;
    public RemixInfo withSourceAsset(String[] sourceAsset) {
        this.sourceAsset = sourceAsset;
        return this;
    }
}