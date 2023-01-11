package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssetCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=asset_id")
    public String assetId;
    public UpdateAssetCommentsPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}