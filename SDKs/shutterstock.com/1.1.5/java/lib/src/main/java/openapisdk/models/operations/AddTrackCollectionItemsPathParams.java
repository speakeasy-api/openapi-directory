package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTrackCollectionItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AddTrackCollectionItemsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}