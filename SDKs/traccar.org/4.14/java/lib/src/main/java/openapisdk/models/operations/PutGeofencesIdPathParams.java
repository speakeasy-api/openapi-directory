package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutGeofencesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutGeofencesIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}