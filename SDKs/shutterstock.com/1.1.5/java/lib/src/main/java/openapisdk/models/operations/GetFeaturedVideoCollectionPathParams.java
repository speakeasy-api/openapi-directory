package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeaturedVideoCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetFeaturedVideoCollectionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}