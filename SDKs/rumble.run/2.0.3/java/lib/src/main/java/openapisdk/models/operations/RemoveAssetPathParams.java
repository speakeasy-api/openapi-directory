package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=asset_id")
    public String assetId;
    public RemoveAssetPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}