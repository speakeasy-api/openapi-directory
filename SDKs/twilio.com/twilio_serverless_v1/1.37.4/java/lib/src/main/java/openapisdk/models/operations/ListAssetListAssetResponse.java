package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssetListAssetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public openapisdk.models.shared.ServerlessV1ServiceAsset[] assets;
    public ListAssetListAssetResponse withAssets(openapisdk.models.shared.ServerlessV1ServiceAsset[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListAssetListAssetResponseMeta meta;
    public ListAssetListAssetResponse withMeta(ListAssetListAssetResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}