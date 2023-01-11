package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOneApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public GetOneApplicationPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}