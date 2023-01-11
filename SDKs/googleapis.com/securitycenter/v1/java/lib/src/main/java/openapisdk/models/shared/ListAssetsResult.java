package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAssetsResult
 * Result containing the Asset and its State.
**/
public class ListAssetsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset")
    public Asset asset;
    public ListAssetsResult withAsset(Asset asset) {
        this.asset = asset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateChange")
    public ListAssetsResultStateChangeEnum stateChange;
    public ListAssetsResult withStateChange(ListAssetsResultStateChangeEnum stateChange) {
        this.stateChange = stateChange;
        return this;
    }
}