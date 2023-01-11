package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBankAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public DeleteBankAccountPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bank_account_id")
    public String bankAccountId;
    public DeleteBankAccountPathParams withBankAccountId(String bankAccountId) {
        this.bankAccountId = bankAccountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public DeleteBankAccountPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}