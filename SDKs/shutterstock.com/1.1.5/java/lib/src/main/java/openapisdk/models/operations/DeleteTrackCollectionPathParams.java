package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTrackCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteTrackCollectionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}