package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetAssetsHistoryResponse
 * Batch get assets history response.
**/
public class BatchGetAssetsHistoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public TemporalAsset[] assets;
    public BatchGetAssetsHistoryResponse withAssets(TemporalAsset[] assets) {
        this.assets = assets;
        return this;
    }
}