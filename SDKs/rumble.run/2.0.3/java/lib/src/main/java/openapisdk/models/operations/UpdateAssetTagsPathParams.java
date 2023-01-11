package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssetTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=asset_id")
    public String assetId;
    public UpdateAssetTagsPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}