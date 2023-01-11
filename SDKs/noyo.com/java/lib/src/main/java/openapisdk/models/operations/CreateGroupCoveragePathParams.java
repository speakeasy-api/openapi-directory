package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupCoveragePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public CreateGroupCoveragePathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}