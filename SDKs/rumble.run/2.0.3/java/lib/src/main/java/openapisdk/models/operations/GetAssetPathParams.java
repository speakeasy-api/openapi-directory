package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=asset_id")
    public String assetId;
    public GetAssetPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}