package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetAssetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}