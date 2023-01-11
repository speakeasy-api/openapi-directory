package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetContributorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public GetAssetContributorsPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}