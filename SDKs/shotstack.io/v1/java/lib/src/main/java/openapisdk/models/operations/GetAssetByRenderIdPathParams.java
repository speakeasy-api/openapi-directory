package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetByRenderIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetAssetByRenderIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}