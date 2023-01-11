package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeaturedVideoCollectionItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetFeaturedVideoCollectionItemsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}