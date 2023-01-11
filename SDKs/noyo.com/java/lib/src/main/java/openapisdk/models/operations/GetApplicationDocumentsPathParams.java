package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationDocumentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public GetApplicationDocumentsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}