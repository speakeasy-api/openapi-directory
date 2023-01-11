package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationGroupCoveragesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public GetApplicationGroupCoveragesPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}