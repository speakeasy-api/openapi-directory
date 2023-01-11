package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAssetResponse
 * A response message for CreateAsset.
**/
public class CreateAssetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset")
    public Asset asset;
    public CreateAssetResponse withAsset(Asset asset) {
        this.asset = asset;
        return this;
    }
}