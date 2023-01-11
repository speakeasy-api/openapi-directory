package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBankAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public CreateBankAccountPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}