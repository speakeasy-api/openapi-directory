package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageCollectionItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetImageCollectionItemsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}