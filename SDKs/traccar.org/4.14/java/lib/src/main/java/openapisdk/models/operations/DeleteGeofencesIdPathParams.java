package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGeofencesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteGeofencesIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}