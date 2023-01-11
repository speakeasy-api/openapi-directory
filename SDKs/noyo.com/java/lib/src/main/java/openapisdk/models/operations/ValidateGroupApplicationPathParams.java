package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateGroupApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public ValidateGroupApplicationPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}