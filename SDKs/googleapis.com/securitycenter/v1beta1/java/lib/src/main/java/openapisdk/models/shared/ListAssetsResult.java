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
    @JsonProperty("state")
    public ListAssetsResultStateEnum state;
    public ListAssetsResult withState(ListAssetsResultStateEnum state) {
        this.state = state;
        return this;
    }
}