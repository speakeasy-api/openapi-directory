package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetTrackCollectionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}