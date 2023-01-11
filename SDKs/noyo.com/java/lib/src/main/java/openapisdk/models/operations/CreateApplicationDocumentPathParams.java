package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public CreateApplicationDocumentPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}