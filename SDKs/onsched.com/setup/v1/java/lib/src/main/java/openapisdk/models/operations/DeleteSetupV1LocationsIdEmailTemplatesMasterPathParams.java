package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSetupV1LocationsIdEmailTemplatesMasterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteSetupV1LocationsIdEmailTemplatesMasterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}