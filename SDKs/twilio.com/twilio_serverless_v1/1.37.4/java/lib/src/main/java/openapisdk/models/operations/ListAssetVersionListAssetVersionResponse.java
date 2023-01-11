package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssetVersionListAssetVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_versions")
    public openapisdk.models.shared.ServerlessV1ServiceAssetAssetVersion[] assetVersions;
    public ListAssetVersionListAssetVersionResponse withAssetVersions(openapisdk.models.shared.ServerlessV1ServiceAssetAssetVersion[] assetVersions) {
        this.assetVersions = assetVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListAssetVersionListAssetVersionResponseMeta meta;
    public ListAssetVersionListAssetVersionResponse withMeta(ListAssetVersionListAssetVersionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}