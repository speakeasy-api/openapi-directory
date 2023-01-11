package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllBankAccountsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public GetAllBankAccountsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}