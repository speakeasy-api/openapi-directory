package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public GetAssetPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}