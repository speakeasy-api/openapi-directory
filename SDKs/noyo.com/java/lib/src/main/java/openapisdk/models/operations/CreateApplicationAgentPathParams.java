package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationAgentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public CreateApplicationAgentPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}