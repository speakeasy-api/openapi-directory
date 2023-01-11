package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationAgentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public GetApplicationAgentsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}