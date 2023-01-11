package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public GetGroupApplicationPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}