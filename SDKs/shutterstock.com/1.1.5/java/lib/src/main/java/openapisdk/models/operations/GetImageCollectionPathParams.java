package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetImageCollectionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}