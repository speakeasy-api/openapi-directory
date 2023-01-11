package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSetupV1ServicesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteSetupV1ServicesIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}