package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTrackCollectionItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteTrackCollectionItemsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}