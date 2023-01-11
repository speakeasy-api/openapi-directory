package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserAsset
 * Data about the user's asset.
**/
public class UserAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset")
    public Asset asset;
    public UserAsset withAsset(Asset asset) {
        this.asset = asset;
        return this;
    }
}