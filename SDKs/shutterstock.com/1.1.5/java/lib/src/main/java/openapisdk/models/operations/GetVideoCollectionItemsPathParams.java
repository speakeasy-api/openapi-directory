package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoCollectionItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVideoCollectionItemsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}