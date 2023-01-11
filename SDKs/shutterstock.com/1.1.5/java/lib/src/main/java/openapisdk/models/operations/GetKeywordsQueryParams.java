package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKeywordsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=asset_id")
    public Object assetId;
    public GetKeywordsQueryParams withAssetId(Object assetId) {
        this.assetId = assetId;
        return this;
    }
}