package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSetupV1LocationsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteSetupV1LocationsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}